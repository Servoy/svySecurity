/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D8EC45E-9A77-4767-8D33-A021F7E05914",variableType:8}
 */
var maxLoginAttempts = null;

/**
 * @type {Number}
 * @properties={typeid:35,uuid:"E0268E9F-9B14-4A97-AE67-660FD5343316",variableType:8}
 */
var passwordExpirationDays = null;


/**
 * @properties={typeid:35,uuid:"F5A6D012-090A-4232-B9EB-ED8D88617DC3",variableType:-4}
 */
var target = null;
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
 * @properties={typeid:24,uuid:"A88EF7F9-028D-48FE-A42D-DCE5744DAE3B"}
 */
function setMaxLoginAttempts() {
	var tenant = foundset.getSelectedRecord().tenant_name;
	scopes.svySecurity.getTenant(tenant).setMaxLoginAttempts(maxLoginAttempts);
}

/**
 * @properties={typeid:24,uuid:"7B4B9CB5-0923-4AE4-B477-460C47E969A1"}
 */
function setPasswordExpirationDays(){
	var tenant = foundset.getSelectedRecord().tenant_name;
	scopes.svySecurity.getTenant(tenant).setPasswordExpirationDays(passwordExpirationDays);
}



/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"7897162A-5FC8-4BC3-8A38-EE2E2748B9DF"}
 */
function selectedItem(event, dataTarget) {
	var selectedElement = event.getElementName();
	switch(selectedElement) {
	  case 'lblAttempts':
		elements.tbMaxLoginAttempts.visible = true;
		elements.iconConfirme.visible = true;
		elements.iconCancel.visible = true;
		elements.lblAttempts.visible = false;
	    break;
	  case 'lblpwdExpirationDays':
		elements.tbpwdExpirationDays.visible = true;
		elements.confirmPwdExpirationDates.visible = true;
		elements.cancelPwdExpirationDates.visible = true;
		elements.lblpwdExpirationDays.visible = false;
	    break;
	}
	
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"08AD7639-4BDD-488E-88C5-3651181B9B61"}
 */
function cancel(event, dataTarget) {
	var selectedElement = event.getElementName();
	resetFields(selectedElement);

}

/**
 * @param selectedElement
 * @properties={typeid:24,uuid:"FF4DD64C-154D-4F92-AAE1-507AA15C960F"}
 */
function resetFields(selectedElement) {
	
	switch(selectedElement) {
	  case 'iconCancel':
	  case 'iconConfirme':
	    maxLoginAttempts = null;
		elements.tbMaxLoginAttempts.visible = false;
		elements.iconConfirme.visible = false;
		elements.iconCancel.visible = false;
		elements.lblAttempts.visible = true;
	    break;
	  case 'cancelPwdExpirationDates':
	  case 'confirmPwdExpirationDates':
	  	passwordExpirationDays = null;
		elements.tbpwdExpirationDays.visible = false;
		elements.confirmPwdExpirationDates.visible = false;
		elements.cancelPwdExpirationDates.visible = false;
		elements.lblpwdExpirationDays.visible = true;
	    break;
	}

}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"E8991BEC-2341-4910-8405-5BDF67A5F4BB"}
 */
function save(event, dataTarget) {
	var selectedElement = event.getElementName();
	switch(selectedElement) {
	  case 'iconConfirme':
	  	setMaxLoginAttempts();
	  	 checkProperty();
	    break;
	  case 'confirmPwdExpirationDates':
	  	setPasswordExpirationDays();
	  	checkProperty();
	    break;
	}

	resetFields(selectedElement);

}

/**
 * @properties={typeid:24,uuid:"1B173A37-7128-43CB-BE33-0FC85A8D3B8E"}
 */
function checkProperty(){
	var tenant = foundset.getSelectedRecord().tenant_name;
	
	if(scopes.svySecurity.getTenant(tenant).getMaxLoginAttempts()){
		elements.checkAttempts.visible = true;
	  	elements.xAttempts.visible = false;
	}else{
		elements.checkAttempts.visible = false;
	  	elements.xAttempts.visible = true;
	}
	
	if(scopes.svySecurity.getTenant(tenant).getPasswordExpirationDays()){
		elements.checkPwdExpDays.visible = true;
	  	elements.xPwdExpDays.visible = false;
	}else{
		elements.checkPwdExpDays.visible = false;
	  	elements.xPwdExpDays.visible = true;
	}
	
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"157C6765-1CE1-4EE7-A908-B81F9DE08F56"}
 */
function onShow(firstShow, event) {
	checkProperty();
}
