customProperties:"formComponent:false",
dataSource:"db:/svy_security/sessions",
extendsID:"EAE3DC77-8EEA-41E2-8564-F52829D98C82",
items:[
{
customProperties:"",
extendsID:"904AF726-ED01-443E-A94B-4F28A5F4D28D",
json:{
anchors:0,
columns:[
{
dataprovider:"tenant_name",
headerText:"Tenant",
svyUUID:"D27DA0AB-C8D9-4731-881C-15647B96BEDC"
},
{
dataprovider:"user_name",
headerText:"User",
svyUUID:"140E2E6D-F164-4A17-9495-FB1087E66BFD"
},
{
dataprovider:"ip_address",
headerText:"IP Address",
svyUUID:"9214663A-1FF1-45D1-AC0E-4ECEE9DCBC2C"
},
{
dataprovider:"session_start",
format:"yyyy-MM-dd HH:mm",
headerText:"Start",
svyUUID:"13C72F2F-D782-4E9C-8755-F08E46D3DCB3"
},
{
dataprovider:"session_end",
format:"yyyy-MM-dd HH:mm",
headerText:"End",
svyUUID:"F2623B8B-4382-4532-AA98-39058F0BFFD4"
},
{
dataprovider:"duration_text",
headerText:"Duration",
svyUUID:"6324D9B0-A03B-48C3-AB32-F32D9722A90E"
}
],
foundset:{
foundsetSelector:""
},
performanceSettings:{
svyUUID:"B4FB01F8-BDB9-4ED5-89BB-C47F691072BD"
}
},
typeid:47,
uuid:"0E399FAD-0DCF-4CAA-A400-40F7229FB9E9"
},
{
location:"60,40",
name:"btnShowParentScreen",
onActionMethodID:"25616BFD-CD29-4F48-8F04-109A19DE86CB",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"40,40",
styleClass:"font-icon large transition-medium",
text:"<span class=\"fa fa-shield\"/>",
toolTipText:"Show tenant",
transparent:true,
typeid:7,
uuid:"CD9A3EA8-52C2-41FF-9038-078CAB341992"
}
],
name:"sessionsList",
titleText:"Sessions List",
typeid:3,
uuid:"C0499D51-0B91-41AC-A2B4-930C29859206"