customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/tenants",
encapsulation:108,
items:[
{
cssPosition:"-1,-1,0,432,171,60",
json:{
containedForm:{
label_1:{
onActionMethodID:"4412EE02-8E6C-4238-B912-D0E609CD5DA3",
text:"Create SubTenanat"
},
manageBtnIcon:{
imageStyleClass:"fas fa-layer-group text-tertiary fa-lg clickable",
onActionMethodID:"4412EE02-8E6C-4238-B912-D0E609CD5DA3"
},
svy_form:"0A55A829-0234-4867-8E20-2285E134B3AC"
},
cssPosition:{
bottom:"0",
height:"60",
left:"432",
right:"-1",
top:"-1",
width:"171"
}
},
name:"formcomponent_3",
typeName:"servoycore-formcomponent",
typeid:47,
uuid:"245E4571-42D8-45F8-835A-D4CC02BF510E"
},
{
cssPosition:"50,0,60,0,200,100",
json:{
columns:[
{
dataprovider:"tenant_name",
headerTitle:"Name",
svyUUID:"4F6B027D-E9CF-4EE9-8A7A-BE4EEB970196"
},
{
dataprovider:"display_name",
headerTitle:"Display Name",
svyUUID:"88A37B22-2823-4193-8943-6205D14D8382"
},
{
dataprovider:"tenants_to_users_ux.userCount",
headerTitle:"Users",
svyUUID:"D8583454-FFB4-45EB-B54E-AAD243802617"
},
{
dataprovider:"master_tenant_name",
headerTitle:"Master",
svyUUID:"39E6CB7E-C7D2-4630-A223-373B92FC0E46"
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
onCellDoubleClick:"11DD8978-AA54-4159-9D31-F30871F2329A",
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"11FE8109-DCFE-4BEE-B548-2612F319C2C2"
}
},
name:"groupingtable_1",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"39785D95-0104-43D5-AF82-3CD613C2043B"
},
{
height:480,
partType:5,
typeid:19,
uuid:"553EABC5-896D-40E2-9BC0-AD866201DEE1"
},
{
cssPosition:"-1,-1,0,231,171,60",
json:{
containedForm:{
label_1:{
onActionMethodID:"4DCFB776-3D83-4D4D-B1A4-3AEF91C962AB",
text:"Clone Tenant"
},
manageBtnIcon:{
imageStyleClass:"fas fa-clone text-tertiary fa-lg clickable",
onActionMethodID:"4DCFB776-3D83-4D4D-B1A4-3AEF91C962AB"
},
svy_form:"0A55A829-0234-4867-8E20-2285E134B3AC"
},
cssPosition:{
bottom:"0",
height:"60",
left:"231",
right:"-1",
top:"-1",
width:"171"
}
},
name:"formcomponent_2",
typeName:"servoycore-formcomponent",
typeid:47,
uuid:"75568C77-D10B-49C9-8A1F-5FF20C77B1B8"
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
name:"label_1",
styleClass:"padding-left-10 text-primary border-primary h2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"850BDED5-85A2-4B0D-A101-157F391F9163"
},
{
cssPosition:"10,10,-1,-1,85,45",
json:{
containedForm:{
BtnText:{
onActionMethodID:"0D66AB2F-F838-47BD-9094-47D9D9E4FE2B"
},
btnIcon:{
onActionMethodID:"0D66AB2F-F838-47BD-9094-47D9D9E4FE2B"
},
svy_form:"2C08C73F-7A94-4E8B-82A7-4CF64F88B355"
},
cssPosition:{
bottom:"-1",
height:"45",
left:"-1",
right:"10",
top:"10",
width:"85"
}
},
name:"formcomponent_5",
typeName:"servoycore-formcomponent",
typeid:47,
uuid:"DEF79F1A-88DD-45F5-8801-CCFE7BB866C0"
},
{
cssPosition:"-1,-1,0,30,171,60",
json:{
containedForm:{
label_1:{
onActionMethodID:"50EED977-E37A-4AD7-B42A-0A5F73C3DBC7",
text:"New Tenant"
},
manageBtnIcon:{
imageStyleClass:"fas fa-plus text-tertiary fa-lg clickable",
onActionMethodID:"50EED977-E37A-4AD7-B42A-0A5F73C3DBC7"
},
svy_form:"0A55A829-0234-4867-8E20-2285E134B3AC"
},
cssPosition:{
bottom:"0",
height:"60",
left:"30",
right:"-1",
top:"-1",
width:"171"
}
},
name:"formcomponent_1",
typeName:"servoycore-formcomponent",
typeid:47,
uuid:"F18CCE06-92AF-47CB-9455-15D61EADDC08"
}
],
name:"svySecurityConsoleUXTenants",
navigatorID:"-1",
showInMenu:true,
typeid:3,
uuid:"68E20280-4444-412E-B390-DA9065EACF9B"