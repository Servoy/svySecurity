/**
 * @properties={type:4,typeid:36,uuid:"B7EE7FD0-1A80-4697-B701-C9EA6737A0AB"}
 */
function userCount()
{
	return scopes.svySecurity.getTenant(tenant_name).getUsers().length;
}
