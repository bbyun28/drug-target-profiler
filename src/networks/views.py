from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse,JsonResponse
from xlsxwriter.workbook import Workbook
import json,pdb,decimal
from django.views.decorators.csrf import csrf_exempt
from dtv.models import StartSearch,ClinicalData
from django.db import connection
from django.forms import ModelForm
from networks.models import Network
import pandas as pd
from django.core.files import File
from io import BytesIO
from collections import Counter
from django.conf import settings
from django import forms
from django.contrib import messages
import numpy as np
from dtv.models import Ccle,Genetech,Gdsc

class NetworkForm(ModelForm):
    class Meta:
        model = Network
        fields = ['search_terms']

class UploadNetworkForm(ModelForm):

    def clean_data_file(self):
        excelfile = self.cleaned_data['data_file']
        if excelfile:
            try:
                df = pd.read_excel(BytesIO(excelfile.read()))
            except Exception as e:
                raise forms.ValidationError('Wrong File Format/content,Only excel ".xlsx" files are allowed')

            columns = ['Compoud name', 'Phase', 'Target name', 'Mutation info','Bioactivity type', 'Bioactivity value', 'Interaction strength','Protein class']

            if set(columns) != set(df.columns):
                raise forms.ValidationError("Columns don't match, Please download the example file and try again")

            duplicate = [k for k,v in Counter(df.index.values).items() if v>1]
            if len(duplicate) > 0:
                raise forms.ValidationError('File has duplicate entries')   
                
            file_type = excelfile.content_type.split('/')[0]

            if len(excelfile.name.split('.')) == 1:

                raise forms.ValidationError(_("File type is not supported,Only excel '.xlsx' files are allowed."))

            if file_type in settings.TASK_UPLOAD_FILE_TYPES:
                if excelfile._size > settings.TASK_UPLOAD_FILE_MAX_SIZE:
                    raise forms.ValidationError(('Please keep filesize under %s. Current filesize %s') % (filesizeformat(settings.TASK_UPLOAD_FILE_MAX_SIZE), filesizeformat(excelfile._size)))
            else:
                raise forms.ValidationError(("File type is not supported,Only excel '.xlsx' files are allowed."))
        

        return excelfile
    
    class Meta:
        model = Network
        fields = ['data_file']

def decimal_default(obj):
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    #raise TypeError

def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]


def getresults(network,iStrengthFrom = 0.80,iStrengthTo = 1.0):
    if network.search_terms:
        search_terms = network.search_terms.upper().replace(' ','').split(',')
        if network.is_range:
            iStrengthRange = network.is_range.split(',')
            iStrengthFrom = float(iStrengthRange[0])
            iStrengthTo = float(iStrengthRange[1])

         
        molregno_ids = StartSearch.objects.values_list('term_id', flat=True).filter(term_name__in=search_terms,term_type='COMPOUND')
        tid_ids = StartSearch.objects.values_list('term_id', flat=True).filter(term_name__in=search_terms,term_type='TARGET')
        df = pd.DataFrame()

        #get networkinfo
        # a = Activities.objects.filter(dtc_molregno__dtc_molregno__in=molregno_ids).select_related('dtc_molregno').values('dtc_molregno__max_phase','dtc_molregno__chembl_id','dtc_molregno__pref_name')
        cursor = connection.cursor()
        for molregno in molregno_ids:

            sql = "SELECT distinct md.chembl_id as compound_id, md.pref_name as compound_name, md.max_phase,td.uniprot_id as target_id,td.gene_name,td.protein_class as family_name,act.wildtype_or_mutant as wild_type_mutated, act.mutation_info,  act.standard_type as EP_StandardType, act.standard_relation as EP_StandardRelation, act.standard_value as EP_StandardValue, act.standard_units as EP_StandardUnits, act.interaction_strength,  act.assay_format,act.pubmed_id,act.dtc_molregno,act.dtc_tid from network_visuals.molecule_dictionary md,  network_visuals.activities act, network_visuals.target_dictionary td WHERE  md.dtc_molregno = act.dtc_molregno  AND act.dtc_tid = td.dtc_tid  and act.dtc_molregno ='%(molregno_ids)s' and    interaction_strength >= %(iStrengthFrom)s and interaction_strength <= %(iStrengthTo)s  order by   act.interaction_strength  desc , wild_type_mutated" % {'molregno_ids': molregno,'iStrengthFrom':iStrengthFrom,'iStrengthTo':iStrengthTo}
            cursor.execute(sql)
            result = pd.DataFrame(cursor.fetchall())
            if not result.empty:
                result.columns = [col[0] for col in cursor.description]
            df = df.append(result, ignore_index = True)

           
        for tid in tid_ids:

            sql = "SELECT distinct md.chembl_id as compound_id, md.pref_name as compound_name, md.max_phase,td.uniprot_id as target_id,td.gene_name,td.protein_class as family_name,act.wildtype_or_mutant as wild_type_mutated, act.mutation_info,  act.standard_type as EP_StandardType, act.standard_relation as EP_StandardRelation, act.standard_value as EP_StandardValue, act.standard_units as EP_StandardUnits, act.interaction_strength,  act.assay_format,act.pubmed_id,act.dtc_molregno,act.dtc_tid from network_visuals.molecule_dictionary md,  network_visuals.activities act, network_visuals.target_dictionary td WHERE  md.dtc_molregno = act.dtc_molregno  AND act.dtc_tid = td.dtc_tid  and act.dtc_tid ='%(tid)s' and    interaction_strength >= %(iStrengthFrom)s and interaction_strength <= %(iStrengthTo)s  order by  act.interaction_strength  desc , wild_type_mutated" % {'tid': tid,'iStrengthFrom':iStrengthFrom,'iStrengthTo':iStrengthTo}

            cursor.execute(sql)
            result = pd.DataFrame(cursor.fetchall())
            if not result.empty:
                result.columns = [col[0] for col in cursor.description] 
            df = df.append(result, ignore_index = True)
        df = df.fillna('')
            # df.columns = [col[0] for col in cursor.description]     
        
    else:
        df = pd.read_excel(network.data_file)
        df.columns = ['compound_name', 'max_phase','gene_name','mutation_info','ep_standardtype','ep_standardvalue','interaction_strength','family_name']
        df['wild_type_mutated'] = np.where(df['mutation_info'].isnull(), 'WILD_TYPE', 'MUTATED')
        df['ep_standardtype'] = np.where(df['ep_standardtype'].isnull(), 'Unknown',df['ep_standardtype'])
        df['ep_standardtype'] = np.where(df['ep_standardtype']!= 'Unknown', df['ep_standardtype'].str.upper(),df['ep_standardtype'])
        df['compound_id'] = ''
        df['target_id'] = ''
        df['ep_standardrelation'] = ''
        df['ep_standardunits'] = ''
        df['assay_format'] = 'Unknown'
        df['pubmed_id'] = ''
        df['dtc_molregno'] = ''
        df['dtc_tid'] = ''
        cols = df.columns.tolist()
        cols = [cols[9]] + cols[0:3] +[cols[10]] + [cols[7]] + [cols[8]] + cols[3:5] + [cols[-6]] +[cols[5]] + [cols[-5]] + [cols[6]] + cols[-4:]
        df = df[cols]
        df = df.fillna('')
    return df.to_dict(orient='record')

def network(request):
    search_term =  request.POST['search_terms'].strip()
    if request.method == 'POST' and (search_term or len(request.FILES) != 0):
        if len(request.FILES) == 0:
            form = NetworkForm(request.POST or None)
        else:
            form = UploadNetworkForm(request.POST or None,request.FILES)
        
        if form.is_valid():
            obj=form.save()
            # messages.success(request,'File created successfully,please wait while your file is being processed')
            # if request.FILES:
            #     return redirect('preview', pk=obj.id) 
            # else:
            return redirect('network_view', pk=obj.id)   
        else:
            if form.errors:
                messages.error(request,form.errors['data_file'][0])
                return redirect('home')

    else:
        messages.error(request,'Please enter search key words or upload a file')
        return redirect('home')

def preview(request, pk, template_name='networks/preview.html'):
    network = get_object_or_404(Network, pk=pk)
    network = Network.objects.get(pk=network.id)
    

    return render(request, template_name, {'network':network})

def network_view(request,pk):
    network = get_object_or_404(Network, pk=pk)
    result = getresults(network)
    if not result:
        messages.error(request,'No results found for "%s"' % network.search_terms)
        network.delete()
        return redirect('search')

    restoreSession = network.settings
    if not restoreSession:
        restoreSession = ""
    context = {
            "data": json.dumps(result,default=decimal_default),
            "id":pk,
            "restoreSession":restoreSession
            }        
    return render(request, "networks/network.html", context)

def more_nodes(request):
    body = json.loads(request.body.decode('utf-8')) # decode POST parameters and convert into json object
    network = get_object_or_404(Network, pk=body['nid'])
    result = getresults(network,body['iStrengthFrom'],body['iStrengthTo'])

    return HttpResponse(json.dumps(result,default=decimal_default),content_type="application/json")

def saveSession(request):
    body = json.loads(request.body.decode('utf-8')) # decode POST parameters and convert into json object
    network = Network.objects.get(id=body['id'])
    network.settings = json.dumps(body['settings'])
    network.is_range=','.join(map(str, body['range'])) 
    if network.save():
        success = 1
    else:
        success = 0    
    return JsonResponse({'success':success})

def export_to_excel(request):

    body = json.loads(request.body.decode('utf-8')) # decode POST parameters and convert into json object
    phaseMapping = {"Preclinical":0, "Phase III":3, "Phase I":1, "Approved":4, "Phase II":2}
    data = body['data']
    
    b_range =  body['range']
    linksExclude = body['linksExclude']
    classesExclude = body['classesExclude']
    phaseExclude = list(map(phaseMapping.get, body['phaseExclude']))
    showMut = ['MUTATED','WILD_TYPE'] if body['showMut'] else ['WILD_TYPE']

    df = pd.DataFrame(data)
    #filter dataframe from user selected parameter
    df = df[(~df.family_name.isin(classesExclude) & (~df.ep_standardtype.isin(linksExclude)) & (~df.family_name.isin(phaseExclude)) & (~df.max_phase.isin(phaseExclude)) & (df.interaction_strength < b_range[1]) & (df.interaction_strength > b_range[0]) & (df.wild_type_mutated.isin(showMut)))]

    compounds = list(filter(None, df.compound_name.unique().tolist()))
    targets = list(filter(None, df.target_id.unique().tolist()))
    genes = list(filter(None, df.gene_name.unique().tolist()))
    
    #get Clinical data
    c_data = ClinicalData.objects.filter(drug__in=compounds).defer("id").values()
    df_clinicaldata = pd.DataFrame(list(c_data))
    target_disease_information = target_disease_info(genes)
    get_ccle = getCcle(genes)
    get_gdsc = getGdsc(genes)
    get_gene_tech = getGeneTech(genes)
    get_comp_ccle = getCellLines(compounds,'CCLE')
    get_comp_gdsc = getCellLines(compounds,'GDSC1000')
    get_comp_gcsi = getCellLines(compounds,'gCSI')
    get_comp_grey = getCellLines(compounds,'GREY')
    get_comp_fimm = getCellLines(compounds,'FIMM')
    get_comp_ctrp = getCellLines(compounds,'CTRPv2')
    get_comp_uhn = getCellLines(compounds,'UHNBreast')
    output = BytesIO()
    writer = pd.ExcelWriter(output, engine='xlsxwriter')
    df.to_excel(writer, sheet_name='Network data',index=False)
    
    if not df_clinicaldata.empty: df_clinicaldata.to_excel(writer, sheet_name='Clinical data',index=False)
    if not target_disease_information.empty: target_disease_information.to_excel(writer, sheet_name='Disease association',index=False)
    if not get_ccle.empty: get_ccle.to_excel(writer, sheet_name='CCLE-Targets',index=False)
    if not get_gdsc.empty: get_gdsc.to_excel(writer, sheet_name='GDSC-Targets',index=False)
    if not get_gene_tech.empty: get_gene_tech.to_excel(writer, sheet_name='Genetech-Targets',index=False)
    if not get_comp_ccle.empty: get_comp_ccle.to_excel(writer, sheet_name='CCLE-Compounds',index=False)
    if not get_comp_gdsc.empty: get_comp_gdsc.to_excel(writer, sheet_name='GDSC1000-Compounds',index=False)
    if not get_comp_gcsi.empty: get_comp_gcsi.to_excel(writer, sheet_name='gCSI-Compounds',index=False)
    if not get_comp_grey.empty: get_comp_grey.to_excel(writer, sheet_name='GREY-Compounds',index=False)
    if not get_comp_fimm.empty: get_comp_fimm.to_excel(writer, sheet_name='FIMM-Compounds',index=False)
    if not get_comp_ctrp.empty: get_comp_ctrp.to_excel(writer, sheet_name='CTRPv2-Compounds',index=False)
    if not get_comp_uhn.empty: get_comp_uhn.to_excel(writer, sheet_name='UHNBreast-Compounds',index=False)
    # Get the xlsxwriter objects from the dataframe writer object.
    workbook  = writer.book
    workbook.close()
    output.seek(0)
    response = HttpResponse(output.read(), content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    return response

def target_disease_info(genes):
    cursor = connection.cursor()
    genes = tuple(genes)
    params = {'genes': genes}
    sql = "SELECT distinct dtc_tid, gene_name, disease_id, disease_name, score, no_of_snps, description, source,  pubmed_id from network_visuals.gene_disease_association where gene_name IN %(genes)s" % params
    cursor = connection.cursor()
    cursor.execute(sql)
    rows = dictfetchall(cursor)
    return pd.DataFrame(rows)


def getCcle(genes):
    df = pd.DataFrame()
    for g in genes:
        CcleQuerySet = Ccle.objects.filter(gene_name=g).values('gene_name','cell_line','expression_val').order_by('-expression_val')[:10]
        df = df.append(list(CcleQuerySet), ignore_index = True)
    return df

def getGdsc(genes):
    df = pd.DataFrame()
    for g in genes:
        GdscQuerySet = Gdsc.objects.filter(gene_name=g).values('gene_name','expression_val', 'cell_line').order_by('-expression_val')[:10]
        df = df.append(list(GdscQuerySet),ignore_index = True)
    return df

def getGeneTech(genes):
    
    df = pd.DataFrame()
    for g in genes:
        geneTechQuery = Genetech.objects.filter(gene_name=g).values('gene_name','expression_val', 'cell_line').order_by('-expression_val')[:10]
        df = df.append(list(geneTechQuery),ignore_index = True)
    return df

def getCellLines(compounds,db):
    df = pd.DataFrame()
    for comp in compounds:
        sql = "SELECT  ds.dataset_name,  c.cell_name, p.DSS1,d.drug_name from pharmacodb.drugs d, pharmacodb.cells c, pharmacodb.datasets ds, pharmacodb.profiles p, pharmacodb.experiments e where ds.dataset_id= e.dataset_id and c.cell_id=e.cell_id and e.drug_id=d.drug_id and e.experiment_id=p.experiment_id and ds.dataset_name='%(db)s' and d.drug_name = upper('%(drug)s') order by p.DSS1 desc limit 10" % {'drug':comp,'db':db}
        cursor = connection.cursor()
        cursor.execute(sql)
        rows = dictfetchall(cursor)
        if rows:
            df = df.append(rows)
    return df        
