/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E80FDBD6-F977-4298-B151-4A91B72C3DA5",variableType:8}
 */
var rememberMe = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D7A801D-FBAC-4B1C-836E-DB3CFE9EFF51"}
 */
var password = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3C162248-2093-4FEB-919D-6E01A4ADAEF0"}
 */
var userName = '';

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C6FEC7CD-59ED-47CD-8B07-98CAEB3D2816"}
 */
function onActionSignIn(event) {
	hideError();

	if (!userName) {
		showError('Please, enter username.');
		elements.fldUsername.requestFocus();
		return;
	}

	if (!password) {
		showError('Please, enter password.');
		elements.fldPassword.requestFocus();
		return;
	}

	var userUID = security.getUserUID(userName);
	if (!userUID) {
		// check if there are users within the Security Group
		if (security.getUsers().getMaxRowIndex() < 1) {
			if (application.isInDeveloper()) {
				plugins.dialogs.showWarningDialog("User register is empty", "Cannot login because there are no Users registered in the Resource project. You must create at least one User within the Administrators security group.");
				showError('User registry is empty, check the <b>User and group Security</b> under the <b>Resources</b> node.');
				application.showURL("https://wiki.servoy.com/display/DOCS/Defining+User+and+Group+Security", "_blank");
			} else {
				showError('User registry is empty, please contact the site administrator.');
			}
		} else {
			
			// User doesn't exists
			showError('Please, check the username and password and try again.');
		}
		elements.fldUsername.requestFocus();
		return;
	}

	var ok = security.checkPassword(userUID, password);
	if (!ok) {
		showError('Please, check the username and password and try again.');
		elements.fldUsername.requestFocus();
		return;
	}

	ok = security.hasPermission('Administrators', userUID);
	if (!ok) {
		password = null;
		showError('The specified user does not have permission to access the application.');
		elements.fldUsername.requestFocus();
		return;
	}

	if (rememberMe) {
		//TODO: fix remember me
		scopes.svySecurityConsoleUXHelper.setLoginCookie(userName);
	}else{
		scopes.svySecurityConsoleUXHelper.clearLoginCookie();
		}

	security.login(userName, userUID, ['Administrators']);
}

/**
 *
 * @param {String} msg
 *
 * @properties={typeid:24,uuid:"058B2B27-8EAF-4634-A810-451099931EA5"}
 */
function showError(msg) {
	elements.errorMsg.text = msg;
	elements.errorMsg.visible = true;
}

/**
 * @properties={typeid:24,uuid:"EF51649F-BC20-45DB-BB2C-E8292508EC3A"}
 */
function hideError() {
	elements.errorMsg.text = '';
	elements.errorMsg.visible = false;
}

/**
 *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"AE3027A9-000C-4826-90AB-E264B097BD96"}
 */
function onShow(firstShow, event) {
	hideError();
	//TODO FIX ME
	userName = scopes.svySecurityConsoleUXHelper.readLoginCookie();
	rememberMe = userName ? 1 : 0;
	if (userName) {
		elements.fldPassword.requestFocus();
	} else {
		elements.fldUsername.requestFocus();
	}
}

/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"C676D9BA-4FB8-4153-AB46-D5CDF2C68EEC"}
 */
function onActionUsername(event) {
	if (userName) {
		if (password) {
			onActionSignIn(event);
		} else {
			elements.fldPassword.requestFocus();
		}
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C43392EF-04E4-44B5-93C7-B269EBD9C19B"}
 */
function onActionPassword(event) {
	onActionSignIn(event);
}

