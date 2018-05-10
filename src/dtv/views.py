from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse,JsonResponse
import json,pdb,decimal
from dtv.models import Ccle,Genetech,Gdsc
from django.db import connection
import pandas as pd


#bosutinib,adra1A(DTCT0023204 )
#"" as Wild_type_mutated

def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]
def decimal_default(obj):
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    #raise TypeError
def home(request):
    # pdb.set_trace()
    return render(request, "home.html", {'nbar': 'home'})

def search(request):
    # pdb.set_trace()
    return render(request, "search.html", {'nbar': 'search'})

def help(request):
    return render(request, "help.html", {'nbar': 'help'})

# def about(request):
#     return render(request, "about.html")

def getCcle(request,*args,**kwargs):
    geneName = json.loads(request.body.decode('utf-8'))['geneName'] # decode POST parameters and convert into json object
    CcleQuerySet = Ccle.objects.filter(gene_name=geneName).values('cell_line','expression_val').order_by('-expression_val')[:10]
    df = pd.DataFrame(list(CcleQuerySet))
    return JsonResponse({'labels':df['cell_line'].tolist(),'data':df['expression_val'].tolist()})

def getGdsc(request):
    geneName = json.loads(request.body.decode('utf-8'))['geneName'] # decode POST parameters and convert into json object
    GdscQuerySet = Gdsc.objects.filter(gene_name=geneName).values('expression_val', 'cell_line').order_by('-expression_val')[:10]
    df = pd.DataFrame(list(GdscQuerySet))
    return JsonResponse({'labels':df['cell_line'].tolist(),'data':df['expression_val'].tolist()})

def getGeneTech(request):
    geneName = json.loads(request.body.decode('utf-8'))['geneName'] # decode POST parameters and convert into json object
    geneTechQuery = Genetech.objects.filter(gene_name=geneName).values('expression_val', 'cell_line').order_by('-expression_val')[:10]
    df = pd.DataFrame(list(geneTechQuery))
    return JsonResponse({'labels':df['cell_line'].tolist(),'data':df['expression_val'].tolist()})

def getCellLines(request):
    params = json.loads(request.body.decode('utf-8'))
    sql = "SELECT  ds.dataset_name,  c.cell_name, p.DSS1 from pharmacodb.drugs d, pharmacodb.cells c, pharmacodb.datasets ds, pharmacodb.profiles p, pharmacodb.experiments e where ds.dataset_id= e.dataset_id and c.cell_id=e.cell_id and e.drug_id=d.drug_id and e.experiment_id=p.experiment_id and ds.dataset_name='%(db)s' and d.drug_name = upper('%(drug)s') order by p.DSS1 desc limit 10" % {'drug':params['drug'],'db':params['db']}
    cursor = connection.cursor()
    cursor.execute(sql)
    names = [ x[0] for x in cursor.description]
    rows = cursor.fetchall()
    df = pd.DataFrame(rows, columns=names)
    return JsonResponse({'labels':df['cell_name'].tolist(),'data':df['dss1'].tolist()})


def TargetDiseaseinfo(request):
    gene_name = request.POST['gene_name']
    sql = "SELECT distinct dtc_tid, gene_name, disease_id, disease_name, score, no_of_snps, description, source,  pubmed_id from network_visuals.gene_disease_association where gene_name='%(gene_name)s'" % {'gene_name':gene_name}
    cursor = connection.cursor()
    cursor.execute(sql)
    data = dictfetchall(cursor)
    count = len(data)
    result = {'draw':1,'data':data,'recordsTotal':count,'recordsFiltered':count}
    return HttpResponse(json.dumps(result,default=decimal_default),content_type="application/json")
#for target cross ref

def TargetCrfInfo(request):
    uniprot_id = request.POST['uniprot_id']
    sql = "SELECT uniprotkbac as uniprot_id, id_type as database_name, id_value, link as url from drugtargetcommons.target_id_mapping tim where tim.id_type in ('PharmGKB','Orphanet','GeneTree','KO','DIP','GeneCards','UniRef90','CCDS','MIM','RefSeq','GenomeRNAi','PDB','KEGG','UniRef100','OrthoDB','GuidetoPHARMACOLOGY','HGNC','UniGene','DMDM','Reactome','TreeFam','BioMuta','Ensembl','Ensembl_TRS','UniRef50','MINT','neXtProt','ChEMBL','EMBL','GeneID','DrugBank') and tim.uniprotkbac ='%(uniprot_id)s'" % {'uniprot_id':uniprot_id}
    
    cursor = connection.cursor()
    cursor.execute(sql)
    data = dictfetchall(cursor)
    count = len(data)
    result = {'draw':1,'data':data,'recordsTotal':count,'recordsFiltered':count}
    return HttpResponse(json.dumps(result,default=decimal_default),content_type="application/json")

def ClinicalInfo(request):
    compound = request.POST['compound']
    
    sql = "SELECT study_id, drug, phase, mesh_term, symptoms, study_title, enrollment, study_type, adverse_effects, start_date, status, min_age, max_age, gender, pubmed_ids, dtc_molregno from  drugtargetcommons.clinical_data where drug=upper('%(compound)s')" % {'compound':compound}
    cursor = connection.cursor()
    cursor.execute(sql)
    data = dictfetchall(cursor)
    count = len(data)
    result = {'draw':1,'data':data,'recordsTotal':count,'recordsFiltered':count}
    return HttpResponse(json.dumps(result,default=decimal_default),content_type="application/json")
#for target cross ref

def CompoundCrfInfo(request):
    compound = request.POST['compound']

    sql = "SELECT distinct cid.compound_name, us.name as database_name, cid.compound_id as id, concat(us.base_id_url,cid.compound_id) as url from network_visuals.uc_source us,network_visuals.compound_id_mapping cid where  compound_name = upper('%(compound)s') and us.src_id = cid.src_id" % {'compound':compound}

    cursor = connection.cursor()
    cursor.execute(sql)
    data = dictfetchall(cursor)
    count = len(data)
    result = {'draw':1,'data':data,'recordsTotal':count,'recordsFiltered':count}
    return HttpResponse(json.dumps(result,default=decimal_default),content_type="application/json")  