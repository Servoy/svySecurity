/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA3EFD87-EC2C-4A47-B7E3-BD226A5F4AD5"}
 */
var lockTimeSet = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3F6F0B7-6148-41F8-801D-96047B579C6A"}
 */
var displayPwdExpirationDays = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CCB09015-42ED-482D-B5A2-7CD2CA879578"}
 */
var displayMaxLoginAttempts = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C169CAE-1E07-465B-8C2B-6E13377460D1"}
 */
function onShowDisplayProperties(firstShow, event) {
	var tenant = foundset.getSelectedRecord().tenant_name;
	displayMaxLoginAttempts = scopes.svySecurity.getTenant(tenant).getMaxLoginAttempts();
	displayPwdExpirationDays = scopes.svySecurity.getTenant(tenant).getPasswordExpirationDays();
	lockTimeSet = scopes.svySecurity.getTenant(tenant).getMinutesDeviceLocked();
}

/**
 * @properties={typeid:24,uuid:"C6247488-558B-4B1A-9B6B-50299034BA64"}
 */
function updateDisplay(){
	var tenant = foundset.getSelectedRecord().tenant_name;
	displayMaxLoginAttempts = scopes.svySecurity.getTenant(tenant).getMaxLoginAttempts();
	displayPwdExpirationDays = scopes.svySecurity.getTenant(tenant).getPasswordExpirationDays();
	lockTimeSet = scopes.svySecurity.getTenant(tenant).getMinutesDeviceLocked();
	return 1;
}