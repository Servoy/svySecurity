customProperties:"formComponent:false,\
methods:{\
onShowMethodID:{\
arguments:null,\
parameters:null\
}\
},\
useCssPosition:true",
dataSource:"db:/svy_security/tenants",
extendsID:"7DD98CFF-0240-42E0-90E8-782BBF800121",
items:[
{
extendsID:"B9D9662C-AB8D-47D4-B4DA-EB1BB71A3733",
height:900,
typeid:19,
uuid:"05D59C8C-8BB2-4CC5-A66C-2885B1677F3A"
},
{
cssPosition:"679,-1,-1,56,133,20",
labelFor:"fldMasterTenantName",
location:"56,679",
name:"lblMasterTenantName",
size:"133,20",
styleClass:"large",
text:"Sub-tenant of",
transparent:true,
typeid:7,
uuid:"066ECE98-7C17-4CB1-94EC-19DF0CF1B92F"
},
{
cssPosition:"40,-1,-1,60,40,40",
location:"60,40",
name:"btnShowTenantsList",
onActionMethodID:"3DEEB6F0-353F-4B6E-9DBD-D33C65296E00",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"40,40",
styleClass:"font-icon large transition-medium",
text:"<span class=\"fa fa-list\"/>",
toolTipText:"Show tenants list",
transparent:true,
typeid:7,
uuid:"101D6D08-1914-4574-BB37-4CFB006748D1"
},
{
cssPosition:"326,-1,-1,15,770,250",
json:{
cssPosition:{
bottom:"-1",
height:"250",
left:"15",
right:"-1",
top:"326",
width:"770"
},
location:{
x:15,
y:326
},
size:{
height:250,
width:770
},
type:"bar"
},
location:"15,326",
name:"chart",
size:"770,250",
typeName:"svychartjs-chart",
typeid:47,
uuid:"17D30CC6-8327-4A3E-9A4D-921248A4AA13"
},
{
cssPosition:"638,-1,-1,194,445,30",
dataProviderID:"display_name",
editable:false,
location:"194,638",
name:"fldDisplayName",
size:"445,30",
typeid:4,
uuid:"2D96E7D8-2A5B-498B-AA1E-085B4BF5D229"
},
{
cssPosition:"720,-1,-1,194,445,26",
displaysTags:true,
location:"194,720",
name:"lblCreationInfo",
size:"445,26",
text:"Created on  <b>%%creation_datetime%%<\/b>  by  <b>%%creation_user_name%%<\/b>",
typeid:7,
uuid:"34E95B6B-3B66-4AB1-92EA-2FB31AF084A6"
},
{
anchors:3,
cssPosition:"90,310,-1,-1,122,40",
formIndex:1,
location:"368,90",
name:"btnDelete",
onActionMethodID:"27239A8F-2183-4640-A17B-889F6934739C",
rolloverCursor:12,
showFocus:false,
size:"122,40",
styleClass:"flat-button transition-medium",
text:"Delete Tenant",
typeid:7,
uuid:"3B73A6C3-AF11-4AA4-B357-0DCF9F64ABD2"
},
{
anchors:9,
cssPosition:"180,-1,-1,540,200,120",
dataProviderID:"m_TotalSessionsCount",
groupID:"kpi_button2",
location:"540,180",
name:"lblTotalSessions",
onActionMethodID:"2560E870-E4FB-469D-B7AA-222295D6CADB",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"200,120",
styleClass:"flat-button transition-medium large",
text:"Total Sessions",
typeid:7,
uuid:"4B64A149-18C0-424B-94B0-7B05F07835FB"
},
{
cssPosition:"749,-1,-1,194,445,26",
dataProviderID:"m_LockStausText",
location:"194,749",
name:"lblLockInfo",
size:"445,26",
typeid:7,
uuid:"5511CA78-9428-4FCF-8EAF-CC3ACFC79989"
},
{
cssPosition:"643,-1,-1,56,133,20",
labelFor:"fldDisplayName",
location:"56,643",
name:"lblDisplayName",
size:"133,20",
text:"Tenant Display Name",
transparent:true,
typeid:7,
uuid:"56C777A4-3B04-471D-A2DD-4EF59ED5C276"
},
{
cssPosition:"674,-1,-1,194,445,30",
dataProviderID:"master_tenant_name",
editable:false,
location:"194,674",
name:"fldMasterTenantName",
size:"445,30",
text:"Name",
typeid:4,
uuid:"8B525409-1BD2-4DB4-9BC1-4C6E59872945"
},
{
anchors:9,
cssPosition:"270,-1,-1,540,200,30",
groupID:"kpi_button2",
location:"540,270",
name:"lblTotalSessionsText",
onActionMethodID:"2560E870-E4FB-469D-B7AA-222295D6CADB",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"200,30",
styleClass:"small-label",
text:"Total Sessions",
transparent:true,
typeid:7,
uuid:"961A0FB2-9597-437B-8820-A9E1C60C48F5"
},
{
cssPosition:"607,-1,-1,56,133,20",
labelFor:"fldName",
location:"56,607",
name:"lblName",
size:"133,20",
styleClass:"large",
text:"Tenant Account Name",
transparent:true,
typeid:7,
uuid:"AA9AC1CA-E950-4615-8114-3883E8835C68"
},
{
anchors:9,
cssPosition:"270,-1,-1,60,200,30",
formIndex:1,
groupID:"kpi_button",
location:"60,270",
name:"lblUsersCountText",
onActionMethodID:"FB4518E9-51FE-42DA-95F9-CB1A52963192",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"200,30",
styleClass:"small-label",
text:"Tenant Users",
transparent:true,
typeid:7,
uuid:"AB402498-05A0-4F8B-A65D-212832252318"
},
{
anchors:3,
cssPosition:"90,558,-1,-1,120,40",
formIndex:3,
location:"122,90",
name:"btnViewRoles",
onActionMethodID:"EBB65C46-D9C9-4614-82C3-149B99DF2ADE",
rolloverCursor:12,
showFocus:false,
size:"120,40",
styleClass:"flat-button transition-medium",
text:"View Roles",
typeid:7,
uuid:"AB51AA12-1EF3-4479-AE55-8683FDB726B4"
},
{
anchors:9,
cssPosition:"180,-1,-1,300,200,120",
dataProviderID:"m_ActiveSessionsCount",
groupID:"kpi_button1",
location:"300,180",
name:"lblActiveSessions",
onActionMethodID:"22A2B524-FEE2-4E80-85D4-B3079783396A",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"200,120",
styleClass:"flat-button transition-medium large",
text:"Active Sessions",
typeid:7,
uuid:"B1AE4D5E-8CA1-421F-A128-E28509986307"
},
{
anchors:11,
cssPosition:"90,0,-1,0,800,42",
formIndex:-5,
location:"0,90",
name:"lblToolbar",
size:"800,42",
styleClass:"toolbar",
text:"label",
typeid:7,
uuid:"BE286A54-1EF9-4FFD-B54E-5C97C0D14FD6"
},
{
cssPosition:"638,-1,-1,654,30,30",
location:"654,638",
name:"btnEditDisplayName",
onActionMethodID:"C8A67467-349D-456B-B51C-E1EA0DE8E8D1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon large transition-medium",
text:"<span class=\"fas fa-pencil-alt\"/>",
transparent:true,
typeid:7,
uuid:"C6719CCD-128E-4A81-B41E-586D0E553508"
},
{
anchors:9,
cssPosition:"180,-1,-1,60,200,120",
dataProviderID:"m_TenantUserCount",
groupID:"kpi_button",
location:"60,180",
name:"lblUsersCount",
onActionMethodID:"FB4518E9-51FE-42DA-95F9-CB1A52963192",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"200,120",
styleClass:"flat-button transition-medium large",
text:"Users Count",
typeid:7,
uuid:"C8E6269F-3258-43C4-89C3-63E4489D8151"
},
{
anchors:9,
cssPosition:"270,-1,-1,300,200,30",
groupID:"kpi_button1",
location:"300,270",
name:"lblActiveSessionsText",
onActionMethodID:"22A2B524-FEE2-4E80-85D4-B3079783396A",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"200,30",
styleClass:"small-label",
text:"Active Sessions",
transparent:true,
typeid:7,
uuid:"CB7DAE5F-4B7C-4123-881F-634F931CD68B"
},
{
anchors:3,
cssPosition:"90,434,-1,-1,122,40",
formIndex:2,
location:"244,90",
name:"btnLock",
onActionMethodID:"E12D8A07-584B-485B-B5D7-95F10378B2BF",
rolloverCursor:12,
showFocus:false,
size:"122,40",
styleClass:"flat-button transition-medium",
text:"Lock Tenant",
typeid:7,
uuid:"D2A45E55-3E11-4416-9500-3D42F37C6C11"
},
{
cssPosition:"90,-1,-1,510,282,40",
displaysTags:true,
horizontalAlignment:4,
location:"510,90",
mediaOptions:14,
name:"btnRefreshKpi",
onActionMethodID:"AFB24584-4F66-4C11-9167-75D9DD840A95",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"282,40",
styleClass:"left font-icon small",
text:"Information as of  <b>%%m_LastRefreshDate%%<\/b> <span class=\"fa fa-refresh\"/>",
transparent:true,
typeid:7,
uuid:"DE1A9C51-ADA6-4802-8554-A010E4F7488E"
},
{
anchors:3,
cssPosition:"90,679,-1,-1,120,40",
formIndex:4,
location:"1,90",
name:"btnCreateUser",
onActionMethodID:"9CB0887B-BE71-4DEC-81EB-5AC4F3A7DD30",
rolloverCursor:12,
showFocus:false,
size:"120,40",
styleClass:"flat-button transition-medium",
text:"Create New User",
typeid:7,
uuid:"E3F4FEB0-7726-4F22-9788-8E42E36996E8"
},
{
cssPosition:"724,-1,-1,56,133,20",
labelFor:"",
location:"56,724",
name:"lblStatus",
size:"133,20",
text:"Account Status",
transparent:true,
typeid:7,
uuid:"E8FE06EA-92AD-4FAD-A69F-F06A52F743CE"
},
{
cssPosition:"602,-1,-1,194,445,30",
dataProviderID:"tenant_name",
editable:false,
location:"194,602",
name:"fldName",
size:"445,30",
text:"Name",
typeid:4,
uuid:"F190E1C1-65B3-4684-8D24-EF5A2EB8A048"
},
{
cssPosition:"778,-1,-1,194,445,26",
dataProviderID:"m_LockReasonText",
location:"194,778",
name:"lblLockReason",
size:"445,26",
typeid:7,
uuid:"FBB53758-002D-4F7B-86B2-0550BA464CD7"
}
],
name:"tenantDetail",
onShowMethodID:"F376E047-C59D-47E0-8C6D-E3BEB05C62A8",
typeid:3,
uuid:"AB948CDD-A433-435A-887A-4A91DDAAD6B7"