
  // on window resize
  $(window).resize(function() {
  
    // return to initial coordinate scale
    for(var j=0,l2=depictedNodes.length;j<l2;j++)
      (depictedNodes[j].x=depictedNodes[j].x*(initialWidth/width),depictedNodes[j].y=depictedNodes[j].y*(initialHeight/height),
      depictedNodes[j].fx=depictedNodes[j].fx*(initialWidth/width),depictedNodes[j].fy=depictedNodes[j].fy*(initialHeight/height));
    
    // redraw container
    window.container = d3.selectAll("div#container"); container.selectAll("*").remove();
    window.svg = container.append("svg")
            .attrs({width: 0.95 * (window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),
                height: 0.9 * (window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),
                id:"SVGgraph"}); window.width = +svg.attr("width"); window.height = +svg.attr("height");
                zoomIn = width/2100;
      justResized = !0;
      reDrawGraph();
  });
  
  

   
    // compounds and genes with figures loaded
    var imagegenes="AADAT AAK1 AASDHPPT ABCB6 ABCC1 ABL1 ABL2 ABO ACACA ACACB ACAT1 ACE ACE2 ACHE ACKR1 ACLY ACOT2 ACP1 ACPP ACTB ACVR1 ACVR2A ACVR2B ACVRL1 ADA ADAM10 ADAM17 ADAM33 ADAM8 ADAM9 ADAMTS1 ADAMTS13 ADAMTS4 ADAMTS5 ADCK3 ADCY10 ADCYAP1 ADCYAP1R1 ADH1A ADH1B ADH1C ADH4 ADH5 ADH7 ADIPOR1 ADIPOR2 ADK ADM ADORA2A ADORA3 ADRA2A ADRA2B ADRB1 ADRB2 ADRB3 ADRBK1 ADSS AGER AGT AGTR1 AHCY AHSA1 AK1 AK2 AK4 AKR1A1 AKR1B1 AKR1B10 AKR1C1 AKR1C2 AKR1C3 AKR1C4 AKT1 AKT2 AKT3 ALAD ALB ALDH1A1 ALDH2 ALDH3A1 ALDH4A1 ALDH5A1 ALDOA ALK ALKBH3 ALKBH5 ALOX12 ALOX15 ALOX15B ALOX5 ALOX5AP ALPP AMD1 AMPD2 AMY1A AMY1B AMY1C AMY2A ANG ANGPT1 ANPEP ANXA2 AOC1 AOC3 AOX1 APAF1 APBA1 APCS APEX1 APH1A APLNR APOA1 APOBEC3A APOBEC3F APOBEC3G APP AQP4 AR ARAF AREG ARF1 ARF5 ARF6 ARG1 ARG2 ARHGDIA ARNT ARRB1 ARSA ARSB ASAH2 ASAP1 ASF1A ASGR1 ASH1L ASH2L ATAD2 ATAD2B ATG4B ATIC ATXN2 AURKA AURKAIP1 AURKB AVPR1A AVPR2 AXIN1 AXL B4GALT1 BACE1 BACE2 BAD BAK1 BAX BAZ1B BAZ2A BAZ2B BBOX1 BCAT1 BCAT2 BCHE BCL2 BCL2A1 BCL2L1 BCL2L10 BCL2L11 BCL2L2-PABPN1 BCL2L2 BCR BHMT BIRC2 BIRC3 BIRC5 BIRC7 BIRC8 BLM BMP1 BMP2 BMP2K BMP6 BMPR1A BMPR1B BMPR2 BMX BPTF BRAF BRCA1 BRD1 BRD2 BRD3 BRD4 BRD7 BRD9 BRDT BRPF1 BRPF3 BRWD1 BSG BTK BUB1 C1R C1S C20orf57 C3 C5 CA1 CA12 CA13 CA14 CA2 CA3 CA4 CA6 CA7 CA9 CACNA1A CACNA1B CACNA1C CACNA1D CACNA1E CACNA1S CACNB4 CAD CALCA CALCRL CALM1 CALM2 CALM3 CAMK1 CAMK1D CAMK1G CAMK2A CAMK2B CAMK2D CAMK2G CAMK4 CAMKK2 CAPN1 CAPN2 CAPNS1 CARM1 CASK CASP1 CASP2 CASP3 CASP6 CASP7 CASP8 CASP9 CAT CBFB CBR1 CBR3 CBS CBX1 CBX4 CBX7 CBX8 CCBL1 CCKAR CCKBR CCL11 CCL2 CCL5 CCL7 CCNA2 CCNB1 CCNC CCND1 CCND3 CCNE1 CCNH CCNK CCNT1 CCR1 CCR2 CCR5 CD14 CD1D CD2 CD207 CD209 CD274 CD28 CD38 CD3D CD3E CD3G CD4 CD40 CD40LG CD44 CD58 CD74 CD80 CD81 CD86 CDA CDC25A CDC25B CDC25C CDC37 CDC42 CDC42BPB CDC6 CDC7 CDK1 CDK12 CDK16 CDK2 CDK2AP1 CDK2AP2 CDK3 CDK4 CDK5 CDK5R1 CDK6 CDK7 CDK8 CDK9 CDKL1 CDKL2 CDKL3 CDKL5 CDKN1A CECR2 CEL CENPE CES1 CETP CFB CFD CFH CFL1 CFLAR CFTR CGA CHAT CHEK1 CHEK2 CHIA CHIT1 CHKA CHKB CHN2 CHRM2 CHRM3 CHRNA1 CHRNA3 CHRNA4 CHRNA7 CHRNA9 CHRNB2 CHRNB4 CHRNE CHUK CISD1 CKB CKM CLEC4C CLEC4M CLK1 CLK2 CLK3 CLTC CMA1 CMPK1 CNOT7 CNR1 CNR2 COL15A1 COL18A1 COL1A1 COL2A1 COL3A1 COL4A1 COL4A2 COL4A3BP COL5A1 COL5A2 COL6A3 COMT CPA1 CPB1 CPB2 CPM CPN1 CPOX CPS1 CPT1A CRABP2 CRAT CREB1 CREBBP CRHR1 CRHR2 CRK CRYAB CRYZ CSF1R CSF2RA CSF2RB CSF3R CSK CSNK1D CSNK1E CSNK1G1 CSNK1G2 CSNK1G3 CSNK2A1 CSNK2A2 CSNK2B CTDSP1 CTLA4 CTNNB1 CTRC CTSA CTSB CTSC CTSD CTSE CTSF CTSG CTSH CTSK CTSL CTSS CTSV CTSZ CXCL12 CXCL2 CXCL8 CXCR1 CXCR2 CXCR4 CYB5A CYB5R3 CYBB CYP11A1 CYP11B2 CYP17A1 CYP19A1 CYP1A1 CYP1A2 CYP1B1 CYP21A2 CYP27A1 CYP2A13 CYP2A6 CYP2B6 CYP2C18 CYP2C19 CYP2C8 CYP2C9 CYP2D6 CYP2E1 CYP3A4 CYP51A1 CYTH2 CYTH3 DAO DAPK1 DAPK2 DAPK3 DBF4 DCK DCLK1 DCPS DCTD DCXR DDAH1 DDC DDR1 DDR2 DDX1 DDX3X DGKD DGUOK DHFR DHODH DHPS DHX36 DICER1 DKK1 DLG4 DMPK DNAJA1 DNASE1 DNM1 DNM2 DNMT1 DNMT3A DNMT3B DNMT3L DNPH1 DNTT DOT1L DPEP1 DPP3 DPP4 DPP7 DPYS DRD1 DRD2 DRD3 DTYMK DUSP10 DUSP14 DUSP15 DUSP2 DUSP22 DUSP23 DUSP26 DUSP3 DUSP4 DUSP5 DUSP6 DUT DVL2 DYRK1A DYRK2 E2F1 ECE1 ECE2 EED EEF1A1 EEF1A2 EEF2 EFNA2 EGF EGFR EGLN1 EGR1 EHMT1 EHMT2 EIF2AK2 EIF2AK3 EIF2S1 EIF3F EIF4A1 EIF4E EIF4EBP1 ELANE ELAVL1 ELF3 ELK1 ENO1 ENPEP ENPP1 ENPP2 EP300 EPAS1 EPHA1 EPHA2 EPHA3 EPHA4 EPHA5 EPHA7 EPHA8 EPHB1 EPHB2 EPHB3 EPHB4 EPHX2 EPM2A EPN1 EPO EPOR EPRS ERAP1 ERAP2 ERBB2 ERBB3 ERBB4 ERG ERN1 ERO1L ESD ESR1 ESR2 ESRRA ESRRB ESRRG ETV1 ETV6 EYA2 EZH2 EZR F10 F11 F12 F13A1 F2 F2R F2RL3 F3 F5 F7 F8 F9 FABP1 FABP2 FABP3 FABP4 FABP5 FANCF FAP FARS2 FASLG FASN FBP1 FCER1A FCER2 FCGR1A FCGR2A FCGR3B FCGRT FDFT1 FDPS FEN1 FER FES FFAR1 FGA FGB FGF1 FGF2 FGF4 FGFR1 FGFR2 FGFR3 FGFR4 FGG FHIT FKBP14 FKBP1A FKBP1B FKBP3 FKBP4 FKBP5 FLT1 FLT3 FLT4 FN1 FNTA FNTB FOLH1 FOLR1 FOLR2 FOS FOXO1 FOXO3 FSHR FTO FURIN FUT8 FXN FXYD2 FYN G6PD GABBR1 GABBR2 GABRB3 GAD1 GAD2 GAK GALE GALK1 GAPDH GART GATA4 GBA GBA3 GC GCG GCGR GCK GCKR GDA GFER GFPT1 GGH GGPS1 GGT1 GHR GHRHR GHRL GIP GIPR GLA GLB1 GLI1 GLO1 GLP1R GLRA1 GLRA3 GLS GLUL GMNN GMPS GNAI1 GNAI3 GOT1 GPX1 GRB10 GRB2 GRB7 GRIA2 GRIK1 GRIK2 GRIN1 GRIN2A GRIN2B GRK1 GRK4 GRK5 GRK6 GRM1 GRM2 GRM3 GRM5 GRM7 GSG2 GSK3A GSK3B GSR GSTA1 GSTA2 GSTA3 GSTA4 GSTK1 GSTM1 GSTM2 GSTM3 GSTM4 GSTO1 GSTO2 GSTP1 GSTT1 GSTT2 GSTZ1 GTF2A1 GUCY1A3 GUCY1B3 GUSB GYPA GZMA GZMB GZMK HAAO HAGH HAO1 HARS HBA1 HBA2 HBB HBEGF HCK HCN2 HCN4 HCRTR2 HDAC1 HDAC2 HDAC3 HDAC4 HDAC6 HDAC7 HDAC8 HEXA HEXB HEXIM1 HGF HGFAC HIF1A HIF1AN HINT1 HIST1H4A HIST1H4B HIST1H4C HIST1H4D HIST1H4E HIST1H4F HIST1H4H HIST1H4I HIST1H4J HIST1H4K HIST1H4L HIST2H4A HIST2H4B HIST4H4 HIVEP1 HK1 HK2 HK3 HLA-A HLA-DRB1 HLA-DRB3 HMGB1 HMGCR HMOX1 HMOX2 HNF4A HNF4G HNMT HNRNPA1 HNRNPA2B1 HNRNPC HOGA1 HPD HPGD HPGDS HPN HPRT1 HRAS HRH1 HSD11B1 HSD17B1 HSD17B10 HSD17B4 HSF1 HSP90AA1 HSP90AB1 HSP90B1 HSPA2 HSPA5 HSPA6 HSPA8 HSPB1 HSPD1 HTR1B HTR2B HTT HYAL1 IAPP ICAM1 IDE IDH1 IDO1 IFNAR1 IFNAR2 IFNG IFNGR1 IGF1 IGF1R IGF2R IGFBP1 IGFBP2 IGFBP4 IGFBP5 IGFBP6 IGHE IKBKB IKBKG IL12A IL12B IL13 IL17A IL17RA IL1A IL1B IL1R1 IL2 IL23A IL2RA IL2RB IL2RG IL4R IL5 IL5RA IL6 IL6R IL6ST ILK IMPA1 IMPDH1 IMPDH2 INCENP INHBA INMT INPP5D INPPL1 INS INSR IRAK4 ITGA1 ITGA2 ITGA2B ITGA4 ITGA5 ITGAL ITGAM ITGAV ITGB1 ITGB2 ITGB3 ITGB6 ITGB7 ITK ITPK1 JAG1 JAK1 JAK2 JAK3 JUN KARS KAT2A KAT2B KAT5 KAT8 KCNA1 KCNA3 KCNC4 KCND3 KCNE1 KCNH2 KCNJ4 KCNK10 KCNK2 KCNK9 KCNMA1 KCNQ1 KCNQ4 KDM1A KDM1B KDM2A KDM4A KDM4B KDM4C KDM4D KDM4E KDM5A KDM5C KDM6A KDM6B KDM7A KDR KEAP1 KHK KHSRP KIAA0101 KIAA1804 KIF11 KIF15 KIF1B KIF22 KIF23 KIF2C KIF3B KIF3C KIF5A KIF5B KIF7 KIF9 KIFC1 KIFC3 KIT KITLG KLF1 KLF10 KLF5 KLK1 KLK2 KLK3 KLK4 KLK5 KLK6 KLK7 KLKB1 KMT2A KMT2B KMT2C KMT2D KNG1 KPNA2 KRAS KSR2 KYNU L3MBTL1 L3MBTL3 LAMA2 LARS LATS1 LATS2 LCAT LCK LDHA LDHB LDLR LEPR LGALS1 LGALS2 LGALS3 LGALS4 LGALS7 LGALS7B LGALS8 LGALS9 LGMN LHCGR LIFR LIG1 LIMK1 LIMK2 LIPF LMNA LMO2 LNPEP LPAR1 LPAR2 LRRK2 LSS LTA LTA4H LTBR LTC4S LY96 LYN LYPLA1 LYPLAL1 M6PR MADCAM1 MAGI3 MALT1 MAN1B1 MAOA MAOB MAP2K1 MAP2K2 MAP2K4 MAP2K5 MAP2K6 MAP2K7 MAP3K10 MAP3K12 MAP3K14 MAP3K2 MAP3K3 MAP3K5 MAP3K7 MAP3K8 MAP3K9 MAP4K4 MAPK1 MAPK10 MAPK11 MAPK12 MAPK13 MAPK14 MAPK3 MAPK6 MAPK7 MAPK8 MAPK9 MAPKAPK2 MAPKAPK3 MAPT MARK1 MARK2 MARK3 MARS MAST1 MAST2 MAST3 MAST4 MAT2A MATK MAX MB MBL2 MBNL1 MBTD1 MC4R MCL1 MDH2 MDK MDM2 MDM4 ME1 MECP2 MELK MEN1 MERTK MET METAP1 METAP2 METTL21A MGAM MGEA5 MGLL MGMT MIF MITF MKNK1 MKNK2 MLKL MLYCD MME MMP1 MMP10 MMP12 MMP13 MMP14 MMP16 MMP2 MMP20 MMP3 MMP7 MMP8 MMP9 MNAT1 MPG MPHOSPH8 MPO MRC1 MRE11A MS4A1 MST1 MST1R MT-CO2 MTAP MTHFD1 MTHFD2 MTOR MTR MUC1 MVD MYC MYD88 MYH9 MYLK MYLK2 MYLK4 NAALAD2 NADK NAE1 NAGA NAMPT NANOG NANP NAT1 NAT2 NCK1 NCOA1 NCOA2 NCOA3 NCOR1 NCOR2 NCSTN NDC80 NDUFA2 NDUFAB1 NEDD4 NEK1 NEK2 NEK7 NEK9 NEU2 NFATC1 NFE2L2 NFKB1 NFKB2 NFKBIA NGF NGFR NISCH NLRP1 NLRP3 NME1 NME2 NMT1 NMT2 NNMT NOD1 NOS1 NOS2 NOS3 NOTCH1 NOTCH2 NOTCH3 NPC1 NPC1L1 NPM1 NPPA NPR3 NPY1R NPY2R NPY4R NPY5R NQO1 NQO2 NR0B1 NR0B2 NR1D1 NR1D2 NR1H2 NR1H3 NR1H4 NR1I2 NR1I3 NR2C2 NR2E1 NR2E3 NR2F1 NR2F2 NR3C1 NR3C2 NR4A1 NR4A2 NR5A1 NR5A2 NRAS NRP1 NSD1 NT5E NTRK1 NTRK2 NTRK3 NTSR1 OAT ODC1 OGDH OGG1 OGT OLR1 OPN1LW OPRD1 OPRK1 OPRL1 ORAI1 ORM1 ORM2 OTC OXSR1 P2RY1 P2RY11 P2RY12 P2RY13 P2RY14 P2RY2 P2RY4 P2RY6 P4HA1 P4HB PABPC1 PADI2 PADI4 PADI6 PAFAH1B2 PAH PAICS PAK1 PAK2 PAK4 PAK6 PAK7 PANK1 PANK2 PANK3 PARG PARN PARP1 PARP10 PARP11 PARP12 PARP14 PARP15 PARP2 PARP3 PASK PAX8 PBRM1 PCK1 PCMT1 PCNA PCSK9 PDCD1 PDCD4 PDE10A PDE1A PDE1B PDE1C PDE2A PDE3A PDE3B PDE4A PDE4B PDE4C PDE4D PDE5A PDE6C PDE6D PDE6G PDE7A PDE7B PDE8A PDE9A PDF PDGFA PDGFB PDGFRA PDGFRB PDIA6 PDK1 PDK2 PDK3 PDK4 PDPK1 PDXK PDYN PEPD PF4 PFKFB1 PFKFB3 PFKM PGAM1 PGC PGD PGF PGK1 PGR PHF13 PHF8 PHGDH PHIP PHKG2 PI4K2A PI4K2B PI4KB PIK3C2A PIK3C2G PIK3C3 PIK3CA PIK3CG PIK3R1 PIK3R2 PIM1 PIM2 PIN1 PIN4 PIP4K2A PIP4K2B PIP4K2C PIP5K1C PIR PITRM1 PKD1 PKD2 PKLR PKM PKMYT1 PKN1 PKN2 PLA2G10 PLA2G15 PLA2G1B PLA2G2A PLA2G4A PLA2G5 PLA2G7 PLAA PLAT PLAU PLAUR PLCB3 PLCG1 PLCG2 PLEC PLG PLK1 PLK2 PLK3 PLK4 PMM2 PNLIP PNLIPRP2 PNMT PNP PNPO POLA1 POLB POLG POLH POLI POLK POLL POLM POLN POLQ POLR2A POLRMT PON1 POR POT1 POU2F1 POU2F2 PPARA PPARD PPARG PPARGC1A PPIA PPIB PPIC PPIF PPM1A PPM1B PPME1 PPOX PPP1CA PPP1CC PPP2CA PPP2R2A PPP2R4 PPP3CA PPP3CB PPP5C PPT1 PPT2 PRCP PRDM9 PRDX1 PRDX5 PREP PRKAA1 PRKAA2 PRKAB1 PRKAB2 PRKACA PRKAG1 PRKCA PRKCB PRKCD PRKCE PRKCG PRKCH PRKCI PRKCQ PRKD2 PRKD3 PRKG1 PRLR PRMT3 PRMT5 PRMT6 PRNP PROC PRPF4 PRPF4B PRPS1 PRPSAP2 PRSS1 PRSS3 PRSS8 PRTN3 PSAP PSEN1 PSENEN PSMA1 PSMA2 PSMA3 PSMA4 PSMA5 PSMA6 PSMA7 PSMB1 PSMB2 PSMB3 PSMB4 PSMB5 PSMB6 PSMB7 PSMD10 PSMG3 PTAFR PTBP1 PTEN PTGDS PTGES PTGES3 PTGIS PTGS2 PTH1R PTK2 PTK2B PTK6 PTP4A1 PTP4A3 PTPN1 PTPN11 PTPN13 PTPN14 PTPN18 PTPN2 PTPN22 PTPN3 PTPN4 PTPN5 PTPN6 PTPN7 PTPN9 PTPRB PTPRC PTPRE PTPRF PTPRG PTPRJ PTPRM PTPRR PTPRS PXN PYGL PYGM QARS QDPR QPCT QPCTL RAB9A RAC1 RAC2 RAC3 RACGAP1 RAD1 RAD51 RAD52 RAF1 RAMP1 RAMP2 RAP1A RARA RARB RARG RARS RASGRP1 RB1 RBBP4 RBBP5 RBBP7 RBBP9 RBP4 RCOR1 RECQL RELA REN RET RGS12 RGS8 RHEB RHOA RHOB RIOK1 RIOK2 RIPK1 RIPK2 RNASE1 RNASE2 RNASEH1 RNASEL ROCK1 ROCK2 ROR2 RORA RORC ROS1 RPA1 RPS27 RPS6 RPS6KA1 RPS6KA3 RPS6KA5 RPS6KB1 RPSA RRM1 RRM2 RRM2B RUNX1 RUVBL1 RUVBL2 RXFP1 RXFP2 RXRA RXRB RXRG RYR3 S100A10 S100A4 S100B S1PR1 S1PR2 S1PR4 SAE1 SAT1 SAT2 SCD SCN2A SCN5A SCNN1A SCP2 scriptLoad.R SELE SELL SELP SELPLG SENP1 SENP2 SENP7 SENP8 SERPINA3 SERPINA6 SERPINA7 SERPINC1 SERPINE1 SETD2 SETD7 SETD8 SETDB1 SETMAR SF3B2 SFN SFTPD SGK1 SGPL1 SH2D1A SHBG SHC1 SHH SHMT1 SI SIGLEC7 SIRT1 SIRT2 SIRT3 SIRT5 SIRT6 SLC2A1 SLC2A3 SLC2A5 SLC9A1 SLCO2A1 SLK SMAD2 SMAD3 SMARCA2 SMARCA4 SMN1 SMN2 SMO SMS SMYD2 SMYD3 SNAP25 SNCA SNCAIP SOD1 SOD3 SORD SORT1 SOS1 SOST SP1 SP140 SPECC1L-ADORA2A SPHK1 SPSB2 SRC SREBF2 SRM SRPK1 SRPK2 SRR SSB SSH2 SST SSU72 ST14 ST6GAL1 STAT1 STAT6 STK10 STK11 STK16 STK17B STK24 STK25 STK26 STK3 STK32A STK38 STK4 STRADA STS SUFU SULT1A1 SULT1A2 SULT1A3 SULT1B1 SULT1C2 SULT1C4 SULT1E1 SULT2A1 SULT2B1 SULT4A1 SUMO1 SUMO2 SUPV3L1 SUV39H1 SUV39H2 SUV420H1 SUV420H2 SV2A SYK TAB1 TACR1 TAF1 TAF1L TARDBP TARS TASP1 TAT TBK1 TBX5 TBXA2R TCEB1 TCEB2 TCF7L2 TDO2 TDP1 TEC TEK TERT TF TGFB1 TGFB2 TGFBR1 TGFBR2 TGM1 TGM2 TGM3 TH THPO THRA THRB TIAM1 TK1 TKT TLR2 TLR3 TLR4 TLR5 TLR6 TLR8 TMPRSS15 TNF TNFRSF10B TNFRSF1A TNFRSF1B TNFRSF8 TNFSF10 TNFSF11 TNFSF13B TNIK TNK2 TNKS TNKS2 TNNC1 TNNI3 TNNI3K TNNT2 TOP1 TOP2A TOP2B TOPBP1 TP53 TP53BP1 TPH1 TPH2 TPI1 TPK1 TPMT TPSAB1 TPST2 TPX2 TRAC TRAF6 TRAP1 TREM1 TRIM24 TRIM33 TRPA1 TRPV2 TRPV4 TSG101 TSHR TTBK1 TTK TTR TUBA1B TUBB TXK TXN TXN2 TXNRD1 TXNRD2 TXNRD3 TYK2 TYMP TYMS TYRO3 UBA1 UBA2 UBA3 UBA5 UBE2I UBE2N UBLCP1 UCHL1 UCHL3 UCHL5 UCK1 UCK2 UGT2B7 UHRF1 ULK1 ULK3 UMPS UNG UPP1 UROD UROS USP13 USP14 USP2 USP21 USP28 USP4 USP5 USP7 USP8 VAMP2 VAV1 VCAM1 VCP VCPKMT VDR WDR5 WDR77 WEE1 VEGFA VHL WHSC1L1 VIP VIPR1 VIPR2 WNK1 WNK4 VPS35 VPS4B VRK1 VRK2 VRK3 WRN VTN VWF XDH XIAP XPNPEP1 XPO1 YARS YES1 YWHAE YWHAG ZAP70 ZMYND8".split(" "),
    csrftoken = getCookie('csrftoken');
   // document ready 
  $(document).ready(function(){
      


     //adjust columns on new content
     $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
      } );

     $('.modal-content').resizable({
      alsoResize: ".modal-dialog",
      minHeight: 500,
      minWidth: 500
    });
    $('.modal-dialog').draggable();
    // slider (interaction strength)
    window.sliderInt = 
     $('#sliderBio').bootstrapSlider({id:'sliderBioId',formatter:function(b){return'Interaction strength: '+b;}})
             .on('slideStop',function(){
              // TODO: change limit to range
              window.range_ = $(this).attr("value").split(',').map(Number);
               // two values from 0 to 1 defining range for Interaction strength
              getMoreNodes(id,range_[0],range_[1]);
      });
      window.range_ =  sliderInt.bootstrapSlider('getValue');
    // set token in xhr header
    $.ajaxSetup({
         beforeSend: function(xhr, settings) {
             if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                 xhr.setRequestHeader("X-CSRFToken", csrftoken);
             }
         }
    });
    $("#excelExport").click(function () {        
        export_data(data);
    }); 

    if(restoreSession){
     var Obj = restoreSession
        
      window.color=d3.scaleOrdinal().domain(Obj.colorDomain).range(Obj.colorRange),window.colorLink=d3.scaleOrdinal().domain(Obj.colorLinkDomain).range(Obj.colorLinkRange),
      window.depictedNodes=Obj.depictedNodes,window.zoomIn=Obj.zoom,window.showMut=Obj.showMut,window.classesExclude=Obj.classesExclude,window.linksExclude=Obj.linksExclude,
      window.initialDraw=Obj.initialDraw,window.colorPhase=d3.scaleOrdinal().domain(Obj.colorDomainPhase).range(Obj.colorRangePhase),window.phaseExclude = Obj.phaseExclude; 
    (window.range_)&&sliderInt.bootstrapSlider('setValue', [Obj.range_[0],Obj.range_[1]]);

      reDrawGraph(); 
    
    } else {
        console.log('no session');
        reDrawGraph(); 
    }
    
    // init sidebar functionality
    $("#menu ul").hide();$("#menu ul").children(".current").parent().show();
        $("#menu li a").click(function(){var a=$(this).next();if(a.is("ul")&&a.is(":visible"))return a.slideUp("normal"),!1;
        if(a.is("ul")&&!a.is(":visible"))return $("#menu ul:visible").slideUp("normal"),a.slideDown("normal"),!1});
    $("#menu-toggle-2").click(function(a){a.preventDefault();$("#wrapper").toggleClass("toggled-2");$("#menu ul").hide()});
  
    
  });
 
      // TODO:  
  saveSession = function(){
      
      var Obj = {colorDomain:color.domain(), colorRange:color.range(), colorLinkDomain:colorLink.domain(), colorLinkRange:colorLink.range(), depictedNodes:depictedNodes, 
            zoom:zoomIn, showMut:showMut, classesExclude:classesExclude, linksExclude:linksExclude, initialDraw:initialDraw, range_:(window.range_)?window.range_:null, phaseExclude:phaseExclude, 
      colorDomainPhase:colorPhase.domain(), colorRangePhase:colorPhase.range()};
       
       $.ajax({type:"POST",url:"/networks/saveSession/",data:JSON.stringify({'settings':Obj,'id':id,'range':Obj.range_}),contentType:"application/json; charset=utf-8",dataType:"json",
          error:function(){},
          success:function(c){
            console.log('Session Saved')
          }
        });
      //send(JSON.stringify(Obj), cookies_)     
  };
  //export data to excel
  function ExportData(data) {

    var $this = $("#uploadexample");
    $this.button('loading');

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        var a, today;
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhttp.response);
            today = new Date();
            a.download = "Report" + today.toDateString().split(" ").join("_") + ".xlsx";
            a.style.display = 'none';
            document.body.appendChild(a);
            $this.button('reset');
            return a.click();
        }
    };
    xhttp.open("POST", "/networks/export_to_excel", true);
    xhttp.responseType = 'blob';
    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xhttp.send(JSON.stringify({'data':data,'range':window.range_ ,'linksExclude':window.linksExclude,'classesExclude':window.classesExclude,'phaseExclude':window.phaseExclude,'showMut':window.showMut}));

  }

    
    // get csrf token
    
  function csrfSafeMethod(method) {
      // these HTTP methods do not require CSRF protection
      return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }
        // get cookie
  function getCookie(a){
      var b=null;if(document.cookie&&''!==document.cookie)
      for(var e,c=document.cookie.split(';'),d=0;d<c.length;d++)
        // Does this cookie string begin with the name we want?
        if(e=jQuery.trim(c[d]),e.substring(0,a.length+1)===a+'='){b=decodeURIComponent(e.substring(a.length+1));break}
      return b;
  }
    // getMoreNodes
  function getMoreNodes(id,isFrom,isTo){
      $('#loader').show();
      $.ajax({type:"POST",url:"/networks/more_nodes/",data:JSON.stringify({'nid':id,'iStrengthFrom':isFrom,'iStrengthTo':isTo}),contentType:"application/json; charset=utf-8",dataType:"json",
          error:function(){},
          success:function(c){
            data=c,endSimulation(),reDrawGraph(),$('#loader').hide();
          }
      });
    }
    // function for chart JS
  function chartJs(ctx,data,labels,labelYaxes,color,borderColor){
              var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: labels,
                  datasets: [{
                      label:'Top 10 Cel lines',
                      data: data,
                      backgroundColor:color,
                      borderColor:borderColor,
                      borderWidth: 2
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                         scaleLabel: {
                          display: true,
                          labelString: labelYaxes
                        }
                      }]
                  }
              }
          }); 
  }

  function plotTargetCrfInfo(uniprot_id){
      $('#crf_info').DataTable( {
              processing: true,
              serverSide: false,
              destroy: true,
              scrollY:'100vh',
              scrollCollapse: true,
              ajax: {
                url: "/api/data/getTargetcrf/",
                type: "POST",
                data: function ( d ) {
                      d.uniprot_id = uniprot_id;
                }
              },
              // order:[[ 3, "desc" ]],
              columns: [
                      { data: 'database_name',title:'Database Name'},
                      { data: 'id_value',title:'Id'}

              ],

              columnDefs: [{
                  "targets": 1,
                  "data": "id_value",

                  "render": function (data, type, full, meta) {
                      
                      return '<a target="_blank" href="'+full['url'] + '">' + data + '</a>';
                  }
              }]
            } );


   }
   function plotCompoundCrfInfo(compound){
      $('#crf2_info').DataTable( {
              processing: true,
              serverSide: false,
              scrollY: '60vh',
              scrollCollapse: true,
              destroy: true,
              ajax: {
                url: "/api/data/getCompoundcrf/",
                type: "POST",
                data: function ( d ) {
                      d.compound = compound;
                }
              },
              // order:[[ 3, "desc" ]],
              columns: [
                      { data: 'database_name',title:'Database Name'},
                      { data: 'id',title:'Id'}

              ],

              columnDefs: [{
                  "targets": 1,
                  "data": "id_value",

                  "render": function (data, type, full, meta) {
                      
                      return '<a target="_blank" href="'+full['url'] + '">' + data + '</a>';
                  }
              }]
            } );

   }
   function plotTargetDiseaseInfo(gene_name){
     // var endpoint = '/api/data/ccle/'
        $('#da_info').DataTable( {
              order:[[ 3, "desc" ]],
              destroy: true,
              scrollY: "60vh",
              scrollCollapse: true,
               ajax: {
                url: "/api/data/getTargetDisease/",
                type: "POST",
                data: function ( d ) {
                      d.gene_name = gene_name;
                }
              },
              columns: [
                      { data: 'gene_name', title: 'Gene Name' },
                      { data: 'disease_id', title: 'Disease Id' },
                      { data: 'disease_name', title: 'Disease Name' },
                      { data: 'score', title: 'Score' },
                      { data: 'description', title: 'Description' },
                      { data: 'no_of_snps', title: 'No of snps' },
                      { data: 'source', title: 'Source' },
                      { data: 'pubmed_id', title: 'Pubmed Id' }
              ],

              columnDefs: [{
                  "targets": -1,
                  "data": "pubmed_id",

                  "render": function (data, type, full, meta) {
                      
                      return '<a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=' + data + '">' + data + '</a>';
                  }
              },{
                  "targets": 3,
                  "data": "score",

                  "render": function (data, type, full, meta) {
                      
                      return Number(Math.round(data+'e2')+'e-2');
                  }
              }]
      } );

   }
      function plotCompoundClinicalInfo(compound){
     // var endpoint = '/api/data/ccle/'
             $('#da2_info').DataTable( {
              processing: true,
              serverSide: false,
              destroy: true,
              scrollY: "60vh",
              scrollCollapse: true,
              ajax: {
                url: "/api/data/getClinicalInfo/",
                type: "POST",
                data: function ( d ) {
                      d.compound = compound;
                }
              },
              // order:[[ 3, "desc" ]],
              //study_id, drug, phase, mesh_term, symptoms, study_title, enrollment, study_type, adverse_effects, start_date, status, min_age, max_age, gender, pubmed_ids
              columns: [
                      { data: 'drug',title:'Drug'},
                      { data: 'phase',title:'Phase'},
                      { data: 'mesh_term',title:'Mesh term'},
                      { data: 'study_id',title:'Study id'},
                      { data: 'symptoms',title:'Symptoms'},
                      { data: 'study_title',title:'Study title'},
                      { data: 'enrollment',title:'Enrollment'},
                      { data: 'study_type',title:'Study type'},
                      { data: 'adverse_effects',title:'Adverse effects'},
                      { data: 'start_date',title:'Start date'},
                      { data: 'status',title:'Status'},
                      { data: 'min_age',title:'Min_age'},
                      { data: 'max_age',title:'Max_age'},
                      { data: 'gender',title:'Gender'},
                      { data: 'pubmed_ids',title:'Pubmed ids'}

              ],

              columnDefs: [{
                  "targets": -1,
                  "data": "pubmed_ids",

                  "render": function (data, type, full, meta) {
                      
                      return '<a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=' + data + '">' + data + '</a>';
                  }
              }]
            } ); 

   } 
    function plotDrugCellLine(chartId,drugName,db,endpoint,color,borderColor,yAxisLabel){
     
      $.ajax({type:"POST",url:endpoint,data:JSON.stringify({'drug':drugName,'db':db}),contentType:"application/json; charset=utf-8",dataType:"json",
          error:function(){},
          success:function(c){
          var ctx = document.getElementById(chartId);
          chartJs(ctx,c.data,c.labels,yAxisLabel,color,borderColor);
          
        }
      });

   }   
  // getCellLines for targets
  function plotCellLine(chartId,geneName,endpoint,color,borderColor,yAxisLabel){
     // var endpoint = '/api/data/ccle/'
      $.ajax({type:"POST",url:endpoint,data:JSON.stringify({'geneName':geneName}),contentType:"application/json; charset=utf-8",dataType:"json",
          error:function(){},
          success:function(c){
          var ctx = document.getElementById(chartId);
          chartJs(ctx,c.data,c.labels,yAxisLabel,color,borderColor);
          
        }
      });

    }       

  // json to 2d array (with replacement of empty names) -- JSON represented as rows of dataframe (byRow) or as columns
  function processData(a, byRow){
    if(byRow){
    for(var b=[],c=0,d=a.length;c<d;c++)(a[c].interaction_strength>0)&&(b.push([a[c].compound_id,(!a[c].compound_name||"NA"===a[c].compound_name)?a[c].compound_id:a[c].compound_name,a[c].target_id,(!a[c].gene_name||"NA"===a[c].gene_name)?a[c].target_id:("mutated"!==a[c].wild_type_mutated.toLowerCase()?a[c].gene_name:a[c].mutation_info),!a[c].family_name?"Unknown":a[c].family_name,a[c].pubmed_id,(a[c].max_phase==="" || a[c].max_phase===null)?"Unknown":["Preclinical","Phase I","Phase II","Phase III","Approved"][a[c].max_phase],a[c].ep_standardtype,a[c].ep_standardvalue,a[c].ep_standardunits,!a[c].wild_type_mutated?"wild_type":a[c].wild_type_mutated.toLowerCase(),a[c].interaction_strength]));
    } else {
    for(var b=[],c=0,d=a.compound_id.length;c<d;c++)(a.interaction_strength[c]>0)&&(b.push([a.compound_id[c],(!a.compound_name[c]||"NA"===a.compound_name[c])?a.compound_id[c]:a.compound_name[c],a.target_id[c],(!a.gene_name[c]||"NA"===a.gene_name[c])?a.target_id[c]:("mutated"!==a.wild_type_mutated[c].toLowerCase()?a.gene_name[c]:a.mutation_info[c]),!a.family_name[c]?"Unknown":a.family_name[c],a.pubmed_id[c],(a.max_phase[c]==="" || a.max_phase[c]===null)?"Unknown":["Preclinical","Phase I","Phase II","Phase III","Approved"][a.max_phase[c]],a.ep_standardtype[c],a.ep_standardvalue[c],a.ep_standardunits[c],!a.wild_type_mutated[c]?"wild_type":a.wild_type_mutated[c].toLowerCase(),a.interaction_strength[c]]));
    }
    return b
  }

  //function to median repeated rows by standard type, and convert to format acceptable by d3. also adding some properties to nodes and links
  //data - sorted 2d array, by 2 cols: Wild_type_mutated, pchembl_value. nrow - number of rows to return, type= [Ki, Kd]...
  function medianRows(datacp, nrow, type, showMut, typeClass, typePhase) {

    // initialize vars
    var visited = [], arr = [], visiCount = 0, farr = [];
    function unique(a){return $.grep(a,function(b,c){return c==$.inArray(b,a)})};
    
    // use only data defined in "type" varible (e.g. Kd and Ki only)
    for (var i = 0, l = datacp.length; i < l; i++) type.some(function(a, b) {
      return a === datacp[i][7]
    }) && arr.push(datacp[i]); 
    
    // use only data defined in "typeClass" varible (e.g. Enzyme and Epigenetic regulator only)
    var datacpArr=JSON.parse(JSON.stringify(arr)); arr = []; 
    for (var i = 0, l = datacpArr.length; i < l; i++) typeClass.some(function(a, b) {
      return a === datacpArr[i][4]
    }) && arr.push(datacpArr[i]); 
    
    // use only data defined in "typePhase" varible (e.g. Approved and Phase 2 only)
    var datacpArr=JSON.parse(JSON.stringify(arr)); arr = []; 
    for (var i = 0, l = datacpArr.length; i < l; i++) typePhase.some(function(a, b) {
      return a === datacpArr[i][6]
    }) && arr.push(datacpArr[i]); 
    
    // exclude mutations (if selected)
    showMut = typeof showMut !== 'undefined' ? showMut : !0; 
    if(!1===showMut){
    var arrtmp=JSON.parse(JSON.stringify(arr));arr=[];
    for(var i=0,l=arrtmp.length;i<l;i++) "mutated"===arrtmp[i][10]&&arr.push(arrtmp[i])
    }
    

    // go through all the rows 
    for (var i = 0, l = arr.length; i < l; i++) {
      var row = arr[i], curRow = JSON.stringify([row[1], row[3]]);
    
    // if was not visited before
      if (visited.every(function(a) {return a !== curRow})) {
      var arrIrow = [], types = [] ; visited.push(curRow);
      
      // select k rows with row[1] row[3]
      for (var k=0,l2=arr.length;k<l2;k++) arr[k][1]===row[1]&&arr[k][3]===row[3]&&arrIrow.push(arr[k])&&types.push(arr[k][7]); 
      types=unique(types); 
      
      // median them based on standard type
      for (var k=0,l2=types.length;k<l2;k++){
      for (var median_=[],p=0,p2=arrIrow.length;p<p2;p++) arrIrow[p][7]==types[k]&&median_.push(arrIrow[p][11]);
      var rowCp=arrIrow[0].slice();rowCp[7]=types[k];rowCp[11]=d3.median(median_);rowCp[12]=median_.length;farr.push(rowCp);visiCount++
      };
      
      // break when reach number of links chosen
        nrow = 150; if (visiCount >= nrow) break;
      }
    }
    
    var data_ = JSON.parse(JSON.stringify(farr)), nodes=[],visited=[],links=[],row; //(!maxLinks)&&(maxLinks=data_.length); //get initial number of links
                                             //(!numOfLinks)&&(numOfLinks=data_.length);
    //data_ = JSON.parse(JSON.stringify(data_.slice(0,numOfLinks))); // break when reach number of links chosen (instead of above)                                 

    // prepare nodes for (compounds);
    for(var i=0,l=data_.length;i<l;i++) 
    row=data_[i],
    visited.every(function(a){return a!==row[1]})&&(nodes.push({fill:colorPhase.range()[colorPhase.domain().indexOf(row[6])],compound:row[1],gene:!1,id:row[0],phaseIs:row[6],size:row[12]}),visited.push(row[1])); // size here is not used

    // prepare nodes for (targets);
    for(var i=0,l=data_.length;i<l;i++)
    if(row=data_[i],visited.every(function(a){return a!==row[3]})){
      for(var total=0,j=0;j<data_.length;j++)total+=row[3]===data_[j][3]?data_[j][12]:0; //count NodeSizeGene (stored in 12 and used in maxNodeSizeGene/minNodeSizeGene)
      nodes.push({fill:color.range()[color.domain().indexOf(row[4])],compound:row[3],gene:!0,id:row[2],type:row[10],classIs:row[4],size:total});visited.push(row[3])}; // size here is used
                
    // add indices for each node.
    nodes.forEach(function(a,b){return a.ind=b;}) 

    // calculate max and min sizes and add them for each node
    window.maxNodeSizeGene = Math.max.apply(null,nodes.map(function(a){return !0===a.gene?a.size:1})); var maxNodeSizeComp = Math.max.apply(null,nodes.map(function(a){return !1===a.gene?a.size:1}));
    window.minNodeSizeGene = Math.min.apply(null,nodes.map(function(a){return !0===a.gene?a.size:maxNodeSizeGene})); var minNodeSizeComp = Math.min.apply(null,nodes.map(function(a){return !1===a.gene?a.size:1}));
    nodes.forEach(function(a,b){ //https://stackoverflow.com/questions/5294955/how-to-scale-down-a-range-of-numbers-with-a-known-min-and-max-value
    var maxNodeSize = !0===a.gene?maxNodeSizeGene:maxNodeSizeComp, minNodeSize = !0===a.gene?minNodeSizeGene:minNodeSizeComp
    return maxNodeSize===minNodeSize?a.size=2:a.size=(2.5-1.5)*(a.size-minNodeSize)/(maxNodeSize-minNodeSize)+1.5
    }); 
    
    
    // find unique links and fill the fields like IC50,KI,KD,width... for them
    for(var visited=[],k=0,l2=data_.length;k<l2;k++){
    var curRow=JSON.stringify([data_[k][1],data_[k][3]]);
    if(visited.every(function(a){return a!==curRow})){
      var link_={source:data_[k][1],target:data_[k][3],IC50:0,KI:0,KD:0,EC50:0,POTENCY:0,AC50:0,XC50:0,Unknown:0,width_:0,s_:0,t_:0,length_:0};
      link_[[data_[k][7]]]=data_[k][11];links.push(link_);visited.push(curRow)
    }
    else for(var j=0,j2=links.length;j<j2;j++)links[j].source==data_[k][1]&&links[j].target==data_[k][3]&&(links[j][data_[k][7]]=data_[k][11])
    }; 
    
    // replace source and target with indices
    var compounds_ = JSON.parse(JSON.stringify(nodes.map(function(a,b) { return a.compound; })));
    links.forEach(function(a,b){return (a.source=compounds_.indexOf(a.source),a.target=compounds_.indexOf(a.target));}) 
    
    // add links width and length
    links.forEach(function(a,b){return a.width_ = d3.mean([a.IC50,a.KI,a.KD,a.EC50,a.POTENCY,a.AC50,a.XC50,a.Unknown].filter(Boolean));})
    links.forEach(function(a,b){return a.length_ = 100 * d3.mean([a.IC50,a.KI,a.KD,a.EC50,a.POTENCY,a.AC50,a.XC50,a.Unknown].filter(Boolean)) + 130;})
    
    return {nodes:nodes, links:links, uniqueTypes:unique(datacp.map(function(a,b){return a[7];})), uniqueClasses:unique(datacp.map(function(a,b){return a[4];})), 
                                                   uniquePhases:unique(datacp.map(function(a,b){return a[6];}))}
  }

  
  // on simulation end
  function endSimulation(){
    simulation.stop(); 
    for(var i=0;i<simulation.nodes().length;i++) simulation.nodes()[i].x=Math.max(70,Math.min(width-70,simulation.nodes()[i].x)),simulation.nodes()[i].fx=simulation.nodes()[i].x, 
                           simulation.nodes()[i].y=Math.max(70,Math.min(height-70,simulation.nodes()[i].y)),simulation.nodes()[i].fy=simulation.nodes()[i].y;
    (depictedNodes=JSON.parse(JSON.stringify(simulation.nodes())));
    initialDraw=!1;
  }
  
  // main function to redraw the graph
  function reDrawGraph() {
    
    // exclude links (selected by clicking on legend) 
  for(var metricsCp=JSON.parse(JSON.stringify(metrics_)),i=metricsCp.length;i--;)-1!==linksExclude.indexOf(metricsCp[i])&&metricsCp.splice(i,1);
  // exclude classes (selected by clicking on legend) 
  for(var metricsClassCp=JSON.parse(JSON.stringify(metricsClass_)),i=metricsClassCp.length;i--;)-1!==classesExclude.indexOf(metricsClassCp[i])&&metricsClassCp.splice(i,1); 
  // exclude phases (selected by clicking on legend) 
  for(var metricsPhaseCp=JSON.parse(JSON.stringify(metricsPhase_)),i=metricsPhaseCp.length;i--;)-1!==phaseExclude.indexOf(metricsPhaseCp[i])&&metricsPhaseCp.splice(i,1); 

  // median rows and prepare graph JSON
  window.graph = medianRows(JSON.parse(JSON.stringify(processData(data, !0))), numOfLinks, metricsCp, showMut, metricsClassCp, metricsPhaseCp); 

    // clear container first (in case of redraw)
    svg.selectAll("*").remove();
            
    // run simulation
    simulation.nodes(graph.nodes).on("tick", ticked);
    simulation.force("link").links(graph.links);
    simulation.alpha(1).restart();

    if(!initialDraw){ // after redraw put saved coordinates to simulation object
      for(var i=0,l=simulation.nodes().length;i<l;i++)
        for(var j=0,l2=depictedNodes.length;j<l2;j++){
          if(simulation.nodes()[i].compound===depictedNodes[j].compound){
            var w_ = (justResized)?(width/initialWidth):1, h_ = (justResized)?(height/initialHeight):1;
            simulation.nodes()[i].x=depictedNodes[j].x*(w_);simulation.nodes()[i].y=depictedNodes[j].y*(h_);simulation.nodes()[i].fx=depictedNodes[j].fx*(w_);simulation.nodes()[i].fy=depictedNodes[j].fy*(h_);
          }
        }
        justResized = !1
    }
    depictedNodes=JSON.parse(JSON.stringify(simulation.nodes()));

    // Define links first, so nodes go on top
    window.links_ = svg.selectAll("IC50line").data(graph.links).enter().append("rect").attr("class","linein");
    var defsSVG = svg.append("defs");

    // fill in links
    links_.each(function(a,b){
    var cols_=colorLink.domain(),all=[a[cols_[0]],a[cols_[1]],a[cols_[2]],a[cols_[3]],a[cols_[4]],a[cols_[5]],a[cols_[6]],a[cols_[7]]],sum_=0,d3this=d3.select(this);
    for(var i=0,n=all.length;i<n;++i){sum_+=all[i];}; for(var i=0,n=all.length;i<n;++i){all[i]=(100*all[i]/sum_).toFixed(3);}
    var linGrad = defsSVG.append("linearGradient").attr("id",("lG"+b)),curPr=0,lastPr=0; // append linear gradients
    for(var i=0,n=all.length;i<n;++i){ // split rectangle on parts and add color
      if(0!=all[i]){
      linGrad.append("stop").attr("style","stop-color:"+colorLink.range()[i]).attr("offset",curPr+.15*lastPr+"%").attr("class",("col"+colorLink.domain()[i]));curPr+=parseFloat(all[i]);
      linGrad.append("stop").attr("style","stop-color:"+colorLink.range()[i]).attr("offset",curPr-(0!==lastPr?.15*lastPr:.15*curPr)+"%").attr("class",("col"+colorLink.domain()[i]));lastPr=parseFloat(all[i]);
      }
    }
    d3this.attr("fill",("url(#lG"+b+")")).attr("width",5.33*parseFloat(a.width_)*zoomIn).attr("height",120); // set rectangle properties
    }).on("mouseover",function(b,g){toolTip.transition().duration(0).style("opacity",.9);
              var d=[b.IC50,b.KI,b.KD,b.EC50,b.POTENCY,b.AC50,b.XC50,b.Unknown].filter(Boolean),e=[b.IC50,b.KI,b.KD,b.EC50,b.POTENCY,b.AC50,b.XC50,b.Unknown].reduce(function(b,d,e){0!=d&&b.push(e);return b},[]);
              var f="";for(c=0;c<d.length;c++)f+=metrics_[e[c]]+":"+d[c].toFixed(2)+"<br>";toolTip.html(f).style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")})
    .on("mouseout", function(d,i){toolTip.transition().duration(300).style("opacity",0);});


    // Create nodes
    var nodes=svg.selectAll(".node").data(graph.nodes).enter().append("g").attr("class","node").on("dblclick",function(a){console.log(a);})//a.fx=null;a.fy=null}) // stop sticky behaviour
        .call(d3.drag().on("start",function(a){
        a.active=!0;useMouse=!0;d3.event.active||simulation.alphaTarget(.3).restart();a.fx=d3.event.x;a.fy=d3.event.y;})
        .on("drag",function(a){a.fx=Math.max(70,Math.min(width-70,d3.event.x));a.fy=Math.max(70,Math.min(height-70,d3.event.y))}) 
        .on("end",function(a){a.active=!1;useMouse=!1;d3.event.active||simulation.alphaTarget(0);a.fx=a.x;a.fy=a.y;simulation.alpha(.001)}))      
        .on("click",function(a){  
      if(a.gene){
      var tmp=a.compound.match(/\(([^)]+)\)/); tmp=tmp?"("+tmp[1]+")":"";
      $(".cent").html(a.compound); // put a drug name into modal header
      $("#imgModal").attr("src",linkImage_+"imagesHeaviestBigSize/"+a.compound.replace(tmp,"")+".png");
      $("#myModal").modal();
      plotCellLine('ccleCharts',a.compound.split('(')[0],'/api/data/ccle/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Gene expression intensity value'),
      plotCellLine('gdscCharts',a.compound.split('(')[0],'/api/data/gdsc/','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 1)','Gene expression intensity value'),
      plotCellLine('geneTechCharts',a.compound.split('(')[0],'/api/data/genetech/','rgba(255, 159, 64, 0.2)','rgba(255, 159, 64, 1)','RPKM');
      plotTargetCrfInfo(a.id);
      plotTargetDiseaseInfo(a.compound)  
      } else {
      $(".cent2").html(a.compound); // 
      $("#imgModal2").attr("src",linkImage_+"compoundsSame/"+a.id+".png");
      $("#myModal2").modal();
      plotDrugCellLine('ccle2Charts',a.compound.split('(')[0],'CCLE','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotDrugCellLine('gdsc2Charts',a.compound.split('(')[0],'GDSC1000','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotDrugCellLine('gcsiCharts',a.compound.split('(')[0],'gCSI','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotDrugCellLine('greyCharts',a.compound.split('(')[0],'GREY','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotDrugCellLine('fimmCharts',a.compound.split('(')[0],'FIMM','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotDrugCellLine('ctrpCharts',a.compound.split('(')[0],'CTRPv2','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotDrugCellLine('uhnCharts',a.compound.split('(')[0],'UHNBreast','/api/data/cellLine/','rgba(255, 99, 132, 0.2)','rgba(255,99,132,1)','Drug sensitivity score')
      plotCompoundCrfInfo(a.compound);
      plotCompoundClinicalInfo(a.compound)  

      }                       
   });   
    
    // draw nodes
    window.nodeFig = nodes.append("svg"); // make it global to use in ticks
    nodeFig.each(function(a,b){
    if(!0===a.gene){
      var figures_nodes = d3.select(this).attrs({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"});
      // add defs/LinearGradients/clipPaths
      var figures_nodes_defs=figures_nodes.append("defs"),
      figures_nodes_defs_lingr1=figures_nodes_defs.append("linearGradient").attrs({id:"c"+a.ind,x1:"0%",x2:"0%",y1:"0%",y2:"100%"});
        figures_nodes_defs_lingr1.append("stop").attrs({"stop-color":a.fill,"stop-opacity":".7",offset:"0", class:"stopOpas1",value:function(a){return a.classIs;}});
        figures_nodes_defs_lingr1.append("stop").attrs({"stop-color":a.fill,"stop-opacity":".03",offset:"1", class:"stopOpas2",value:function(a){return a.classIs;}});
      figures_nodes_defs_lingr1=figures_nodes_defs.append("radialGradient").attrs({id:"d"+a.ind,cx:"180.72",cy:"38.594",r:"28.884",gradientTransform:"matrix(.1624 2.1067 -1.691 .2627 228.26 -371.43)",gradientUnits:"userSpaceOnUse"});
        figures_nodes_defs_lingr1.append("stop").attrs({"stop-color":"#fff",offset:"0"});
        figures_nodes_defs_lingr1.append("stop").attrs({"stop-color":"#fff","stop-opacity":"0",offset:"1"});
      figures_nodes_defs.append("filter").attrs({"id":"a"+a.ind, width:"1.215", height:"1.542", x:"-.108", y:"-.271"}).append("feGaussianBlur").attr("stdDeviation","4.936");
      figures_nodes_defs.append("filter").attrs({"id":"b"+a.ind, width:"1.596", height:"2.256", x:"-.298", y:"-.628"}).append("feGaussianBlur").attr("stdDeviation","12.494");
      figures_nodes_defs.append("filter").attrs({"id":"e"+a.ind}).append("feGaussianBlur").attr("stdDeviation","2.466");
      figures_nodes=figures_nodes.append("g").attr("transform","scale("+1.33*a.size*zoomIn+")");
      figures_nodes.append("path").attrs({fill:"#bfcfe2",d:"M222.45 56.486a28.885 28.885 0 1 1-57.77 0 28.885 28.885 0 1 1 57.77 0z" ,transform:"matrix(.2256 0 0 -.0646 -33.16 23.787)", filter:"url(#a"+a.ind+")"});
      figures_nodes.append("path").attrs({fill:"#fff", d:"M222.45 56.486a28.885 28.885 0 1 1-57.77 0 28.885 28.885 0 1 1 57.77 0z" ,transform:"matrix(.0786 0 0 -.0283 -1.854 21.872)", filter:"url(#b"+a.ind+")"});
      figures_nodes.append("path").attrs({fill:"#fff", d:"M222.45 56.486a28.885 28.885 0 1 1-57.77 0 28.885 28.885 0 1 1 57.77 0z" ,transform:"matrix(.364 0 0 .3572 -59.938 -9.843)"});
      figures_nodes.append("path").attrs({fill:"url(#c"+a.ind+")", d:"M222.45 56.486a28.885 28.885 0 1 1-57.77 0 28.885 28.885 0 1 1 57.77 0z" ,transform:"matrix(.364 0 0 .3572 -59.938 -9.843)"});
      figures_nodes.append("path").attrs({fill:"url(#d"+a.ind+")", stroke:"url(#j"+a.ind+")", "stroke-width":".815", d:"M222.45 56.486a28.885 28.885 0 1 1-57.77 0 28.885 28.885 0 1 1 57.77 0z",transform:"matrix(.2047 -.036 .0258 .1416 -31.714 3.81)", filter:"url(#e"+a.ind+")"});
      var tmp = a.compound.match(/\(([^)]+)\)/);  tmp = (tmp) ? "("+tmp[1]+")" : "";
      (""!==tmp)&&figures_nodes.append("circle").attrs({class:"dashMut",cx:"10.45",cy:"10.4",r:9.9,stroke:"rgba(0,0,200,.9)","stroke-width":"1",fill:"transparent"}).style("stroke-width","1").style("stroke-dasharray","4,3");

      -1!=imagegenes.indexOf(a.compound.replace(tmp,""))&&figures_nodes.append("image").attrs({xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",x:"3",y:"4","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":linkImage_+"imagesGenes/"+a.compound.replace(tmp,"")+".svg"});  
    } else {
      var compoundNode = d3.select(this).append("g").attr("transform","scale("+2.33 * zoomIn+")"); 
      compoundNode.append("svg:image").attrs({x:0,y:0,width:40,height:18,value:a.phaseIs,class:(a.phaseIs+"_").replace(/\s+/g, ''),preserveAspectRatio:"none","xlink:href":"../../static/img/"+"testlight" + colorPhase.range()[colorPhase.domain().indexOf(a.phaseIs)] + ".png"});
      (-1!=compoundsSame.indexOf(a.id)) && compoundNode.append("svg:image").attrs({x:20,y:0,width:18,height:18,"xlink:href":linkImage_+"compoundsSame/"+a.id+".png"});
    }
    })
    
    // append text to Nodes get the text size based on it and recreate links back
    var nodeText = nodes.append("text").attrs({"class":"textNodes",dy:".1em",fill:"#0f1f3d","text-anchor":"middle","font-family":"sans-serif","font-size":((12+6*(zoomIn-1))+"px")}).text(function(a){return a.mutpat === undefined || a.mutpat === 'NA'?a.compound:(a.compound+''+a.mutpat)});
    var nodeswidths = nodeText._groups[0].map(function(a,b){return a.getBoundingClientRect().width;}),nodesheights = nodeText._groups[0].map(function(a,b){return a.getBoundingClientRect().height;}); nodeText.remove(); 
    defsSVG.append("filter").attr("id","dropshadow").append("feGaussianBlur").attr("stdDeviation",2); 
    nodeBlurRect = nodes.append("g");
    nodeBlurRect.append("rect").attrs({x:function(a,b){return (nodeswidths[b])/(-2);},y:function(a,b){return (nodesheights[b])/(-1.3);},width:function(a,b){return nodeswidths[b];},height:function(a,b){return nodesheights[b]/1.2;},filter:"url(#dropshadow)",fill:"white",rx:3,ry:3}); 
    nodeBlurRect.append("text").attrs({y:0,x:0,"class":"textNodes",fill:"#0f1f3d","text-anchor":"middle","font-family":"sans-serif","font-size":((12+6*(zoomIn-1))+"px")}).text(function(a){return a.mutpat === undefined || a.mutpat === 'NA'?a.compound:(a.compound+''+a.mutpat)});

  // create legend group
  var legendgroup = svg.append("g").attr("class", "legendgroup").attr("transform", ("translate(" + (width-.015*width) + ",40) scale("+(zoomIn<.7?.7:zoomIn)+")")).data([{x: (width-.015*width), y: 40}]).call(drag_);
  var legend = legendgroup.append("g").attr("class", "legend").selectAll("g").data(graph.uniqueClasses).enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + 0 + "," + (i * 20 + 25) + ")"; });
  var legendCPhase = legendgroup.append("g").attr("class", "legend12").selectAll("g").data(graph.uniquePhases).enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + 0 + "," + (i * 20 + (graph.uniqueClasses.length+1)*20 + 15) + ")"; });
  var legend2 = legendgroup.append("g").attr("class", "legend2").selectAll("g").data(graph.uniqueTypes).enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + 0 + "," + (i * 15 + (graph.uniqueClasses.length+1)*20 + (graph.uniquePhases.length+1)*20 + 35) + ")"; });
  var circles = legend.append("circle").attr("class","circlesLeg").attr("cx", -120).attr("cy", 15).attr("r", 6).attr('fill-opacity', 0.7).attr("fill", function (d, i) {
  return color(graph.uniqueClasses[i]);
  }).attr("value",function(d,i) {return i;});//.attr("id",function(d) {return d.replace(/\s/g,'');}).attr("value",function(d,i) {return i;});
  var circles12 = legendCPhase.append("circle").attr("cx", -120).attr("cy", 43).attr("r", 6).attr('fill-opacity', .95).attr("fill", 
  function (d) { return colorPhaseCol[colorPhase(d)-1]; 
  }).attr("value",function(d,i) {return i;});
  var circles2 = legend2.append("rect").attr("class","circlesLeg2").attr("x", -128).attr("y", 43).attr("width", 15).attr("height", 3).attr("fill", 
  function (d) { return colorLink(d);
  //return color.range()[i]
  }).attr("value",function(d) {return d;});//.attr("id",function(d) {return d.replace(/\s/g,'');}).attr("value",function(d,i) {return i;});
  var legend1Text=legend.append("text").attr("x",-103).attr("y",20).attr("text-anchor","start")
  .attr("opacity",function(a){return (jQuery.inArray(a, classesExclude) !== -1)?0.2:1;})
  .attr("font-size","14px").attr("value",function(a){return a}).text(function(a){return a});  
  var legend12Text=legendCPhase.append("text").attr("x",-103).attr("y",48).attr("text-anchor","start")
  .attr("opacity",function(a){return (jQuery.inArray(a, phaseExclude) !== -1)?0.2:1;}) // TODO: classesExclude change to phaseExclude
  .attr("font-size","14px").attr("value",function(a){return a}).text(function(a){return a});  
  var legend2Text=legend2.append("text").attr("x",-98.5).attr("y",48)
  .attr("opacity",function(a){return (jQuery.inArray(a, linksExclude) !== -1)?0.2:1;})
  .attr("text-anchor","start").attr("font-size","14px").attr("value",function(a){return a}).text(function(a){return a});
  legendgroup.append("text").attrs({"text-anchor":"end","font-size":"15px","font-weight":"bold","font-style":"italic",transform:"translate(-39,23)"}).text("Target class:");
  legendgroup.append("text").attrs({"text-anchor":"end","font-size":"15px","font-weight":"bold","font-style":"italic",transform:"translate(-23,"+((graph.uniqueClasses.length+1)*20+41)+")"}).text("Clinical phase:");
  legendgroup.append("text").attrs({"text-anchor":"end","font-size":"15px","font-weight":"bold","font-style":"italic",transform:"translate(-12,"+((graph.uniqueClasses.length+1)*20+(graph.uniquePhases.length+1)*20+61)+")"}).text("Bioactivity type:");
  if(maxNodeSizeGene!=minNodeSizeGene){
    var legend3 = svg.append("g").attrs({transform:("translate("+(width-(150*(zoomIn<.7?.7:zoomIn)))+" "+((height-160))+") scale("+(0.66)+")"),xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}).data([{x:(width-(300/zoomIn)), y:((height-160))}]).call(drag2_);
      legend3.append("defs").html('<linearGradient id="cc19" x2="0%" y2="100%"><stop stop-color="#aaa" stop-opacity=".7" class="stopOpas1" value="" offset="0"/><stop stop-color="#aaa" stop-opacity=".03" class="stopOpas2" value="" offset="1"/></linearGradient><radialGradient id="dd19" gradientUnits="userSpaceOnUse" cy="38.594" cx="180.72" gradientTransform="matrix(.1624 2.1067 -1.691 .2627 228.26 -371.43)" r="28.884"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></radialGradient><filter id="aa19" y="-.271" width="1.215" x="-.108" height="1.542"><feGaussianBlur stdDeviation="4.936"/></filter><filter id="bb19" y="-.628" width="1.596" x="-.298" height="2.256"><feGaussianBlur stdDeviation="12.494"/></filter><filter id="ee19"><feGaussianBlur stdDeviation="2.466"/></filter>');
    //legend3.append("text").attrs({x:((-40*(zoomIn))+"px"),y:((135*zoomIn)+"px"),"font-family":"Verdana","font-size":((22*zoomIn)+"px")}).html(minNodeSizeGene===1?(minNodeSizeGene+" bioactivity"):(minNodeSizeGene+" bioactivities"));
    //legend3.append("text").attrs({x:(115*zoomIn+"px"),y:((135*zoomIn)+"px"),"font-family":"Verdana","font-size":((22*zoomIn)+"px")}).html(maxNodeSizeGene+" bioactivities");
    legend3.append("text").attrs({x:((-40*((zoomIn<.7?.7:zoomIn)))+"px"),y:((-55*(zoomIn<.7?.7:zoomIn))+"px"),"font-weight":"bold","font-style":"italic","font-size":((25*(zoomIn<.7?.7:zoomIn))+"px")}).html("No. of bioactivities:")
    legend3.append("text").attrs({x:((160*((zoomIn<.7?.7:zoomIn)))+"px"),y:((40*(zoomIn<.7?.7:zoomIn))+"px"),"font-family":"Verdana","font-size":((22*(zoomIn<.7?.7:zoomIn))+"px")}).html(minNodeSizeGene)
    legend3.append("text").attrs({x:((160*((zoomIn<.7?.7:zoomIn)))+"px"),y:((150*(zoomIn<.7?.7:zoomIn))+"px"),"font-family":"Verdana","font-size":((22*(zoomIn<.7?.7:zoomIn))+"px")}).html(maxNodeSizeGene)
    var figureLegend3 = '<path filter="url(#aa19)" transform="matrix(.2256 0 0 -.0646 -33.16 23.787)" d="m222.45 56.486a28.885 28.885 0 1 1 -57.77 0 28.885 28.885 0 1 1 57.77 0z" fill="#bfcfe2"/><path filter="url(#bb19)" transform="matrix(.0786 0 0 -.0283 -1.854 21.872)" d="m222.45 56.486a28.885 28.885 0 1 1 -57.77 0 28.885 28.885 0 1 1 57.77 0z" fill="#fff"/><path transform="matrix(.364 0 0 .3572 -59.938 -9.843)" d="m222.45 56.486a28.885 28.885 0 1 1 -57.77 0 28.885 28.885 0 1 1 57.77 0z" fill="#fff"/><path transform="matrix(.364 0 0 .3572 -59.938 -9.843)" d="m222.45 56.486a28.885 28.885 0 1 1 -57.77 0 28.885 28.885 0 1 1 57.77 0z" fill="url(#cc19)"/><path d="m222.45 56.486a28.885 28.885 0 1 1 -57.77 0 28.885 28.885 0 1 1 57.77 0z" transform="matrix(.2047 -.036 .0258 .1416 -31.714 3.81)" filter="url(#ee19)" stroke="url(#j19)" stroke-width=".815" fill="url(#dd19)"/><image xmlns="http://www.w3.org/2000/svg" xlink:href="data:image/png;base64,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" height="15" width="15" y="4" x="3" xmlns:xlink="http://www.w3.org/1999/xlink"/>';
    legend3.append("g").attr("transform","scale("+(5*(zoomIn<.7?.7:zoomIn))+") translate(0,20)").html(figureLegend3); legend3.append("g").attr("transform","scale("+(3*(zoomIn<.7?.7:zoomIn))+") translate(5,0)").html(figureLegend3);
  }

    var ypos = 15*(graph.uniqueTypes.length+1)+20*(graph.uniquePhases.length+1)+20*(graph.uniqueClasses.length+1)+88;
    var mutLine = legendgroup.append("line").attr("class","dashMut").attr("stroke","rgba(0,0,200,.9)").attr("x1", -128).attr("x2", -100).attr("y1", ypos).attr("y2", ypos)
    .style("stroke-width","4px").style("stroke-dasharray","13,4");
    var mutLineText = legendgroup.append("text").attr("x",-87).attr("y",ypos+4).attr("text-anchor","start").text("Mutated target").attr("font-size","14px")
    .attr("opacity",function(a){return (!showMut)?0.9:1;});
    
    // legend circle events
  window.value_circle = null, window.value_circle2 = null, window.value_circle3 = null, window.value_circle12 = null;
  circles.on("mouseover",function(e){d3.select(this).style("cursor","pointer")})
     .on("mouseout",function(e){d3.select(this).style("cursor","default")})
     .on("click",function(e){$("#cp4").colorpicker("hide"),$("#cp5").colorpicker("hide"),$("#cp6").colorpicker("hide"),value_circle=d3.select(this).attr("value"),
           $("#cp4").colorpicker("setValue",d3.select(this).attr("fill")),$("#cp4").colorpicker("show")});  
  circles12.on("mouseover",function(e){d3.select(this).style("cursor","pointer"); })
     .on("mouseout",function(e){d3.select(this).style("cursor","default")}).on("click",function(e){
       $("#cp4").colorpicker("hide"),$("#cp5").colorpicker("hide"),$("#cp6").colorpicker("hide");
       value_circle12 = graph.uniquePhases[d3.select(this).attr("value")]; 
       $("#colorPick").show()
       });
  $(".colorPickButton").on("click",function(e){
    $(("."+value_circle12+"_").replace(/\s+/g, '')).attr("href", ("../../static/img/testlight"+(colorPhaseCol.indexOf($(this).attr("hexvalue"))+1)+".png"));
    $("#colorPick").hide();
    
    for(var _Array=d3.selectAll(".legend12 text")._groups[0],arrayLength=_Array.length,ind_,i=0;i<arrayLength;i++)_Array[i].__data__==value_circle12&&(ind_=i);
    d3.select(d3.selectAll(".legend12 circle")._groups[0][ind_]).attr("fill", $(this).attr("hexvalue"))
  
    var colorCpD = JSON.parse(JSON.stringify(colorPhase.domain())), colorCpR = JSON.parse(JSON.stringify(colorPhase.range())); // deep copy range and domain
      colorCpR[colorCpD.indexOf(value_circle12)] = (colorPhaseCol.indexOf($(this).attr("hexvalue"))+1);    
      window.colorPhase =d3.scaleOrdinal().domain(JSON.parse(JSON.stringify(colorPhase.domain()))).range(JSON.parse(JSON.stringify(colorCpR)));
  })
  circles2.on("mouseover",function(e){d3.select(this).style("cursor","pointer")})
    .on("mouseout",function(e){d3.select(this).style("cursor","default")})
    .on("click",function(e){$("#cp4").colorpicker("hide"),$("#cp5").colorpicker("hide"),$("#cp6").colorpicker("hide"),value_circle2=d3.select(this).attr("value"),
          $("#cp5").colorpicker("setValue",d3.select(this).attr("fill")),$("#cp5").colorpicker("show")});
  mutLine.on("mouseover",function(e){d3.select(this).style("cursor","pointer")})
     .on("mouseout",function(e){d3.select(this).style("cursor","default")})
     .on("click",function(e){$("#cp4").colorpicker("hide"),$("#cp5").colorpicker("hide"),$("#cp6").colorpicker("hide"),value_circle3=d3.select(this).attr("value"),
           $("#cp6").colorpicker("setValue",d3.select(this).attr("stroke")),$("#cp6").colorpicker("show")});  
             
    // change node color on legend click
    $('#cp4').on('changeColor',
        function(ev) {
          d3.selectAll(".circlesLeg").each(function(b,a){a==value_circle&&d3.select(this).attr("fill",$("#cp4").colorpicker("getValue"))});
          d3.selectAll(".stopOpas2").each(function(a,b){d3.select(this).attr("value")==graph.uniqueClasses[value_circle]&&d3.select(this).attr("stop-color",$("#cp4").colorpicker("getValue"))});
          d3.selectAll(".stopOpas1").each(function(a,b){d3.select(this).attr("value")==graph.uniqueClasses[value_circle]&&d3.select(this).attr("stop-color",$("#cp4").colorpicker("getValue"))});
          d3.selectAll(".s0").each(function(a,b){d3.select(this).attr("value")==graph.uniqueClasses[value_circle]&&d3.select(this).attr("stroke",$("#cp4").colorpicker("getValue"))});
          var colorCpD = JSON.parse(JSON.stringify(color.domain())), colorCpR = JSON.parse(JSON.stringify(color.range())); // deep copy range and domain
          colorCpR[colorCpD.indexOf(graph.uniqueClasses[value_circle])] = $("#cp4").colorpicker("getValue");    
          window.color =d3.scaleOrdinal().domain(JSON.parse(JSON.stringify(color.domain()))).range(JSON.parse(JSON.stringify(colorCpR)));
      });
    $('#cp5').on('changeColor',
        function(ev) {
          d3.selectAll(".circlesLeg2").each(function(b,a){b==value_circle2&&d3.select(this).attr("fill",$("#cp5").colorpicker("getValue"))});
          d3.selectAll(".col"+value_circle2).attr("style","stop-color:"+$("#cp5").colorpicker("getValue"));
          var colorLinkCpD = JSON.parse(JSON.stringify(colorLink.domain())), colorLinkCpR = JSON.parse(JSON.stringify(colorLink.range())); // deep copy range and domain
          colorLinkCpR[colorLinkCpD.indexOf(value_circle2)] = $("#cp5").colorpicker("getValue");    
          window.colorLink =d3.scaleOrdinal().domain(JSON.parse(JSON.stringify(colorLink.domain()))).range(JSON.parse(JSON.stringify(colorLinkCpR)));
      });
/*    $('#cp7').on('changeColor',
    function(ev) {
      d3.selectAll(".circlesLeg12").each(function(b,a){a==value_circle12&&d3.select(this).attr("fill",$("#cp7").colorpicker("getValue"))});
      d3.selectAll(".stopOpas3").each(function(a,b){d3.select(this).attr("value")==graph.uniquePhases[value_circle12]&&d3.select(this).attr("stop-color",$("#cp7").colorpicker("getValue"))});
      //d3.selectAll(".stopOpas1").each(function(a,b){d3.select(this).attr("value")==graph.uniquePhases[value_circle12]&&d3.select(this).attr("stop-color",$("#cp4").colorpicker("getValue"))});
      //d3.selectAll(".s0").each(function(a,b){d3.select(this).attr("value")==graph.uniquePhases[value_circle12]&&d3.select(this).attr("stroke",$("#cp4").colorpicker("getValue"))});
      var colorCpD = JSON.parse(JSON.stringify(colorPhase.domain())), colorCpR = JSON.parse(JSON.stringify(colorPhase.range())); // deep copy range and domain
      colorCpR[colorCpD.indexOf(graph.uniquePhases[value_circle12])] = $("#cp7").colorpicker("getValue");   
      window.colorPhase =d3.scaleOrdinal().domain(JSON.parse(JSON.stringify(colorPhase.domain()))).range(JSON.parse(JSON.stringify(colorCpR)));
  }); */
    $('#cp6').on('changeColor',
        function(ev) {
          d3.selectAll(".dashMut").attr("stroke",$("#cp6").colorpicker("getValue"));
    });
    // legend text events
    legend1Text.on("mouseover",function(e){d3.select(this).style("cursor","pointer")})
       .on("click",function(e){
        endSimulation();
        -1!==jQuery.inArray(d3.select(this).attr("value"),classesExclude)?
        classesExclude.splice(classesExclude.indexOf(d3.select(this).attr("value")),1):classesExclude.push(d3.select(this).attr("value"));
        reDrawGraph(); 
       });
    legend12Text.on("mouseover",function(e){d3.select(this).style("cursor","pointer")})
     .on("click",function(e){
      endSimulation();
      -1!==jQuery.inArray(d3.select(this).attr("value"),phaseExclude)?
      phaseExclude.splice(phaseExclude.indexOf(d3.select(this).attr("value")),1):phaseExclude.push(d3.select(this).attr("value"));
      reDrawGraph(); 
     });
    legend2Text.on("mouseover",function(e){d3.select(this).style("cursor","pointer")})
       .on("click",function(e){
          endSimulation();
          -1!==jQuery.inArray(d3.select(this).attr("value"),linksExclude)?
          linksExclude.splice(linksExclude.indexOf(d3.select(this).attr("value")),1):linksExclude.push(d3.select(this).attr("value"));
          reDrawGraph(); 
       });
    mutLineText.on("mouseover",function(e){d3.select(this).style("cursor","pointer")}) 
       .on("click",function(e){ 
        endSimulation();
        showMut = !showMut;
        reDrawGraph();
       })
  }
  
  // on each tick
  function ticked() {

    nodeFig.each(function(c){var e,d=d3.select(this);
      if(depictedNodes.forEach(function(h){h.compound===c.compound&&(e=h)}),initialDraw)d.attr("x",Math.max(70,Math.min(width-70,!0===c.gene?c.x:c.x))),
      d.attr("y",Math.max(70,Math.min(height-70,c.y)));else if(!e||isNaN(e.fx)||isNaN(e.fy)){d.attr("x",Math.max(70,Math.min(width-70,!0===c.gene?c.x:c.x))),
      d.attr("y",Math.max(70,Math.min(height-70,c.y)));for(var f=0,g=depictedNodes.length;f<g;f++)depictedNodes[f].compound===c.compound&&(depictedNodes[f].x=c.x,
      depictedNodes[f].y=c.y)}else if(c.active){d.attr("x",Math.max(70,Math.min(width-70,!0===c.gene?c.x:c.x))),d.attr("y",Math.max(70,Math.min(height-70,c.y)));
      for(var f=0,g=depictedNodes.length;f<g;f++)depictedNodes[f].compound===c.compound&&(depictedNodes[f].x=c.x,depictedNodes[f].y=c.y,depictedNodes[f].fx=c.x,
      depictedNodes[f].fy=c.y)}else d.attr("x",e.fx?e.fx:e.x),d.attr("fx",e.fx?e.fx:e.x),d.attr("y",e.fy?e.fy:e.y),d.attr("fy",e.fy?e.fy:e.y)});
      
    nodeBlurRect.each(function(b,a){d3.select(this).attr("transform","translate("+(nodeFig._groups[0][a].x.animVal.value+(b.gene?0:nodeFig._groups[0][a].getBBox().width/4))+","+
    (nodeFig._groups[0][a].y.animVal.value+(b.gene?0:(nodeFig._groups[0][a].getBBox().height/1.9)))+")");});

    links_.each(function(a,i){
    var asx=nodeFig._groups[0][a.source.ind].x.animVal.value + nodeFig._groups[0][a.source.ind].getBBox().width/2,asy=nodeFig._groups[0][a.source.ind].y.animVal.value + nodeFig._groups[0][a.source.ind].getBBox().height/2,
      atx=nodeFig._groups[0][a.target.ind].x.animVal.value + nodeFig._groups[0][a.target.ind].getBBox().width/2,aty=nodeFig._groups[0][a.target.ind].y.animVal.value + nodeFig._groups[0][a.target.ind].getBBox().height/2;

    var d=[asx-atx,asy-aty],angle=180*Math.atan(d[0]/d[1])/Math.PI;0>d[1]?angle+=180:0>d[0]&&(angle+=360);isNaN(angle)&&(angle=0);

    d3.select(this).attr("x",asx-10*parseFloat(a.width_)/2).attr("y",asy-10*parseFloat(a.width_)/2).attr("transform","rotate("+(180-angle)+" "+asx+" "+asy+")")
         .attr("height",Math.sqrt(Math.pow(atx-asx,2)+Math.pow(aty-asy,2)));
    })
  }
  
  // hide colorpick for compounds 
  $("#colorPick").hide();
  
  // export table
  function JSONToCSVConvertor(b,f,a){var d="object"!=typeof b?JSON.parse(b):b;b="sep=,\r\n";if(a){a="";for(var c in d[0])a+=c+",";a=a.slice(0,-1);b+=a+"\r\n"}for(var e=0;e<d.length;e++){a="";for(c in d[e])a+='"'+d[e][c]+'",';a.slice(0,a.length-1);b+=a+"\r\n"}""==b?alert("Invalid data"):(f="MyReport_"+f.replace(/ /g,"_"),b="data:text/csv;charset=utf-8,"+escape(b),c=document.createElement("a"),c.href=b,c.style="visibility:hidden",c.download=f+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c))}

  
  ////////////// DEFAULT SETTINGS: /////////////
  
  // feedback
  window._urq=window._urq||[];_urq.push(["initSite","c4cb605c-f068-4f3a-b495-69131852f40a"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https:"==document.location.protocol?"https://cdn.userreport.com/userreport.js":"http://cdn.userreport.com/userreport.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
  window.linkImage_="https://cdn.rawgit.com/AleksandrIanevski/full/2b55e041/" 

  // define SVG
  var container = d3.selectAll("div#container"); container.selectAll("*").remove();
  var svg = container.append("svg")
        .attrs({width: 0.99 * (window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),
          height: 0.92 * (window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),
          id:"SVGgraph"}), width = +svg.attr("width"), height = +svg.attr("height"), initialWidth = +svg.attr("width"), initialHeight = +svg.attr("height");

  //define drag behaviour and colors for legend
  var color = d3.scaleOrdinal().domain(["Enzyme","GPCR","Nuclear receptor","Epigenetic regulator","Transporter","Ion channel","Other","Kinase","Unknown"]).range(["#d3d3d3","rgba(0,117,255,0.81)","rgba(245,20,236,0.81)","pink","brown","rgba(51,0,255,0.81)","orange","rgba(0,145,41,0.81)"]);
  var colorPhase = d3.scaleOrdinal().domain(["Preclinical","Phase I","Phase II","Phase III","Approved","Unknown"]).range([7,6,16,13,8,14]), colorPhaseCol = "#016516 #2F2F2F #7DE365 #8D003C #001665 #E53D02 #00D2BF #0145C7 #E50514 #E67A0A #8D3B25 #E50261 #049B49 #E6B40D #646464 #989898 #CACACA".split(" ");
  var colorLink =d3.scaleOrdinal().domain(["IC50","KI","KD","EC50","POTENCY","AC50","XC50","Unknown"]).range(["rgba(245,20,236,0.51)","rgba(146,226,154,0.7)","rgba(0,117,255,0.51)","rgba(255,165,0,0.7)","brown","green","orange","steelblue"]);
  var drag_=d3.drag().on("start",function(a){a.init_=d3.mouse(this)}).on("drag",function(a){var b=d3.mouse(this);a.x+=b[0]-a.init_[0];a.y+=b[1]-a.init_[1];d3.select(this).attr("transform","translate("+[a.x,a.y]+") scale("+(zoomIn<.7?.7:zoomIn)+")")});
  var drag2_=d3.drag().on("start",function(a){a.init_=d3.mouse(this)}).on("drag",function(a){var b=d3.mouse(this);a.x+=b[0]-a.init_[0];a.y+=b[1]-a.init_[1];d3.select(this).attr("transform","translate("+[a.x,a.y]+") scale("+(0.66)+")")});

  // create tooltip
  var toolTip = d3.select("body").append("div").attr("class", "tooltipCust").style("opacity", 0);

  // process data
  var metrics_="IC50 KI KD EC50 POTENCY AC50 XC50 Unknown".split(" "),showMut=!0,zoomIn = width/2100,maxLinks=null,numOfLinks=null,linksExclude=[],classesExclude=[],phaseExclude=["Preclinical"],metricsClass_="Enzyme;GPCR;Nuclear receptor;Epigenetic regulator;Transporter;Ion channel;Other;Kinase;Unknown".split(";"),metricsPhase_="Preclinical;Phase I;Phase II;Phase III;Approved;Unknown".split(";");

  var depictedNodes = [], useMouse = !1, initialDraw = !0, justResized = !1;

  // define simulation parameters
  window.simulation = d3.forceSimulation().alphaDecay(0.1)
    .force("link", d3.forceLink().distance(30)).force("charge", d3.forceManyBody().strength(-800).distanceMin(0).distanceMax(200))
    .force("y", d3.forceY(height / 2).strength(0.9)).force("x", d3.forceX(width / 2.3).strength(0.22)).force("collide", d3.forceCollide().radius(55*zoomIn).iterations(10))
    .on('end', function(){
      endSimulation();
    })