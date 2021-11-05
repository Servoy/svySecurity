// TODO extend svyNavigationUX$NavbarMobile instead

/**
 * @properties={typeid:35,uuid:"32F53266-465C-405C-9017-E0525ADBAF32",variableType:-4}
 */
var NAVBAR_ACTIONS = {
	HOME: "svySecurityConsoleUXHome",
	TENANTS: "svySecurityConsoleUXTenants"
}
/**
 * @properties={typeid:35,uuid:"D22850E8-8C13-4E74-93AF-F7F3800C1DEC",variableType:-4}
 */
var DEFAULT_NAVBAR_ACTIONS = {
//	SEARCH: "navbar-search",
	USER: "navbar-user",
	LOGOUT: "navbar-logout"
}


/**
 * @properties={typeid:24,uuid:"F9EADE70-9408-45B1-AEE1-12B5081C94D2"}
 * @override
 */
function initNavigationForm() {

	// init the navbar menu
	var navbarItems = loadNavbarItems();
	elements.navbar.setMenuItems(navbarItems);
}


/**
 * @properties={typeid:24,uuid:"890E6963-75BB-4CE4-AD32-542BB7E67CDA"}
 */
function loadNavbarItems() {
	var menuItems = [];
	var menuItem;

	if (security.getUserName()) {
		menuItem = elements.navbar.createMenuItem(security.getUserName(), DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.displayType = 'MENU_ITEM';
		menuItem.iconName = 'fa fa-user';
		menuItem.styleClass = 'no-border';
		var submenuItems = [];
		
		submenuItems.push(elements.navbar.createMenuItem('Home',NAVBAR_ACTIONS.HOME));
		submenuItems.push(elements.navbar.createMenuItem('Tenants',NAVBAR_ACTIONS.TENANTS));
		submenuItems.push(elements.navbar.createMenuItem('Logout', DEFAULT_NAVBAR_ACTIONS.LOGOUT));
		
		menuItem.subMenuItems = submenuItems;
		menuItems.push(menuItem);
	}

	return menuItems;
}


/**
 * @properties={typeid:24,uuid:"F73C19E7-122D-458F-9A22-24C4E4CA48A9"}
 * @override
 */
function getActiveFormName() {
	if (elements.formcontainer && elements.formcontainer.containedForm) {
		return elements.formcontainer.containedForm;
	} else {
		return null;
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"322A2455-A896-4F27-8AE6-8E515AB89C04"}
 * @override
 */
function onOpen(event) {

	/** @type {scopes.svyNavigation.NavigationItem} */
	var item = event.getNavigationItem();
	var formName = item.getFormName();

	// get the form instance
	var form = forms[formName];
	if (!form) {
		throw new scopes.svyExceptions.IllegalStateException('Cannot navigate to form because cannot find form instance ' + formName);
	}

	// show form
	elements.formcontainer.containedForm = formName;

	//  update the selected menu item for the main menu
	/** @type {String} */
	var menuId = getMenuItemID(item.getFormName());
	if (menuId) {
		elements.navbar.setMenuSelected(menuId);
	} else {
		elements.navbar.setMenuSelected(null);
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param menuItem
 *
 * @properties={typeid:24,uuid:"0C5B4C30-FC66-4819-BD4F-0D1F1BD77F3B"}
 */
function onNavbarMenuItemClickedHandler(event, menuItem) {
	var menuItemId = menuItem.itemId;

	if (onNavbarMenuItemClicked(event, menuItem) === false) {
		return;
	}

	switch (menuItemId) {
	case NAVBAR_ACTIONS.HOME:
	var item = new scopes.svyNavigation.NavigationItem(menuItemId)
	scopes.svyNavigation.open(item);
		break;
	case NAVBAR_ACTIONS.TENANTS:
	var item = new scopes.svyNavigation.NavigationItem(menuItemId)
	scopes.svyNavigation.open(item);
		break;
	case DEFAULT_NAVBAR_ACTIONS.LOGOUT:
		onLogout();
		break;
	default:

		// form to navigate too
		var formName = getMenuItemFormName(menuItemId)
		var form = forms[formName];

		// navigate to a form
		if (form) {
			// TODO will always be a new navigation item !?!?
			var item = new scopes.svyNavigation.NavigationItem(menuItemId, menuItem.text);
			if (scopes.svyNavigation.open(item)) {
				elements.navbar.setMenuSelected(menuItemId);
			}
		} else {
			onNavbarMenuItemClicked(event, menuItem);
		}
		break;
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param menuItem
 *
 * @properties={typeid:24,uuid:"80C8C49B-10A4-447F-8201-C8ABD2D49ED5"}
 */
function onNavbarMenuItemClicked(event, menuItem) {
	// intentionally left empty
	return true;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param searchText
 *
 * @properties={typeid:24,uuid:"731E6626-E5AF-4FB3-8CC2-ACEBA9A9CA9F"}
 */
//function onGlobalSearch(searchText) {
//	scopes.svyNavigationUX.triggerGlobalSearch(searchText);
//}


/**
 * @properties={typeid:24,uuid:"3D4618C8-1DF4-43AB-A55F-119F02CA9DC8"}
 */
function onLogout() {
	// test for svySecurity logout
	if (scopes['svySecurity']) {
		scopes['svySecurity'].logout();
	} else {
		security.logout();
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"15DEFD41-B29C-4C8B-B267-9009955883C2"}
 */
function onShow(firstShow, event) {
	if (firstShow) {
		// set first selection
		if (elements.formcontainer.containedForm) {
			/** @type {String}*/
			var selectedItemID = getMenuItemID(elements.formcontainer.containedForm);
			var selectedItem = elements.navbar.getMenuItem(selectedItemID);
			if (selectedItem) {
				elements.navbar.setMenuSelected(selectedItemID);
			}
		}
	}
}
