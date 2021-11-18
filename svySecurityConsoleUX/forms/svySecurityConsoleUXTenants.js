/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B31D85C3-2CBE-40EE-927A-E193E35E862F"}
 */
var labelAction = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B8CB37B-C12E-4D35-ACDC-8928CE0DCEDD"}
 */
var name = null;

/**
 * @properties={typeid:35,uuid:"D4D9C299-E596-49DC-BAE1-22CB4D17DD23",variableType:-4}
 */
var target = null;
/**
 * @param {JSRecord<db:/svy_security/tenants>} [recordMaster]
 * @param {Boolean} [makeSubTenant]
 * @public
 *
 * @properties={typeid:24,uuid:"004C04AF-B84A-42A6-84E9-43059185FC12"}
 */
function addNewTenant(recordMaster, makeSubTenant) {
	if (!name) {
		return;
	}
	if (scopes.svySecurity.getTenant(name)) {
		plugins.dialogs.showErrorDialog('Could Not Create Tenant', utils.stringFormat('The specified tenant name "%1$s" is already in use.', [name]));
		return;
	}
	var tenant;
	if (recordMaster) {
		var masterTenant = scopes.svySecurity.getTenant(recordMaster.tenant_name);
		tenant = scopes.svySecurity.cloneTenant(masterTenant, name, makeSubTenant ? true : false);
	} else {
		tenant = scopes.svySecurity.createTenant(name);
	}
	if (!tenant) {
		plugins.dialogs.showErrorDialog('Could not create tenant', 'There was an unknown error. Please check server logs.');
		return;
	}

}

/**
 * @return
 * @properties={typeid:24,uuid:"46F848EA-EC7E-4DD3-9189-9FC4FB305B7A"}
 */
function selectedTenant() {
	return scopes.svySecurityUX.selectedTenant = foundset.tenant_name;
}
/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 * @private
 * @properties={typeid:24,uuid:"50EED977-E37A-4AD7-B42A-0A5F73C3DBC7"}
 */
function createTenant(event, dataTarget) {
	showHideElements();
	target = 'new';
	labelAction = 'Tenant Name';
}

/**
 * @param {JSEvent} event the event that triggered the action
 *@private
 * @properties={typeid:24,uuid:"4412EE02-8E6C-4238-B912-D0E609CD5DA3"}
 */
function createSubTenant(event) {
	showHideElements();
	target = 'sub';
	labelAction = 'SubTenant Name';
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @private
 * @properties={typeid:24,uuid:"4DCFB776-3D83-4D4D-B1A4-3AEF91C962AB"}
 */
function cloneTenant(event) {
	labelAction = 'Clone Name';
	showHideElements();
	target = 'clone';

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
			plugins.webnotificationsToastr.success('Delete Successful', 'The tenant has been deleted.');

		} else {
			plugins.dialogs.showWarningDialog('Delete Not Successful', 'Could not delete tenant.');
		}
	}
}

/**
 * @properties={typeid:24,uuid:"DC8B783D-D468-4B20-86FE-C2154678BD3D"}
 */
function showHideElements() {
	elements.labelAction.visible = true;
	elements.name.visible = true;
	elements.iconConfirme.visible = true;
	elements.iconCancel.visible = true;

	elements.newTenant.visible = false;
	elements.cloneTenant.visible = false;
	elements.subTenant.visible = false;
	elements.deleteTenant.visible = false;

}
/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"E50A2561-C4AE-47A7-A4BB-C7196D2D0547"}
 */
function onActionSave(event, dataTarget) {
	if (target == 'new') {
		addNewTenant();
	}
	if (target == 'clone') {
		if (utils.hasRecords(foundset)) {
			addNewTenant(foundset.getSelectedRecord(), false);
		}
	}
	if (target == 'sub') {
		if (utils.hasRecords(foundset)) {
			addNewTenant(foundset.getSelectedRecord(), true);
		}
	}

	resetFields();

}

/**
 * @properties={typeid:24,uuid:"8CCC5EF4-6F92-4468-B071-39E2192F9D4A"}
 */
function resetFields() {
	name = null;
	target = null;
	labelAction = null;
	elements.labelAction.visible = false;
	elements.name.visible = false;
	elements.iconConfirme.visible = false;
	elements.iconCancel.visible = false;

	elements.newTenant.visible = true;
	elements.cloneTenant.visible = true;
	elements.subTenant.visible = true;
	elements.deleteTenant.visible = true;
}
/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"837B15B7-4552-40F7-B04C-427E28E84B0F"}
 */
function onActionCancel(event, dataTarget) {
	resetFields();

}
