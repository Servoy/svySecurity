/*
 * This scope contains helper/utility methods for various tasks.
 */

/**
 * Login cookie name
 *
 * @private
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6002325-FBD4-4126-A7E4-3D8EEAFC871C"}
 */
var LOGIN_COOKIE = 'com.servoy.extensions.security.admin_console.login';

/**
 * @private
 * @param {String} message
 * @param {Number} level - one of the LOGGINGLEVEL constants
 *
 * @properties={typeid:24,uuid:"A86E185F-0CA8-4AF1-8B71-B42AA6870980"}
 */
function log(message, level) {
	//override this to provide custom logging
	application.output('[source: svySecurityConsole] ' + message, level);
}

/**
 * @public
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"BF6DD862-75A9-44F0-AE18-EB0DF503CB12"}
 */
function logDebug(message) {
	log(message, LOGGINGLEVEL.DEBUG);
}

/**
 * @public
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"10A5E1AC-D811-4791-A572-9A168C8859E5"}
 */
function logInfo(message) {
	log(message, LOGGINGLEVEL.INFO);
}

/**
 * @public
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"4AAB18B6-E456-495A-8EB4-B12759C6D2C1"}
 */
function logWarning(message) {
	log(message, LOGGINGLEVEL.WARNING);
}

/**
 * @public
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"D68FE91E-9544-4815-B12F-3A51007B2FB4"}
 */
function logError(message) {
	log(message, LOGGINGLEVEL.ERROR);
}

/**
 * @public
 * @param {String} context
 * @param {ServoyException|Error} exception
 *
 * @properties={typeid:24,uuid:"1F2F896B-08D3-4E44-8692-EABD4C11ABD1"}
 */
function logException(context, exception) {
	var exceptionText = scopes.svySecurityConsoleUXHelper.getExceptionText(exception);
	var errorInfo = [exceptionText];
	if (exception instanceof ServoyException) {
		/** @type {ServoyException} */
		var servoyException = exception;

		errorInfo.push('');
		errorInfo.push('The error is ServoyException');
		errorInfo.push('Error Code: ' + servoyException.getErrorCode());

		if (servoyException.getStackTrace) {
			errorInfo.push('Stack Trace: ' + servoyException.getStackTrace());
		}

		var failedRecordsErrors = scopes.svySecurityConsoleUXHelper.getFailedRecordsErrors();
		if (failedRecordsErrors) {
			errorInfo.push('');
			errorInfo.push('Additional error information:');
			errorInfo.push(failedRecordsErrors);
		}
	}

	logError(utils.stringFormat('[context: %1$s] %2$s', [context, errorInfo.join('\n')]));
}

/**
 * @public
 * @param {Error|ServoyException|String} exception the error/exception object containing the error text
 * @return {String} the exception error text
 *
 * @properties={typeid:24,uuid:"C324A2FF-5B61-4E8A-BC31-816547D1A21B"}
 */
function getExceptionText(exception) {
	var msg = '';

	if (exception instanceof Error) {
		msg = exception.message;
	} else if (exception instanceof ServoyException) {
		msg = exception.getMessage();
	} else {
		msg = '' + exception;
	}
	return msg;
}

/**
 * This function uses databaseManager.getFailedRecords() to get all failed records and returns
 * the collected errors info
 * @public
 * @return {String} the collected errors from all failed records or null if no errors were found
 *
 * @properties={typeid:24,uuid:"FCBC4349-2B15-4452-A325-A0093A0601CD"}
 */
function getFailedRecordsErrors() {
	var failedRecords = databaseManager.getFailedRecords();
	if (failedRecords && failedRecords.length > 0) {
		var errors = '';
		for (var indx = 0; indx < failedRecords.length; indx++) {
			var rec = failedRecords[indx];
			var tableName = databaseManager.getTable(rec).getSQLName();
			var ex = rec.exception;
			if (!ex) {
				continue;
			}

			var validationError = null;
			if (ex instanceof DataException) {
				/** @type {DataException} */
				var dataEx = ex;
				validationError = dataEx.getValue();
			}

			if (validationError) {
				errors = utils.stringFormat('%1$s - [%2$s] %3$s', [errors, tableName, '' + validationError]);
			} else if (ex.getMessage && ex.getMessage()) {
				errors = utils.stringFormat('%1$s - [%2$s] %3$s', [errors, tableName, ex.getMessage()]);
			} else {
				errors = utils.stringFormat('%1$s - [%2$s] %3$s', [errors, tableName, ex]);
			}
		}
		return errors;
	}
	return null;
}

/**
 * @public
 * @param {Number} duration in milliseconds
 * @return {String}
 *
 * @properties={typeid:24,uuid:"1F4253CC-DD94-4FF6-83F8-75C86E9835FA"}
 */
function convertDurationToStr(duration) {
	//return duration in format like "5h 15m 43s"
	duration = duration || 0;
	var durationHrs = Math.floor(duration / 3600000);
	var durationMin = Math.floor( (duration - (durationHrs * 3600000)) / 60000);
	var durationSec = Math.floor( (duration - (durationHrs * 3600000) - (durationMin * 60000)) / 1000);
	var res = null;
	if (durationSec || (!durationHrs && !durationMin)) {
		res = durationSec + 's';
	}
	if (durationMin || (durationSec && durationHrs)) {
		res = durationMin + 'm' + (res ? ' ' + res : '');
	}
	if (durationHrs) {
		res = durationHrs + 'h' + (res ? ' ' + res : '');
	}
	return res;
}

/**
 * Saves the login settings in the cookie
 * @public
 * @param userName
 *
 * @properties={typeid:24,uuid:"950FF9A2-8790-4E28-AE30-4855A885F9F0"}
 */
function setLoginCookie(userName) {
	application.setUserProperty(LOGIN_COOKIE, JSON.stringify({ userName: userName }));
}

/**
 * Clears the login settings from the cookie
 * @public
 * @properties={typeid:24,uuid:"BCA67D78-2F43-4D22-80AD-400CEED0AE9F"}
 */
function clearLoginCookie() {
	application.setUserProperty(LOGIN_COOKIE, null);
}

/**
 * Loads login settings from cookie
 * @public
 * @return {String}
 * @properties={typeid:24,uuid:"017F9A20-3DC5-48A2-BC6F-67D452FE1D5A"}
 */
function readLoginCookie() {
	var str = application.getUserProperty(LOGIN_COOKIE);
	if (str) {
		try {
			/** @type {{userName:String}} */
			var value = JSON.parse(str);
			return value.userName;
		} catch (e) {
			clearLoginCookie();
		}
	}
	return null;
}
