/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 * @private
 * @properties={typeid:24,uuid:"50EED977-E37A-4AD7-B42A-0A5F73C3DBC7"}
 */
function createTenant(event, dataTarget) {
	scopes.svySecurityConsoleUX.addNewTenant();

}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event the event that triggered the action
 *@private
 * @properties={typeid:24,uuid:"4412EE02-8E6C-4238-B912-D0E609CD5DA3"}
 */
function createSubTenant(event) {
	if (utils.hasRecords(foundset)) {
		scopes.svySecurityConsoleUX.addNewTenant(foundset.getSelectedRecord(), true);
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event the event that triggered the action
 * @private
 * @properties={typeid:24,uuid:"4DCFB776-3D83-4D4D-B1A4-3AEF91C962AB"}
 */
function cloneTenant(event) {
	if (utils.hasRecords(foundset)) {
		scopes.svySecurityConsoleUX.addNewTenant(foundset.getSelectedRecord(), false);
	}
}
