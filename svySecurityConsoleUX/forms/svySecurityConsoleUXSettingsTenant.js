
/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"23CA4427-FCF1-41A0-B2C8-400DAC20A7A9"}
 */
function onActionBack(event, dataTarget) {
	var item = new scopes.svyNavigation.NavigationItem(scopes.svySecurityUX.SVY_SECURITY_CONSOLE_UX.TENANTS);
	scopes.svyNavigation.open(item);

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"79B5B70F-1935-4EF9-8FFA-975DD7E2FB83"}
 */
function setPasswordExpiration(event) {
	var tenant = foundset.getSelectedRecord().tenant_name;
	scopes.svySecurity.getTenant(tenant).setMaxLoginAttempts(3);
}
