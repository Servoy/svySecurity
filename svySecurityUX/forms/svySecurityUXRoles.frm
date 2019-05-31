customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/roles",
encapsulation:60,
items:[
{
cssPosition:"-1,-1,10,110,25,40",
json:{
alignment:"center-vertically",
cssPosition:{
bottom:"10",
height:"40",
left:"110",
right:"-1",
top:"-1",
width:"25"
},
faclass:"fa fa-user-shield text-success h4 clickable",
onActionMethodID:"313704AB-9377-4BC7-BDE9-DD9A017E29C7",
size:{
height:25,
width:25
}
},
name:"iconNewRole",
size:"25,25",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"026C8F89-8450-42E6-88C9-A1D877F936E1"
},
{
cssPosition:"-1,-1,10,28,115,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"28",
right:"-1",
top:"-1",
width:"115"
},
onActionMethodID:"313704AB-9377-4BC7-BDE9-DD9A017E29C7",
styleClass:"text-success clickable text-center-vertical",
text:"NEW ROLE"
},
name:"btnNewRole",
styleClass:"text-success clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"0B98E168-8738-46E3-B869-313FF0C84596"
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
styleClass:"padding-left-10 border-bottom text-primary border-primary h2",
text:"Roles"
},
name:"labelTitle",
styleClass:"padding-left-10 border-bottom text-primary border-primary h2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"1F290062-0A38-4818-9041-93A652AE2F78"
},
{
cssPosition:"-1,-1,10,278,25,40",
json:{
alignment:"center-vertically",
cssPosition:{
bottom:"10",
height:"40",
left:"278",
right:"-1",
top:"-1",
width:"25"
},
faclass:"fa fa-user-shield text-danger h4 clickable",
onActionMethodID:"0818F08B-71A3-40D8-A97C-D4FC572771DD",
size:{
height:25,
width:25
}
},
name:"iconDeleteRole",
size:"25,25",
typeName:"servoyextra-fontawesome",
typeid:47,
uuid:"2BCA5B43-AE9C-406C-8FC1-AC182D20759A"
},
{
cssPosition:"-1,-1,10,170,134,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"170",
right:"-1",
top:"-1",
width:"134"
},
onActionMethodID:"0818F08B-71A3-40D8-A97C-D4FC572771DD",
styleClass:"text-danger clickable text-center-vertical",
text:"REMOVE ROLE"
},
name:"btnDeleteRole",
styleClass:"text-danger clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"82AF4795-A9BF-46F8-8DBC-503FC87328DC"
},
{
cssPosition:"50,0,60,0,0,50",
json:{
columns:[
{
dataprovider:"display_name",
filterType:"TEXT",
svyUUID:"15A31721-A9AA-49CE-87C4-12471BAA74B1"
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
floatingFiltersHeight:"40",
headerHeight:"10"
},
responsiveHeight:0,
rowHeight:35,
styleClass:"ag-theme-servoy no-border",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"782DB89C-BB22-4217-9AE5-D8D0D4A34F90"
}
},
name:"table",
styleClass:"ag-theme-servoy no-border",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"9E9EB95A-2CE1-4450-B0FC-55338CB427C7"
},
{
cssPosition:"-1,15,15,15,0,35",
json:{
cssPosition:{
bottom:"15",
height:"35",
left:"15",
right:"15",
top:"-1",
width:"0"
},
dataProviderID:"newRoleName",
onActionMethodID:"D6B95B92-351E-4F51-AA89-AB79D6B99754",
onDataChangeMethodID:"D7A22947-5F39-4B4E-9CCD-4034706A3F9A",
placeholderText:"Role Name...",
visible:false
},
name:"fldNewRole",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"C887D41A-C961-4DCC-AF16-E3C40E7A5DAE",
visible:false
},
{
height:200,
partType:5,
typeid:19,
uuid:"F92C7689-81E3-491F-9677-E649F92A11AB"
}
],
name:"svySecurityUXRoles",
navigatorID:"-1",
onRecordSelectionMethodID:"4FE15ED6-28AD-40DE-9CDD-63C5ED8D6310",
onShowMethodID:"1F50744B-2663-4CE4-97CD-D72738894D7B",
showInMenu:true,
size:"408,200",
typeid:3,
uuid:"EACB5889-DCE1-448D-95F5-B57A30818A85"