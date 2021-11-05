
/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"A588F60D-9BEC-4845-880A-FE719A0DEC5F"}
 */
function onActionManageTenants(event, dataTarget) {
	var item = new scopes.svyNavigation.NavigationItem('svySecurityConsoleUXMainTenants');
	scopes.svyNavigation.open(item);
}
