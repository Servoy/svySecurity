/**
 * @properties={typeid:35,uuid:"C8914B56-C545-407C-B50E-B5AD081C7179",variableType:-4}
 */
var SVY_SECURITY_CONSOLE_UX = {
	HOME: 'svySecurityConsoleUXHome'
}


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
 * TODO generated, please specify type and doc for the params
 * @param chart
 *
 * @properties={typeid:24,uuid:"E8012138-0CEC-43CB-87B7-426C120CE093"}
 */
function createChartTenantsWithMostUsers(chart){
    //get top 12 tenants with most users
    var qry = datasources.db.svy_security.users.createSelect();
    qry.result.add(qry.columns.tenant_name,'tenant');
    qry.result.add(qry.columns.user_name.count,'number_of_users');
    qry.groupBy.add(qry.columns.tenant_name);
    qry.sort.add(qry.columns.user_name.count.desc);
    var ds = databaseManager.getDataSetByQuery(qry,12);
    
    var data = {
        type: 'doughnut',
        data: {
            labels: ds.getColumnAsArray(1),
        datasets: [{
            data: ds.getColumnAsArray(2),
           backgroundColor: scopes.svySecurityConsoleUXHelper.getColors(ds.getMaxRowIndex())
            }]
        }
    };
    
    var options = {
//        title: {
//            display: true,
//            text: utils.stringFormat('Top %1$s tenants with most users', [ds.getMaxRowIndex()])
//        },
        legend: {
            display: true,
            position: 'left'
        }
    };
    chart.setData(data);
    chart.setOptions(options);
}




/**
 * TODO generated, please specify type and doc for the params
 * @param chart
 *
 * @properties={typeid:24,uuid:"BCD2323B-804B-4AD9-BD51-28FFD2256987"}
 */
function createChartTotalUsageOverTimeMonths(chart){
    //get total usage by month for the last X months
    var monthsWindow = 6;
    var curDate = application.getServerTimeStamp();
    var cutOffDate = scopes.svyDateUtils.getFirstDayOfMonth(scopes.svyDateUtils.addMonths(curDate, (-1 * (monthsWindow - 1))));
        
    var yearMonths = new Array(monthsWindow); //will contain 20171, 20172,...201712
    var yearMonthsNames = new Array(monthsWindow); //will contain Jan, Feb, Mar....
    for (var index = 0; index < yearMonths.length; index++) {
        var dt = scopes.svyDateUtils.addMonths(cutOffDate, index);
        yearMonths[index] = utils.stringFormat('%1$.0f%2$.0f',[dt.getFullYear(), (dt.getMonth() + 1)]); /*month in JS is 0-11!*/
        yearMonthsNames[index] = utils.dateFormat(dt,'MMM');        
    }
    
    var qry = datasources.db.svy_security.sessions.createSelect();
    var yearMonthCol = qry.columns.session_start.year.cast(QUERY_COLUMN_TYPES.TYPE_STRING).concat(qry.columns.session_start.month.cast(QUERY_COLUMN_TYPES.TYPE_STRING)); 
    
    //select
    qry.result.add(yearMonthCol, 'yyyymm');
    qry.result.add(qry.columns.session_duration.sum.divide(3600000), 'usage_hours'); //session_duration is stored in milliseconds so we need to convert it to hours
    
    //group by
    qry.groupBy.add(yearMonthCol);
    
    //where
    qry.where.add(qry.columns.session_start.gt(cutOffDate));
    
    //sort
    qry.sort.add(yearMonthCol);
        
    var ds = databaseManager.getDataSetByQuery(qry, monthsWindow);
    
    var dsData = databaseManager.createEmptyDataSet();    
    for (index = 0; index < yearMonths.length; index++) {
        dsData.addColumn(yearMonths[index].label, index+1, JSColumn.NUMBER);        
    }
    
    //initialize the dsData with 0's for the value columns
    var rowData = new Array(monthsWindow);
    for (var i = 0; i < monthsWindow; i++){
        rowData[i] = 0;
    }            
    dsData.addRow(rowData);
    
    for (index = 1; index <= ds.getMaxRowIndex(); index++) {        
        var row = ds.getRowAsArray(index);        
        var valueIndx = yearMonths.indexOf(row[0]);
        var value = row[1];
        
        dsData.setValue(1, valueIndx + 1, scopes.svySecurityConsoleUXHelper.roundNumber(value, 2));
    }
    
    var colors = scopes.svySecurityConsoleUXHelper.getColors(6);
    var chartDatasets = [{
            label: 'Total usage by month',
            fill: true,
            data: dsData.getRowAsArray(1),
            borderColor: colors[5],            
            pointBorderColor: colors[5],
            pointBackgroundColor: colors[5],
            pointBorderWidth: 1,
            pointHoverRadius: 3,
            pointHoverBackgroundColor: colors[5],
            pointHoverBorderColor: 'orange',
            pointHoverBorderWidth: 2,
            tension: 0.3
        }];
    
    
    var data = {
        type: 'line',
        data: {
            labels: yearMonthsNames,
            datasets: chartDatasets
        }
    };
    
    var options = {
//        title: {
//            display: true,
//            text: utils.stringFormat('Total usage for last %1$.0f months', [monthsWindow])
//        },
        legend: {
            display: false,
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Usage Hours'
                }
            }]
        }
    };
    
    chart.setData(data);
    chart.setOptions(options);
}
/**
 * TODO generated, please specify type and doc for the params
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
