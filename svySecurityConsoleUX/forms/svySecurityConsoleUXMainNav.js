
/**
 * Called when the user clicks on the brand logo or text.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"30C6C541-FE4B-4E74-B6DB-2423CE9B7B9F"}
 */
function onBrandClicked(event) {
	elements.mainContainer.containedForm = forms.svySecurityConsoleUXHome;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A78FD51-FB48-4983-B03D-14E979436E01"}
 */
function onLoad(event) {
	var menuItems = [];
	menuItems.push({itemId: '0', text: 'Menu', position: 'RIGHT', subMenuItems:[
	{itemId: 'svySecurityConsoleUXHome', text: 'Home'},
	{itemId: 'svySecurityConsoleUXTenants', text: 'Tenants'},
	{isDivider: true},
	{itemId: 'logout', text: 'Log Out'}]});

	elements.navbar.setMenuItems(menuItems);
}

/**
 * Called whenever a menu item is clicked or a submenu item is selected with the JSEvent and the menuItem object clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-navbar.menuItem>} menuItem
 *
 * @properties={typeid:24,uuid:"7900832A-FF78-40BA-9990-3BAF81471E91"}
 */
function onMenuItemClicked(event, menuItem) {
	switch (menuItem.itemId){
		case 'svySecurityConsoleUXHome': elements.mainContainer.containedForm = menuItem.itemId;
		break;
		case 'svySecurityConsoleUXTenants': elements.mainContainer.containedForm = menuItem.itemId;
		break;
		case 'logout': security.logout();
	}

}
