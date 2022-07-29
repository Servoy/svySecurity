customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/tenants",
encapsulation:108,
items:[
{
cssPosition:"-1,-1,10,140,25,40",
json:{
alignment:"center",
cssPosition:{
bottom:"10",
height:"40",
left:"140",
right:"-1",
top:"-1",
width:"25"
},
imageStyleClass:"fas fa-plus text-success fa-lg clickable",
onActionMethodID:"A22E3AB6-84EB-456A-9322-75C724A782BA",
size:{
height:25,
width:25
}
},
name:"iconNewTenant",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"2E52BC25-C6C6-4B64-A0BB-9D68254058CA"
},
{
cssPosition:"-1,-1,10,30,125,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"30",
right:"-1",
top:"-1",
width:"125"
},
dataProviderID:"labelAction",
styleClass:"text-success text-center-vertical",
visible:false
},
name:"labelAction",
styleClass:"text-success text-center-vertical",
typeName:"bootstrapcomponents-datalabel",
typeid:47,
uuid:"3CD5E744-CB58-44CA-880F-5E69566DDF5A",
visible:false
},
{
cssPosition:"-1,-1,10,730,25,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"730",
right:"-1",
top:"-1",
width:"25"
},
imageStyleClass:"fas fa-times text-tertiary fa-lg clickable",
onActionMethodID:"F123AB71-00DA-4A17-8932-1AAE932472F3",
visible:false
},
name:"iconCancel",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"3D6E1E84-50B2-4CF5-AF62-FFEA8E6E3AC9",
visible:false
},
{
cssPosition:"50,0,60,0,200,100",
json:{
columns:[
{
dataprovider:"tenant_name",
filterType:"TEXT",
headerTitle:"Name",
id:"name",
svyUUID:"BABF748C-B23D-45DA-8FBE-9C47CAB01838"
},
{
dataprovider:"display_name",
headerTitle:"Display Name",
id:"displayName",
svyUUID:"E8401273-F508-4BE6-9D73-77358BB35DA5"
},
{
dataprovider:"tenants_to_users_ux.userCount",
headerTitle:"Users",
id:"users",
svyUUID:"644F5198-E6E0-4EBC-B6D1-61AE16D415F0"
},
{
dataprovider:"master_tenant_name",
headerTitle:"Master",
id:"master",
svyUUID:"1A5853F4-1E2B-4984-A249-01728130B421"
}
],
cssPosition:{
bottom:"60",
height:"100",
left:"0",
right:"0",
top:"50",
width:"200"
},
gridOptions:{
floatingFilter:"true",
floatingFiltersHeight:"40"
},
onCellDoubleClick:"973B430C-259E-45BA-82D4-46C497E412E4",
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"2EEDF6D4-E405-4B82-9BDE-0D7A727BD7D2"
}
},
name:"table",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"4163E525-C1A8-44B4-8080-0D18BB30A636"
},
{
cssPosition:"-1,-1,10,43,122,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"43",
right:"-1",
top:"-1",
width:"122"
},
onActionMethodID:"A22E3AB6-84EB-456A-9322-75C724A782BA",
styleClass:"text-success clickable text-center-vertical",
text:"NEW TENANT"
},
name:"btnNewTenant",
styleClass:"text-success clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"50C04618-2A24-4139-B3A6-5A580479D786"
},
{
cssPosition:"8,51,-1,-1,25,38",
json:{
cssPosition:{
bottom:"-1",
height:"38",
left:"-1",
right:"51",
top:"8",
width:"25"
},
onActionMethodID:"0357891F-B55E-462B-94DC-4C057A85C32C",
styleClass:"fas fa-long-arrow-alt-left fa-lg text-tertiary text-center text-center-vertical clickable"
},
name:"iconBack",
styleClass:"fas fa-long-arrow-alt-left fa-lg text-tertiary text-center text-center-vertical clickable",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"693AE7F2-5015-49E3-A89D-E8759B5D6B05"
},
{
cssPosition:"-1,-1,10,379,176,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"379",
right:"-1",
top:"-1",
width:"176"
},
onActionMethodID:"AE08DBFD-6B4F-47EB-8DAA-7C8EF92615FC",
styleClass:"text-success clickable text-center-vertical",
text:"CREATE SUB TENANT"
},
name:"btnNewSubTenant",
styleClass:"text-success clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"6FBBDA31-D807-4780-B2E0-D77882BE4308"
},
{
cssPosition:"-1,-1,10,595,140,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"595",
right:"-1",
top:"-1",
width:"140"
},
onActionMethodID:"239EA149-BB12-4F22-B824-CDC9FDC4F4DB",
styleClass:"text-danger clickable text-center-vertical",
text:"DELETE TENANT"
},
name:"btnDeleteTenant",
styleClass:"text-danger clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7D6A0DC6-6A28-439B-918D-89178F35CDC6"
},
{
cssPosition:"8,11,-1,-1,40,38",
json:{
cssPosition:{
bottom:"-1",
height:"38",
left:"-1",
right:"11",
top:"8",
width:"40"
},
onActionMethodID:"0357891F-B55E-462B-94DC-4C057A85C32C",
styleClass:"text-tertiary clickable text-center text-center-vertical",
text:"Back"
},
name:"btnBack",
styleClass:"text-tertiary clickable text-center text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"822D97D7-89DB-452F-8752-B4DCE93722D5"
},
{
cssPosition:"-1,-1,10,710,25,40",
json:{
alignment:"center",
cssPosition:{
bottom:"10",
height:"40",
left:"710",
right:"-1",
top:"-1",
width:"25"
},
imageStyleClass:"fas fa-trash text-danger fa-lg clickable",
onActionMethodID:"239EA149-BB12-4F22-B824-CDC9FDC4F4DB",
size:{
height:25,
width:25
}
},
name:"iconDeleteTenant",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"9F304FDF-93FB-45EC-8585-A57C4CCE4DC7"
},
{
cssPosition:"-1,-1,10,700,25,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"700",
right:"-1",
top:"-1",
width:"25"
},
imageStyleClass:"fa fa-check text-success fa-lg clickable",
onActionMethodID:"89B7FA8C-A7C3-4DBF-9AF1-5E5440BE40BD",
visible:false
},
name:"iconConfirme",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"A4ED198A-31F8-4EEE-A966-A60143F97EAC",
visible:false
},
{
cssPosition:"-1,-1,10,530,25,40",
json:{
alignment:"center",
cssPosition:{
bottom:"10",
height:"40",
left:"530",
right:"-1",
top:"-1",
width:"25"
},
imageStyleClass:"fas fa-layer-group text-success fa-lg clickable",
onActionMethodID:"AE08DBFD-6B4F-47EB-8DAA-7C8EF92615FC",
size:{
height:25,
width:25
}
},
name:"iconNewSubTenant",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"AB5E9BF2-1419-470B-8DD8-14D8B62849C7"
},
{
cssPosition:"-1,-1,10,320,25,40",
json:{
alignment:"center",
cssPosition:{
bottom:"10",
height:"40",
left:"320",
right:"-1",
top:"-1",
width:"25"
},
imageStyleClass:"fas fa-clone text-success fa-lg clickable",
onActionMethodID:"18C5F305-6B43-46D8-9CAA-823B81C89FD9",
size:{
height:25,
width:25
}
},
name:"iconCloneTenant",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"B993961D-FF91-43AD-88E4-611515619AED"
},
{
cssPosition:"10,100,-1,0,0,50",
json:{
cssPosition:{
bottom:"-1",
height:"50",
left:"0",
right:"100",
top:"10",
width:"0"
},
styleClass:"padding-left-10 text-primary border-primary h2",
text:"Tenants"
},
name:"title",
styleClass:"padding-left-10 text-primary border-primary h2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D41F777D-A758-46D3-8866-FA4E032BC0EB"
},
{
cssPosition:"-1,-1,10,209,136,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"209",
right:"-1",
top:"-1",
width:"136"
},
onActionMethodID:"18C5F305-6B43-46D8-9CAA-823B81C89FD9",
styleClass:"text-success clickable text-center-vertical",
text:"CLONE TENANT"
},
name:"btnCloneTenant",
styleClass:"text-success clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"DCF9BB8F-3CE0-4E23-A081-9B21EB44F6D3"
},
{
cssPosition:"-1,-1,10,30,650,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"30",
right:"-1",
top:"-1",
width:"650"
},
dataProviderID:"name",
visible:false
},
name:"name",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"FACCB19D-1AD4-4669-88D1-FAC1E92FA8FC",
visible:false
},
{
height:480,
partType:5,
typeid:19,
uuid:"FD067C1A-FB81-42C5-AB45-4B147A386C01"
}
],
name:"svySecurityUXTenants",
navigatorID:"-1",
onHideMethodID:"06280C18-EB29-497F-86B4-A4A71EB86F7F",
showInMenu:true,
size:"800,480",
typeid:3,
uuid:"D425B2B5-568A-4003-BAA4-92B0B2990A45"