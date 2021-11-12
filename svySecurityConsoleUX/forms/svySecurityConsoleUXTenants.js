/**
 * @properties={typeid:24,uuid:"46F848EA-EC7E-4DD3-9189-9FC4FB305B7A"}
 */
function selectedTenant(){
	return scopes.svySecurityUX.selectedTenant = foundset.tenant_name;
}
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

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"11DD8978-AA54-4159-9D31-F30871F2329A"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	selectedTenant();
	var item = new scopes.svyNavigation.NavigationItem(scopes.svySecurityUX.SVY_SECURITY_UX.TENANT);
	scopes.svyNavigation.open(item);
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"0D66AB2F-F838-47BD-9094-47D9D9E4FE2B"}
 */
function onActionBack(event, dataTarget) {
	var item = new scopes.svyNavigation.NavigationItem(scopes.svySecurityConsoleUX.SVY_SECURITY_CONSOLE_UX.HOME);
	scopes.svyNavigation.open(item);

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @private 
 * @properties={typeid:24,uuid:"45CBA536-1044-4A20-8A80-637189DF43D8"}
 */
function onActionDelete(event) {
    if (!tenant_name) {
        return;
    }
    var tenant = scopes.svySecurity.getTenant(tenant_name);
    if (!tenant) {
        return;
    }
    var btnDelete = 'Delete';
    var btnCancel = 'Cancel';
    var res = plugins.dialogs.showWarningDialog('Confirm Delete', utils.stringFormat('You are about to delete the account for tenant <b>"%1$s"</b> and all users associated with it.<br>There is no undo for this operation.<br>Do you want to continue?', [tenant_name]), btnCancel, btnDelete);
    if (res == btnDelete) {
        res = scopes.svySecurity.deleteTenant(tenant);
        if (res) {
        	plugins.dialogs.showInfoDialog('Delete Successful', 'The tenant has been deleted.');
        } else {
            plugins.dialogs.showWarningDialog('Delete Not Successful', 'Could not delete tenant.');
        }
    }
}
