/**
 * @properties={typeid:35,uuid:"74A4F192-BAA2-482F-82F1-DA4EBF89AB25",variableType:-4}
 */
var NAVBAR_ACTIONS = {
	HOME: "svySecurityUXHome"
}

/**
 * @properties={typeid:24,uuid:"35E41456-7B79-45A6-9BC8-56B4A4F85491"}
 * @override
 * @return
 */
function loadNavbarItems() {
	var menuItems = [];
	var menuItem;
	menuItem = elements.navbar.createMenuItem('Home', NAVBAR_ACTIONS.HOME, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.iconName = 'fa fa-home';
	menuItem.styleClass = 'no-border';
	menuItems.push(menuItem);
	if (security.getUserName()) {
		menuItem = elements.navbar.createMenuItem(security.getUserName(), DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.displayType = 'MENU_ITEM';
		menuItem.iconName = 'fa fa-user';
		menuItem.styleClass = 'no-border';
		var submenuItems = [];

		submenuItems.push(elements.navbar.createMenuItem('Logout', DEFAULT_NAVBAR_ACTIONS.LOGOUT));

		menuItem.subMenuItems = submenuItems;
		menuItems.push(menuItem);
	}

	return menuItems;
}