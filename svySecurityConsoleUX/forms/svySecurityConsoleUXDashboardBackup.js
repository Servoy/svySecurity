/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1082B304-7656-4AE1-946B-997DA7EE731C",variableType:8}
 */
var tenantsCount = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"50A50962-8F33-4FE1-971C-11FBA7BC927A",variableType:4}
 */
var userCount = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44B7AA17-03B3-478C-8AEF-A13177E6005C",variableType:4}
 */
var sessionCount = 0;

/**
 * @private 
 * @properties={typeid:24,uuid:"2E9C0D21-262A-40D2-9E29-6D1050AE6B01"}
 */
function updateTenantCount(){
	var q = datasources.db.svy_security.tenants.createSelect();
	q.result.add(q.columns.tenant_name.count);
	tenantsCount = databaseManager.getDataSetByQuery(q,1).getValue(1,1);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"187F5E39-967A-4ACA-9433-DCBD70902956"}
 */
function updateUserCount(){
	var q = datasources.db.svy_security.users.createSelect();
	q.result.add(q.columns.user_name.count);
	userCount = databaseManager.getDataSetByQuery(q,1).getValue(1,1);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"0825C3AD-BB3F-4C2A-B187-F8EFA131E246"}
 */
function updateSessionCount(){
	var timeout = 30 * 60 * 1000; // 30 minutes
	var expiration = new Date();
	expiration.setTime(expiration.getTime() - timeout);
	var q = datasources.db.svy_security.sessions.createSelect();
	q.result.add(q.columns.id.count);
	q.where
		.add(q.columns.session_end.isNull)
		.add(q.columns.last_client_ping.gt(expiration))
	sessionCount = databaseManager.getDataSetByQuery(q,1).getValue(1,1);
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E8C5BB30-AB72-492D-878D-823697D8B023"}
 */
function onShow(firstShow, event) {
	updateTenantCount();
	updateUserCount();
	updateSessionCount();
	scopes.svySecurityConsoleUX.createChartTenantsWithMostUsers(elements.leftChart);
	scopes.svySecurityConsoleUX.createChartTotalUsageOverTimeMonths(elements.rigthChart);
}
