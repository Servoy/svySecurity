/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9ABAC48F-7A38-4A68-8070-ABD37F3FF08F",variableType:8}
 */
var lockTime = null;



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
 * @properties={typeid:24,uuid:"C5374CFC-5234-423E-8435-FEABC20EF434"}
 */
function setMinutesDeviceLocked(){
	var tenant = foundset.getSelectedRecord().tenant_name;
	scopes.svySecurity.getTenant(tenant).setMinutesDeviceLocked(lockTime);
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
		
	  case 'loginAttempts$containedForm$cardContainer':	
	  case 'loginAttempts$containedForm$cardName':	
	  case 'loginAttempts$containedForm$cardCheckMark':	
		elements.loginAttempts.containedForm.confirmIcon.visible = true;
		elements.loginAttempts.containedForm.cancelIcon.visible = true;
		elements.loginAttempts.containedForm.cardTextbox.visible = true;
		elements.loginAttempts.containedForm.cardCheckMark.visible = false;
		elements.loginAttempts.containedForm.cardTextbox.requestFocus()
	    break;
	  case 'lockMinutes$containedForm$cardContainer':	
	  case 'lockMinutes$containedForm$cardName':
	  case 'lockMinutes$containedForm$cardCheckMark':
		elements.lockMinutes.containedForm.confirmIcon.visible = true;
		elements.lockMinutes.containedForm.cancelIcon.visible = true;
		elements.lockMinutes.containedForm.cardTextbox.visible = true;
		elements.lockMinutes.containedForm.cardCheckMark.visible = false;
		elements.lockMinutes.containedForm.cardTextbox.requestFocus()
	    break;
	  case 'pwdExpirationDays$containedForm$cardContainer':	
	  case 'pwdExpirationDays$containedForm$cardName':	
	  case 'pwdExpirationDays$containedForm$cardCheckMark':
		elements.pwdExpirationDays.containedForm.confirmIcon.visible = true;
		elements.pwdExpirationDays.containedForm.cancelIcon.visible = true;
		elements.pwdExpirationDays.containedForm.cardTextbox.visible = true;
		elements.pwdExpirationDays.containedForm.cardCheckMark.visible = false;
		elements.pwdExpirationDays.containedForm.cardTextbox.requestFocus()
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

	  case 'loginAttempts$containedForm$cancelIcon':
	  case 'loginAttempts$containedForm$confirmIcon':
	  	maxLoginAttempts = null;
	  	elements.loginAttempts.containedForm.confirmIcon.visible = false;
		elements.loginAttempts.containedForm.cancelIcon.visible = false;
		elements.loginAttempts.containedForm.cardTextbox.visible = false;
		elements.loginAttempts.containedForm.cardCheckMark.visible = true;
	    break;
	  case 'lockMinutes$containedForm$cancelIcon':
	  case 'lockMinutes$containedForm$confirmIcon':
	  	lockTime = null;
	  	elements.lockMinutes.containedForm.confirmIcon.visible = false;
		elements.lockMinutes.containedForm.cancelIcon.visible = false;
		elements.lockMinutes.containedForm.cardTextbox.visible = false;
		elements.lockMinutes.containedForm.cardCheckMark.visible = true;
	    break;
	  case 'pwdExpirationDays$containedForm$cancelIcon':
	  case 'pwdExpirationDays$containedForm$confirmIcon':
	  	passwordExpirationDays = null;
	  	elements.pwdExpirationDays.containedForm.confirmIcon.visible = false;
		elements.pwdExpirationDays.containedForm.cancelIcon.visible = false;
		elements.pwdExpirationDays.containedForm.cardTextbox.visible = false;
		elements.pwdExpirationDays.containedForm.cardCheckMark.visible = true;
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

	  case 'loginAttempts$containedForm$confirmIcon':
	  	setMaxLoginAttempts();
	  	checkProperty();
	    break;
	  case 'lockMinutes$containedForm$confirmIcon':
	  	setMinutesDeviceLocked();
	  	checkProperty();
	    break;    
	  case 'pwdExpirationDays$containedForm$confirmIcon':
	  	setPasswordExpirationDays()
	  	checkProperty();
	    break;
	}
	
	resetFields(selectedElement);
	forms.svySecurityConsoleUXSettingsTenantDisplay.updateDisplay();
}

/**
 * @properties={typeid:24,uuid:"1B173A37-7128-43CB-BE33-0FC85A8D3B8E"}
 */
function checkProperty(){
	var tenant = foundset.getSelectedRecord().tenant_name;
	
	if(scopes.svySecurity.getTenant(tenant).getMaxLoginAttempts()){
		elements.loginAttempts.containedForm.cardCheckMark.imageStyleClass = 'fas fa-check fa-2x fa-lg text-success';
	}else{
		elements.loginAttempts.containedForm.cardCheckMark.imageStyleClass = 'fas fa-times fa-2x fa-lg text-danger';
	}
	
	if(scopes.svySecurity.getTenant(tenant).getPasswordExpirationDays()){
		elements.pwdExpirationDays.containedForm.cardCheckMark.imageStyleClass = 'fas fa-check fa-2x fa-lg text-success';
	}else{
		elements.pwdExpirationDays.containedForm.cardCheckMark.imageStyleClass = 'fas fa-times fa-2x fa-lg text-danger';
	}
	if(scopes.svySecurity.getTenant(tenant).getMinutesDeviceLocked()){
		elements.lockMinutes.containedForm.cardCheckMark.imageStyleClass = 'fas fa-check fa-2x fa-lg text-success';
	}else{
		elements.lockMinutes.containedForm.cardCheckMark.imageStyleClass = 'fas fa-times fa-2x fa-lg text-danger';
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
