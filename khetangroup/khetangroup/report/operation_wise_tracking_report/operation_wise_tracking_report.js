// Copyright (c) 2023, khetangroup and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["operation wise tracking report"] = {
	"filters": [

		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		// {
		// 	fieldname: "operator",
		// 	label: __("Operator Name"),
		// 	fieldtype: "Link",
		// 	options: "Employee",
		// 	reqd: 1
		// },
			
		
	
	],
	"formatter": function (value, row, column, data, default_formatter) {
		value = default_formatter(value, row, column, data);
		if (column.fieldname == "out_qty" && data ) {
			value = "<span style='color:red'>" + value + "</span>";
		}
		else if (column.fieldname == "in_qty" && data) {
			value = "<span style='color:green'>" + value + "</span>";
		}

		return value;
	},
};