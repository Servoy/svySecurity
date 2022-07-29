/**
 * @param {JSRecord<db:/svy_security/tenants>} [recordMaster]
 * @param {Boolean} [makeSubTenant]
 * @public
 *
 * @properties={typeid:24,uuid:"B587CEB8-C51B-4160-A588-99FA9203C698"}
 */
function addNewTenant(recordMaster, makeSubTenant) {
    var name = plugins.dialogs.showInputDialog('Add New Tenant', 'Enter a name for the new tenant:');
    if(!name){
        return;
    }
    if(scopes.svySecurity.getTenant(name)){
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
    if(!tenant){
        plugins.dialogs.showErrorDialog('Could not create tenant', 'There was an unknown error. Please check server logs.');
        return;
    }
   // forms.tenantDetail.show(name);
}


/**
 * @param arg
 * @param queryParams
 *
 * @properties={typeid:24,uuid:"A01E9405-D2BE-4531-A35F-0FC61F2CDF0F"}
 */
function onSolutionOpen(arg, queryParams) {
	
	// autosave false
	databaseManager.setAutoSave(false);
	
	// disable null check validation exception
	databaseManager.nullColumnValidatorEnabled = false;

	// global config for grids
	configGrid();

	// reference FA for load
	plugins.fontawesomeLib.load();

}


/**
 * @properties={typeid:24,uuid:"7069624D-F0AB-4757-B6C1-9E3D0F9EA95B"}
 */
function configGrid() {
	// configure grid globally, for common styles

	// set up grid options
	plugins.ngDataGrid.gridOptions = {
		headerHeight: 10,
		rowHeight: 52
	}
	
	// set up default column properties
	plugins.ngDataGrid.columnOptions = {
		menuTabs: ['generalMenuTab']
	}

	// set up tool panel options
	var toolPanelOptions = plugins.ngDataGrid.createToolPanelConfig();
	toolPanelOptions.suppressColumnFilter = true;
	toolPanelOptions.suppressColumnSelectAll = true;
	toolPanelOptions.suppressRowGroups = true;
	plugins.ngDataGrid.toolPanelConfig = toolPanelOptions;

	// set up grid icons
	var icons = plugins.ngDataGrid.createIconConfig();
	icons.iconSortAscending = "fa fa-long-arrow-up";
	icons.iconSortDescending = "fa fa-long-arrow-down";
	icons.iconFilter = "fa fa-filter";

	//	icons.iconCheckboxChecked = "fa fa-check-square-o";
	//	icons.iconCheckboxUnchecked = "fa fa-square-o";
	//	icons.iconCheckboxIndeterminate = "fa fa-minus-square-o";

	plugins.ngDataGrid.iconConfig = icons;
}
