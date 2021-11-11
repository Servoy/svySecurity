customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/tenants",
encapsulation:108,
items:[
{
cssPosition:"50,0,60,0,200,100",
json:{
columns:[
{
dataprovider:"tenant_name",
filterType:"TEXT",
headerTitle:"Name",
svyUUID:"13607DB9-E788-42DC-9BBE-E7A9B2337F41"
},
{
dataprovider:"tenants_to_users_ux.userCount",
headerTitle:"Users",
svyUUID:"1BF0016F-1F6B-440F-A3F8-A89E83C03FEE"
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
groupUseEntireRow:false,
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"B043F192-E0EA-4EF3-8F12-86E17979AC57"
}
},
name:"groupingtable_1",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"2A3E08BD-21A2-4D68-8396-C27B56BF8C4F"
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
name:"label_1",
styleClass:"padding-left-10 text-primary border-primary h2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"4A0BE134-91A9-4F1E-B997-A351B71E7AFD"
},
{
height:200,
partType:5,
typeid:19,
uuid:"746412A8-00B9-4608-95B2-AD71E1562157"
},
{
cssPosition:"-1,30,0,-1,171,60",
json:{
containedForm:{
label_1:{
onActionMethodID:"A588F60D-9BEC-4845-880A-FE719A0DEC5F",
text:"Manage Tenants"
},
manageBtnIcon:{
onActionMethodID:"A588F60D-9BEC-4845-880A-FE719A0DEC5F"
},
svy_form:"0A55A829-0234-4867-8E20-2285E134B3AC"
},
cssPosition:{
bottom:"0",
height:"60",
left:"-1",
right:"30",
top:"-1",
width:"171"
}
},
name:"formcomponent_4",
typeName:"servoycore-formcomponent",
typeid:47,
uuid:"926EA8E4-CFAD-4028-A804-0A5C0EFD8E35"
}
],
name:"svySecurityConsoleUXTenantsList",
navigatorID:"-1",
showInMenu:true,
size:"293,480",
typeid:3,
uuid:"94A25CFA-E9F5-4381-8763-C3CC76942A4D"