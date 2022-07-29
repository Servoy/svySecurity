customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/tenants",
encapsulation:108,
items:[
{
cssPosition:"-1,30,10,-1,25,40",
json:{
alignment:"center",
cssPosition:{
bottom:"10",
height:"40",
left:"-1",
right:"30",
top:"-1",
width:"25"
},
imageStyleClass:"fas fa-long-arrow-alt-right text-tertiary fa-lg clickable",
onActionMethodID:"D1CC12FB-FB89-4067-9802-2500D226AC87",
size:{
height:25,
width:25
}
},
name:"iconViewTenants",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"3EDE59ED-F695-4857-BD16-076B2974F808"
},
{
cssPosition:"50,0,60,0,0,50",
json:{
columns:[
{
dataprovider:"tenant_name",
filterType:"TEXT",
headerTitle:"Name",
svyUUID:"1E00D2F2-9537-43A8-A85E-D041754F59B8"
},
{
dataprovider:"tenants_to_users_ux.userCount",
headerTitle:"Users",
svyUUID:"2E6EE566-4B56-4F46-81A6-1A5063745C1E"
}
],
cssPosition:{
bottom:"60",
height:"50",
left:"0",
right:"0",
top:"50",
width:"0"
},
gridOptions:{
floatingFilter:"true",
floatingFiltersHeight:"40"
},
groupUseEntireRow:false,
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"98DAA82E-D047-4C65-957E-A3C42260D4D1"
}
},
name:"table",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"5F364E28-701F-4F36-B100-E1A60C56BF8F"
},
{
cssPosition:"10,0,-1,0,0,50",
json:{
cssPosition:{
bottom:"-1",
height:"50",
left:"0",
right:"0",
top:"10",
width:"0"
},
styleClass:"padding-left-10 text-primary border-primary h2",
text:"Tenants List"
},
name:"labelTitle",
styleClass:"padding-left-10 text-primary border-primary h2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"AD4ECCEB-3564-4AD1-9A03-A0CF133BF533"
},
{
height:200,
partType:5,
typeid:19,
uuid:"DF0358F7-0953-462F-BFDC-F02F226C14CE"
},
{
cssPosition:"-1,30,10,-1,160,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"-1",
right:"30",
top:"-1",
width:"160"
},
onActionMethodID:"D1CC12FB-FB89-4067-9802-2500D226AC87",
styleClass:"text-tertiary clickable text-center-vertical",
text:"MANAGE TENANTS"
},
name:"btnViewTenants",
styleClass:"text-tertiary clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"EC6FAC44-2A88-4D07-A7BE-52E3A6212E3F"
}
],
name:"svySecurityUXTenantsList",
namedFoundSet:"separate",
navigatorID:"-1",
showInMenu:true,
size:"293,480",
typeid:3,
uuid:"861737D4-84CD-46BE-922F-ECB26F50F836"