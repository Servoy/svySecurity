customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/users",
encapsulation:60,
items:[
{
cssPosition:"-1,30,10,-1,150,40",
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"-1",
right:"30",
top:"-1",
width:"150"
},
onActionMethodID:"741696D2-C10F-43F0-AF6E-ABB9C89AD253",
styleClass:"text-tertiary clickable text-center-vertical",
text:"MANAGE USERS"
},
name:"btnNewRole",
styleClass:"text-tertiary clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"2BC7ACA7-B3DD-4CB9-AB73-2627E5087D8B"
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
styleClass:"padding-left-10  text-primary border-primary h2",
text:"Users"
},
name:"labelTitle",
styleClass:"padding-left-10  text-primary border-primary h2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"43CB78FF-5843-49F5-B10F-822D1B9BCF20"
},
{
cssPosition:"50,0,60,0,0,50",
json:{
columns:[
{
columnDef:{
floatingFilter:"true"
},
dataprovider:"user_name",
filterType:"TEXT",
svyUUID:"2FD29696-090D-4A72-887B-7A763EBC27C9"
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
svyUUID:"62033D16-AAAE-47B4-9771-6D768F03A9E3"
}
},
name:"table",
styleClass:"ag-theme-servoy no-border",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"505EFAD5-74B0-4D67-9B75-6465B3C70AD2"
},
{
height:200,
partType:5,
typeid:19,
uuid:"5D36AB49-C441-4F3E-A4EC-1E8151944664"
},
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
onActionMethodID:"741696D2-C10F-43F0-AF6E-ABB9C89AD253",
size:{
height:25,
width:25
}
},
name:"iconNewRole",
size:"25,25",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7B3256C8-D72F-451A-852A-A74C3844DDC2"
}
],
name:"svySecurityUXTenantUsers",
navigatorID:"-1",
showInMenu:true,
size:"293,200",
typeid:3,
uuid:"35525A32-CBFD-4163-91E7-10919F6D172D"