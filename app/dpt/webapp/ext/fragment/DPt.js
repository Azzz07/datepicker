sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    debugger
    return {
        change: function (oEvent) {
            debugger
            var dd = oEvent.oSource.mProperties.dateValue;
            var dateObject = new Date(dd);
            // Extract the year component from the Date object
            var year = dateObject.getFullYear();
            // var day = dateObject.getDate();
            var day = dateObject.getDate().toString().padStart(2, '0');
            var dob = oEvent.mParameters.value;
            var dateComponents = dob.split('/');
            // Extract day, month, and year components
            var month = parseInt(dateComponents[0]);
            if (month < 10) {
                month = '0' + month;
            }
            // var day = parseInt(dateComponents[1]);
            // var year = parseInt(dateComponents[2]);

            // Construct the new date string in the desired format
            var newdob = year + '-' + month + '-' + day;


            var id = oEvent.oSource.getParent().getCells()[0].getText()
            var name = oEvent.oSource.getParent().getCells()[1].getText()
            var d = oEvent.oSource.getParent().getCells()[2].getText()

            // let testdata = JSON.stringify({ id: id, name: name, dob: newdob });
            let testdata = JSON.stringify({ id: "'" + id + "'", name: name, dob: newdob });


            // var url = '/odata/v4/ms/tab/' + id;
            var url = '/odata/v4/ms/tab' + '(' + 'id' + '=' +  "'" + id + "'" + ',' + 'IsActiveEntity' + '=' + 'true' + ')';
            // var url =  '/odata/v4/ms/tab/' + id + ',' + 'IsActiveEntity' + '=' + 'true' + ')';
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: testdata,
                success: function (data) {
                    debugger
                    // Handle success
                    console.log(data);

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                    error.message;
                }
            })


        },
        close: function (oEvent) {
            debugger
            // var url = '/odata/v4/ms/tab/' + id;
            MessageToast.show("UPDATED");
            this.refresh();

        }
    };
});



// sap.ui.define([
// 	'sap/ui/core/mvc/Controller',
// 	'sap/ui/model/json/JSONModel',
// 	'sap/m/Button',
// 	'sap/m/Dialog',
// 	"sap/ui/unified/Calendar",
// 	"sap/ui/core/format/DateFormat"
// ], function(Controller, JSONModel, Button, Dialog, Calendar, DateFormat) {
// 		"use strict";

// 		return Controller.extend("sap.m.sample.DatePickerMassEdit.Page", {
// 			onInit: function () {
//                 debugger
// 				// create model
// 				var oCalendar = new Calendar({
// 						width: "100%",
// 						select: this.handleCalendarSelect.bind(this)
// 					}),
// 					oSelectedDate,
// 					oTable,
// 					oProductModel,
// 					aSelectedItems,
// 					sBindingContext,
// 					sDate,
// 					oDateFormat = DateFormat.getInstance({pattern: "yyyy-MM-dd"});

// 				this.oProductModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
// 				this.oProductModel.setSizeLimit(10);
// 				this._oSelectNewDateDialog = new Dialog({
// 					title: "Select New Date",
// 					content: [
// 						oCalendar
// 					],
// 					beginButton: new Button({
// 						text: "OK",
// 						enabled: false,
// 						press: function() {
// 							oSelectedDate = oCalendar.getSelectedDates()[0].getStartDate();
// 							oTable = this.byId('selectionTable');
// 							oProductModel = this.getView().getModel('products');
// 							aSelectedItems = oTable.getSelectedItems();

// 							sDate = oDateFormat.format(oSelectedDate);
// 							aSelectedItems.forEach(function(oItem) {
// 								sBindingContext = oItem.getBindingContextPath();
// 								oProductModel.setProperty(sBindingContext + "/dob", sDate);
// 							});

// 							this._oSelectNewDateDialog.close();
// 						}.bind(this)
// 					}),
// 					endButton: new Button({
// 						text: "Close",
// 						press: function() {
// 							this._oSelectNewDateDialog.close();
// 						}.bind(this)
// 					})
// 				});

// 				this.getView().setModel(this.oProductModel, "products");
// 			},

// 			onChangeDatesPress: function() {
// 				this._oSelectNewDateDialog.open();
// 			},


// 			handleTableSelectionChange: function () {
// 				var oTable = this.byId('selectionTable'),
// 					iSelectedItemsCount = oTable.getSelectedItems().length,
// 					oButton = this.byId("changeDatesButton");

// 				oButton.setEnabled(!!iSelectedItemsCount);
// 			},

// 			handleCalendarSelect: function (oEvent) {
// 				var oCalendar = oEvent.getSource(),
// 					oSelectedDate = oCalendar.getSelectedDates()[0].getStartDate();

// 				if (oSelectedDate){
// 					this._oSelectNewDateDialog.getBeginButton().setEnabled(true);
// 				}
// 			}
// 		});

// 	});
