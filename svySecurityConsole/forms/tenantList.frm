customProperties:"formComponent:false",
dataSource:"db:/svy_security/tenants",
extendsID:"EAE3DC77-8EEA-41E2-8564-F52829D98C82",
items:[
{
extendsID:"B20C04CC-B11B-43A5-86DD-99754C83F78C",
showClick:false,
showFocus:false,
typeid:7,
uuid:"05FE5305-D446-40A1-AAB4-3413872EEA09"
},
{
customProperties:"",
extendsID:"904AF726-ED01-443E-A94B-4F28A5F4D28D",
json:{
anchors:0,
columns:[
{
dataprovider:"tenant_name",
headerText:"Name",
svyUUID:"25C3C4E1-4F73-4667-8AC6-0A9EB146A9AB"
},
{
dataprovider:"display_name",
headerText:"Display Name",
svyUUID:"C3C2AF21-2DB7-4224-AB10-845135CAD802"
},
{
dataprovider:"userCount",
headerText:"Users",
svyUUID:"AC9902B2-F31D-4FDA-B6D6-87D19AB9612E"
}
],
foundset:{
foundsetSelector:""
}
},
typeid:47,
uuid:"977AD6AF-8D39-4EE3-B245-ADD77FDBAC3B"
},
{
anchors:3,
location:"1,90",
name:"btnCreateTenant",
onActionMethodID:"8A300CEF-68CA-4426-8996-A7207FDDA5F9",
rolloverCursor:12,
size:"130,40",
styleClass:"flat-button transition-medium",
text:"Create New Tenant",
typeid:7,
uuid:"A3003031-9BD0-4F9F-93E6-A8A9117762C6"
}
],
name:"tenantList",
typeid:3,
uuid:"3663A90C-4059-432B-90CE-17FF645B4407"