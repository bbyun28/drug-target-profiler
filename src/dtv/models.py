# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desidered behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class Activities(models.Model):
    activity_id = models.BigIntegerField(primary_key=True, blank=True)
    # assay = models.ForeignKey('Assays', models.DO_NOTHING, blank=True, null=True,related_name='activity_assay')
    # doc = models.ForeignKey('Docs', models.DO_NOTHING, blank=True, null=True)
    # record = models.ForeignKey('CompoundRecords', models.DO_NOTHING, blank=True, null=True)
    # molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='molregno', blank=True, null=True)
    standard_relation = models.CharField(max_length=50, blank=True, null=True)
    published_value = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    published_units = models.CharField(max_length=100, blank=True, null=True)
    standard_value = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    standard_units = models.CharField(max_length=100, blank=True, null=True)
    standard_flag = models.SmallIntegerField(blank=True, null=True)
    standard_type = models.CharField(max_length=250, blank=True, null=True)
    activity_comment = models.CharField(max_length=4000, blank=True, null=True)
    published_type = models.CharField(max_length=250, blank=True, null=True)
    potential_duplicate = models.SmallIntegerField(blank=True, null=True)
    published_relation = models.CharField(max_length=50, blank=True, null=True)
    pchembl_value = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    uo_units = models.CharField(max_length=10, blank=True, null=True)
    qudt_units = models.CharField(max_length=70, blank=True, null=True)
    dtc_activity_id = models.BigIntegerField(primary_key=True)
    dtc_molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='dtc_molregno')
    dtc_doc = models.ForeignKey('Docs', models.DO_NOTHING)
    dtc_assay = models.ForeignKey('Assays', models.DO_NOTHING)
    dtc_record = models.ForeignKey('CompoundRecords', models.DO_NOTHING)
    dtc_tid = models.ForeignKey('TargetDictionary', models.DO_NOTHING, db_column='dtc_tid', blank=True, null=True)
    min_bioactivity_comp = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    interaction_strength = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    absolute_min_act = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    pubmed_id = models.BigIntegerField(blank=True, null=True)
    description = models.CharField(max_length=4000, blank=True, null=True)
    doi = models.CharField(max_length=50, blank=True, null=True)
    assay_format = models.CharField(max_length=80, blank=True, null=True)
    wildtype_or_mutant = models.CharField(max_length=30, blank=True, null=True)
    mutation_info = models.CharField(max_length=500, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'activities'


class AssayActionMode(models.Model):
    pk_id = models.SmallIntegerField(primary_key=True)
    term = models.CharField(unique=True, max_length=80, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assay_action_mode'


class AssayDetectionTechnology(models.Model):
    pk_id = models.SmallIntegerField(primary_key=True)
    term = models.CharField(unique=True, max_length=80, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assay_detection_technology'


class AssayFormat(models.Model):
    pk_id = models.SmallIntegerField(primary_key=True)
    term = models.CharField(unique=True, max_length=80, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assay_format'


class AssayInhibitorType(models.Model):
    pk_id = models.SmallIntegerField(primary_key=True)
    term = models.CharField(unique=True, max_length=80, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assay_inhibitor_type'


class AssaySubType(models.Model):
    pk_id = models.SmallIntegerField(primary_key=True)
    term = models.CharField(unique=True, max_length=80, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assay_sub_type'


class AssayType(models.Model):
    pk_id = models.SmallIntegerField(primary_key=True)
    term = models.CharField(unique=True, max_length=80, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assay_type'


class Assays(models.Model):
    assay_id = models.IntegerField(primary_key=True, blank=True)
    # doc = models.ForeignKey('Docs', models.DO_NOTHING, blank=True, null=True)
    description = models.CharField(max_length=4000, blank=True, null=True)
    assay_type = models.ForeignKey(AssayType, models.DO_NOTHING, db_column='assay_type', blank=True, null=True)
    assay_test_type = models.CharField(max_length=20, blank=True, null=True)
    assay_category = models.CharField(max_length=20, blank=True, null=True)
    assay_organism = models.CharField(max_length=250, blank=True, null=True)
    assay_tax_id = models.BigIntegerField(blank=True, null=True)
    assay_strain = models.CharField(max_length=200, blank=True, null=True)
    assay_tissue = models.CharField(max_length=100, blank=True, null=True)
    assay_cell_type = models.CharField(max_length=100, blank=True, null=True)
    assay_subcellular_fraction = models.CharField(max_length=100, blank=True, null=True)
    # tid = models.ForeignKey('TargetDictionary', models.DO_NOTHING, db_column='tid', blank=True, null=True)
    src_assay_id = models.CharField(max_length=50, blank=True, null=True)
    dtc_assay_id = models.BigIntegerField(primary_key=True)
    dtc_doc = models.ForeignKey('Docs', models.DO_NOTHING)
    dtc_tid = models.ForeignKey('TargetDictionary', models.DO_NOTHING, db_column='dtc_tid')

    class Meta:
        managed = False
        db_table = 'assays'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)

class Ccle(models.Model):
    dtc_tid = models.CharField(max_length=20, blank=True, null=True)
    gene_name = models.CharField(max_length=100, blank=True, null=True)
    expression_val = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cell_line = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ccle'


class ClinicalData(models.Model):
    study_id = models.CharField(max_length=255, blank=True, null=True)
    drug = models.CharField(max_length=255, blank=True, null=True)
    phase = models.CharField(max_length=30, blank=True, null=True)
    mesh_term = models.TextField(blank=True, null=True)
    symptoms = models.TextField(blank=True, null=True)
    study_title = models.TextField(blank=True, null=True)
    enrollment = models.IntegerField(blank=True, null=True)
    study_type = models.CharField(max_length=50, blank=True, null=True)
    adverse_effects = models.TextField(blank=True, null=True)
    start_date = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=80, blank=True, null=True)
    min_age = models.TextField(blank=True, null=True)
    max_age = models.TextField(blank=True, null=True)
    gender = models.TextField(blank=True, null=True)
    pubmed_ids = models.TextField(blank=True, null=True)
    dtc_molregno = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'clinical_data'
# class ComponentClass(models.Model):
#     component = models.ForeignKey('ComponentSequences', models.DO_NOTHING)
#     protein_class = models.ForeignKey('ProteinClassification', models.DO_NOTHING)
#     comp_class_id = models.IntegerField(primary_key=True)

#     class Meta:
#         managed = False
#         db_table = 'component_class'
#         unique_together = (('component'),)
#         # unique_together = (('component', 'protein_class'),)





class CompoundIdMapping(models.Model):
    src_id = models.BigIntegerField(blank=True, null=True)
    compound_id = models.CharField(max_length=400, blank=True, null=True)
    standard_inchi_key = models.CharField(max_length=30, blank=True, null=True)
    molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='molregno', blank=True, null=True)
    uci = models.CharField(max_length=20)
    dtc_molregno = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'compound_id_mapping'


class CompoundPrefNames(models.Model):
    dtc_molregno = models.CharField(primary_key=True, max_length=20)
    pref_name = models.CharField(max_length=300, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'compound_pref_names'


class CompoundRecords(models.Model):
    # record_id = models.IntegerField(primary_key=True, blank=True, null=True)
    # molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='molregno', blank=True, null=True)
    # doc = models.ForeignKey('Docs', models.DO_NOTHING, blank=True, null=True)
    compound_key = models.CharField(max_length=250, blank=True, null=True)
    compound_name = models.CharField(max_length=4000, blank=True, null=True)
    dtc_doc = models.ForeignKey('Docs', models.DO_NOTHING)
    dtc_molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='dtc_molregno', blank=True, null=True)
    dtc_record_id = models.BigIntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'compound_records'


class CompoundStructures(models.Model):
    # molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='molregno', primary_key=True, blank=True, null=True)
    molfile = models.TextField(blank=True, null=True)
    standard_inchi = models.CharField(max_length=4000, blank=True, null=True)
    standard_inchi_key = models.CharField(max_length=27, blank=True, null=True)
    canonical_smiles = models.CharField(max_length=4000, blank=True, null=True)
    dtc_molregno = models.CharField(primary_key=True, max_length=20)

    class Meta:
        managed = False
        db_table = 'compound_structures'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Docs(models.Model):
    # doc_id = models.IntegerField(primary_key=True, blank=True, null=True)
    journal = models.CharField(max_length=50, blank=True, null=True)
    year = models.SmallIntegerField(blank=True, null=True)
    volume = models.CharField(max_length=50, blank=True, null=True)
    issue = models.CharField(max_length=50, blank=True, null=True)
    first_page = models.CharField(max_length=50, blank=True, null=True)
    last_page = models.CharField(max_length=50, blank=True, null=True)
    pubmed_id = models.BigIntegerField(unique=True, blank=True, null=True)
    doi = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=500, blank=True, null=True)
    doc_type = models.CharField(max_length=50, blank=True, null=True)
    authors = models.CharField(max_length=4000, blank=True, null=True)
    abstract = models.TextField(blank=True, null=True)
    patent_id = models.CharField(max_length=20, blank=True, null=True)
    dtc_doc_id = models.AutoField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'docs'


class DrugIndication(models.Model):
    drugind_id = models.IntegerField(primary_key=True)
    record = models.ForeignKey(CompoundRecords, models.DO_NOTHING)
    molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='molregno', blank=True, null=True)
    max_phase_for_ind = models.SmallIntegerField(blank=True, null=True)
    mesh_id = models.CharField(max_length=7)
    mesh_heading = models.CharField(max_length=200)
    efo_id = models.CharField(max_length=20, blank=True, null=True)
    efo_term = models.CharField(max_length=200, blank=True, null=True)
    dtc_molregno = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'drug_indication'
        unique_together = (('record', 'mesh_id', 'efo_id'),)


class DtcAnnotationLayer(models.Model):
    assay_format = models.ForeignKey(AssayFormat, models.DO_NOTHING, blank=True, null=True)
    assay_type = models.ForeignKey(AssayType, models.DO_NOTHING, blank=True, null=True)
    assay_sub_type = models.ForeignKey(AssaySubType, models.DO_NOTHING, blank=True, null=True)
    endpoint_actionmode = models.ForeignKey(AssayActionMode, models.DO_NOTHING, blank=True, null=True)
    inhibitor_type = models.ForeignKey(AssayInhibitorType, models.DO_NOTHING, blank=True, null=True)
    detection_technology = models.ForeignKey(AssayDetectionTechnology, models.DO_NOTHING, blank=True, null=True)
    wildtype_or_mutant = models.CharField(max_length=30, blank=True, null=True)
    mutation_info = models.CharField(max_length=2000, blank=True, null=True)
    compound_concentration_value = models.CharField(max_length=30, blank=True, null=True)
    compound_concentration_value_unit = models.CharField(max_length=100, blank=True, null=True)
    substrate_type = models.TextField(blank=True, null=True)
    substrate_relation = models.CharField(max_length=50, blank=True, null=True)
    substrate_value = models.CharField(max_length=50, blank=True, null=True)
    substrate_units = models.CharField(max_length=100, blank=True, null=True)
    curator_email = models.TextField(blank=True, null=True)
    time_stamp = models.DateTimeField(blank=True, null=True)
    annotation_comments = models.CharField(max_length=4000, blank=True, null=True)
    annotations_flag = models.CharField(max_length=6, blank=True, null=True)
    # tid = models.ForeignKey('TargetDictionary', models.DO_NOTHING, db_column='tid', blank=True, null=True)
    # activity = models.ForeignKey(Activities, models.DO_NOTHING, blank=True, null=True)
    # record = models.ForeignKey(CompoundRecords, models.DO_NOTHING, blank=True, null=True)
    # doc = models.ForeignKey(Docs, models.DO_NOTHING, blank=True, null=True)
    # molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='molregno', blank=True, null=True)
    # assay = models.ForeignKey(Assays, models.DO_NOTHING, blank=True, null=True)
    target = models.ForeignKey('TidUniprotGenenames', models.DO_NOTHING, blank=True, null=True)
    dtc_molregno = models.ForeignKey('MoleculeDictionary', models.DO_NOTHING, db_column='dtc_molregno', blank=True, null=True)
    dtc_doc = models.ForeignKey(Docs, models.DO_NOTHING, blank=True, null=True)
    dtc_assay = models.ForeignKey(Assays, models.DO_NOTHING, blank=True, null=True)
    dtc_record_id = models.BigIntegerField(blank=True, null=True)
    dtc_tid = models.ForeignKey('TargetDictionary', models.DO_NOTHING, db_column='dtc_tid', blank=True, null=True)
    dtc_activity = models.ForeignKey(Activities, models.DO_NOTHING, blank=True, null=True)
    approved_by = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dtc_annotation_layer'


class IndicationRefs(models.Model):
    indref_id = models.IntegerField(primary_key=True)
    drugind = models.ForeignKey(DrugIndication, models.DO_NOTHING)
    ref_type = models.CharField(max_length=50)
    ref_id = models.CharField(max_length=2000)
    ref_url = models.CharField(max_length=4000)

    class Meta:
        managed = False
        db_table = 'indication_refs'

class Gdsc(models.Model):
    dtc_tid = models.CharField(max_length=20, blank=True, null=True)
    gene_name = models.CharField(max_length=100, blank=True, null=True)
    expression_val = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cell_line = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'gdsc'

class GeneDiseaseAssociation(models.Model):
    gene_name = models.CharField(max_length=100, blank=True, null=True)
    disease_id = models.CharField(max_length=30, blank=True, null=True)
    disease_name = models.TextField(blank=True, null=True)
    score = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    no_of_snps = models.IntegerField(blank=True, null=True)
    source = models.CharField(max_length=60, blank=True, null=True)
    pubmed_id = models.BigIntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    dtc_tid = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'gene_disease_association'


class Genetech(models.Model):
    dtc_tid = models.CharField(max_length=20, blank=True, null=True)
    gene_name = models.CharField(max_length=100, blank=True, null=True)
    expression_val = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cell_line = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'genetech'


class MoleculeDictionary(models.Model):
    # molregno = models.IntegerField(primary_key=True, blank=True, null=True)
    pref_name = models.CharField(max_length=255, blank=True, null=True)
    max_phase = models.SmallIntegerField(blank=True, null=True)
    therapeutic_flag = models.SmallIntegerField()
    dosed_ingredient = models.SmallIntegerField()
    structure_type = models.CharField(max_length=10, blank=True, null=True)
    chebi_par_id = models.IntegerField(blank=True, null=True)
    molecule_type = models.CharField(max_length=30, blank=True, null=True)
    first_approval = models.SmallIntegerField(blank=True, null=True)
    oral = models.SmallIntegerField()
    parenteral = models.SmallIntegerField()
    topical = models.SmallIntegerField()
    black_box_warning = models.SmallIntegerField()
    natural_product = models.SmallIntegerField()
    first_in_class = models.SmallIntegerField()
    chirality = models.SmallIntegerField()
    prodrug = models.SmallIntegerField()
    inorganic_flag = models.SmallIntegerField()
    usan_year = models.SmallIntegerField(blank=True, null=True)
    availability_type = models.SmallIntegerField(blank=True, null=True)
    usan_stem = models.CharField(max_length=50, blank=True, null=True)
    polymer_flag = models.SmallIntegerField(blank=True, null=True)
    usan_substem = models.CharField(max_length=50, blank=True, null=True)
    usan_stem_definition = models.CharField(max_length=1000, blank=True, null=True)
    indication_class = models.CharField(max_length=1000, blank=True, null=True)
    withdrawn_flag = models.SmallIntegerField()
    withdrawn_year = models.SmallIntegerField(blank=True, null=True)
    withdrawn_country = models.CharField(max_length=2000, blank=True, null=True)
    withdrawn_reason = models.CharField(max_length=2000, blank=True, null=True)
    dtc_molregno = models.CharField(primary_key=True, max_length=20)
    chembl_id = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'molecule_dictionary'


class ProteinFamilyClassification(models.Model):
    protein_class_id = models.IntegerField(primary_key=True)
    protein_class_desc = models.CharField(unique=True, max_length=810)
    l1 = models.CharField(max_length=100)
    l2 = models.CharField(max_length=100, blank=True, null=True)
    l3 = models.CharField(max_length=100, blank=True, null=True)
    l4 = models.CharField(max_length=100, blank=True, null=True)
    l5 = models.CharField(max_length=100, blank=True, null=True)
    l6 = models.CharField(max_length=100, blank=True, null=True)
    l7 = models.CharField(max_length=100, blank=True, null=True)
    l8 = models.CharField(max_length=100, blank=True, null=True)
    protein_class_dtc = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'protein_family_classification'
        unique_together = (('l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8'),)


class StartSearch(models.Model):
    term_id = models.CharField(max_length=30, blank=True, null=True)
    term_name = models.CharField(max_length=4000, blank=True, null=True)
    term_type = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'start_search'


class SuggestionForReview(models.Model):
    compound_id = models.CharField(max_length=20, blank=True, null=True)
    target_id = models.CharField(max_length=250, blank=True, null=True)
    target_pref_name = models.CharField(max_length=250, blank=True, null=True)
    ep_standard_type = models.CharField(max_length=250, blank=True, null=True)
    ep_standard_relation = models.CharField(max_length=50, blank=True, null=True)
    ep_standard_value = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    ep_standard_units = models.CharField(max_length=100, blank=True, null=True)
    activity_comment = models.CharField(max_length=4000, blank=True, null=True)
    assay_description = models.TextField(blank=True, null=True)
    authors = models.CharField(max_length=4000, blank=True, null=True)
    annotation_comments = models.CharField(max_length=4000, blank=True, null=True)
    status = models.CharField(max_length=10, blank=True, null=True)
    curator_name = models.CharField(max_length=30, blank=True, null=True)
    time_stamp = models.DateTimeField(blank=True, null=True)
    pubmed_id = models.BigIntegerField(blank=True, null=True)
    assay_id = models.IntegerField(blank=True, null=True)
    assay_type_id = models.SmallIntegerField(blank=True, null=True)
    assay_format_id = models.SmallIntegerField(blank=True, null=True)
    assay_sub_type_id = models.SmallIntegerField(blank=True, null=True)
    inhibitor_type_id = models.SmallIntegerField(blank=True, null=True)
    detection_technology_id = models.SmallIntegerField(blank=True, null=True)
    endpoint_actionmode_id = models.SmallIntegerField(blank=True, null=True)
    assay_cell_type = models.CharField(max_length=100, blank=True, null=True)
    wildtype_or_mutant = models.CharField(max_length=30, blank=True, null=True)
    mutation_info = models.CharField(max_length=50, blank=True, null=True)
    substrate_type = models.TextField(blank=True, null=True)
    compound_concentration_value = models.CharField(max_length=30, blank=True, null=True)
    curator_email = models.TextField(blank=True, null=True)
    journal = models.CharField(max_length=50, blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    volume = models.CharField(max_length=50, blank=True, null=True)
    issue = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=500, blank=True, null=True)
    compound_name = models.CharField(max_length=4000, blank=True, null=True)
    compound_concentration_value_unit = models.CharField(max_length=100, blank=True, null=True)
    substrate_relation = models.CharField(max_length=30, blank=True, null=True)
    substrate_value = models.CharField(max_length=50, blank=True, null=True)
    substrate_units = models.CharField(max_length=50, blank=True, null=True)
    standard_inchi_key = models.CharField(max_length=27, blank=True, null=True)
    weblink = models.CharField(max_length=300, blank=True, null=True)
    gene_names = models.CharField(max_length=800, blank=True, null=True)
    annotations_flag = models.NullBooleanField()
    user = models.ForeignKey(AuthUser, models.DO_NOTHING, blank=True, null=True)
    dtc_activity_id = models.BigIntegerField(blank=True, null=True)
    dtc_molregno = models.CharField(max_length=20, blank=True, null=True)
    dtc_doc_id = models.IntegerField(blank=True, null=True)
    dtc_assay_id = models.BigIntegerField(blank=True, null=True)
    dtc_record_id = models.BigIntegerField(blank=True, null=True)
    dtc_tid = models.CharField(max_length=20, blank=True, null=True)
    admin_comments = models.CharField(max_length=2000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'suggestion_for_review'



class TargetDictionary(models.Model):
    tid = models.IntegerField(primary_key=True, blank=True)
    pref_name = models.CharField(max_length=200)
    tax_id = models.BigIntegerField(blank=True, null=True)
    organism = models.CharField(max_length=150, blank=True, null=True)
    species_group_flag = models.SmallIntegerField()
    dtc_tid = models.CharField(primary_key=True, max_length=20)
    protein_class = models.CharField(max_length=100, blank=True, null=True)
    uniprot_id = models.CharField(max_length=100, blank=True, null=True)
    gene_name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'target_dictionary'


class TargetIdMapping(models.Model):
    uniprotkbac = models.CharField(max_length=10)
    id_type = models.CharField(max_length=40, blank=True, null=True)
    id_value = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'target_id_mapping'


class TidUniprotGenenames(models.Model):
    target_id = models.IntegerField(primary_key=True)
    uniprot_id = models.TextField(blank=True, null=True)
    gene_name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tid_uniprot_genenames'


class UcSource(models.Model):
    src_id = models.BigIntegerField()
    name = models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=2000, blank=True, null=True)
    current_release_u = models.BigIntegerField(blank=True, null=True)
    created = models.DateField(blank=True, null=True)
    last_updated = models.DateField(blank=True, null=True)
    userstamp = models.CharField(max_length=20, blank=True, null=True)
    number_or_date = models.CharField(max_length=20, blank=True, null=True)
    name_long = models.CharField(max_length=2000, blank=True, null=True)
    src_details = models.CharField(max_length=2000, blank=True, null=True)
    src_url = models.CharField(max_length=2000, blank=True, null=True)
    base_id_url = models.CharField(max_length=2000, blank=True, null=True)
    base_id_url_available = models.BigIntegerField(blank=True, null=True)
    aux_required = models.BigIntegerField(blank=True, null=True)
    aux_for_url = models.BigIntegerField(blank=True, null=True)
    aux_description = models.CharField(max_length=4000, blank=True, null=True)
    private = models.BigIntegerField(blank=True, null=True)
    name_label = models.CharField(max_length=200, blank=True, null=True)
    src_class = models.BigIntegerField(blank=True, null=True)
    keys_only = models.BigIntegerField(blank=True, null=True)
    update_min = models.BigIntegerField(blank=True, null=True)
    update_opt = models.BigIntegerField(blank=True, null=True)
    update_max = models.BigIntegerField(blank=True, null=True)
    update_j = models.BigIntegerField(blank=True, null=True)
    update_comments = models.CharField(max_length=500, blank=True, null=True)
    synonyms = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'uc_source'
