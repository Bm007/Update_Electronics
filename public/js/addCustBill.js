'use strict'

var Bill = Bill || {};

(function(Bill){

    Bill.element = {

                    billNo          : "#billNo",
                    addBillBtn      : "#addBill",
                    empName         : "#empName",
                    datePicker      : "#datePicker",
                    paymentMode     : "#payment",
                    custName        : "#custName",
                    mobNo           : "#mobNo",
                    address         : "#address",
                    prdctBarcode    : "#prdctBarcode",
                    prdctName       : "#prdctName",
                    prdctType       : "#prdctType",
                    prdctSubType    : "#prdctSubType",
                    prdctSize       : "#prdctSize",
                    avlQty          : "#avlQty",
                    takenQty        : "#takenQty",
                    discount        : "#discount",
                    sale            : "#sale",
                    refresh         : "#refresh",
                    bookNo          : "#bookNo"
    }


    $(Bill.element.addBillBtn).click(function(){
        var bValid = true;

        //Validation for the bill number
        if(!$(Bill.element.billNo).val()){
            $(Bill.element.billNo).addClass("err");            
            bValid = false;
        }else{
            $(Bill.element.billNo).removeClass("err");            
        }

        //Validation for the Employee name
        if(!$(Bill.element.empName).val()){
            bValid = false;
            $(Bill.element.empName).addClass("err");
        }
        else{
            $(Bill.element.empName).removeClass("err");
        }

        //Validation for date
        if(!$(Bill.element.datePicker).val()){
            bValid = false;
            $(Bill.element.datePicker).addClass("err");
        }
        else{
            $(Bill.element.datePicker).removeClass("err");
        }

        //Validation for Payment Mode
        if(!$(Bill.element.paymentMode).val()){
            bValid = false;
            $(Bill.element.paymentMode).addClass("err");
        }
        else{
            $(Bill.element.paymentMode).removeClass("err");
        }

        //Validation for customer name
        if(!$(Bill.element.custName).val()){
            bValid = false;
            $(Bill.element.custName).addClass("err");
        }
        else{
            $(Bill.element.custName).removeClass("err");
        }

        //Validation for mobile no
        var mobileNo = /^\d{10}$/;
        if(!$(Bill.element.mobNo).val()){
            bValid = false;
            $(Bill.element.mobNo).addClass("err");
        }else if(!$(Bill.element.mobNo).val().match(mobileNo)){
            bValid = false;
            $(Bill.element.mobNo).addClass("err");            
        }
        else{
            $(Bill.element.mobNo).removeClass("err");
        }

        //Validation for address
        if(!$(Bill.element.address).val()){
            bValid = false;
            $(Bill.element.address).addClass("err");
        }
        else{
            $(Bill.element.address).removeClass("err");
        }

        //Validation for Product barcode
        if(!$(Bill.element.prdctBarcode).val()){
            bValid = false;
            $(Bill.element.prdctBarcode).addClass("err");
        }
        else{
            $(Bill.element.prdctBarcode).removeClass("err");
        }

        //Validation for product name
        if(!$(Bill.element.prdctName).val()){
            bValid = false;
            $(Bill.element.prdctName).addClass("err");
        }
        else{
            $(Bill.element.prdctName).removeClass("err");
        }

        //Validation for product type
        if(!$(Bill.element.prdctType).val()){
            bValid = false;
            $(Bill.element.prdctType).addClass("err");
        }
        else{
            $(Bill.element.prdctType).removeClass("err");
        }

        //Validation for produt subtype
        if(!$(Bill.element.prdctSubType).val()){
            bValid = false;
            $(Bill.element.prdctSubType).addClass("err");
        }
        else{
            $(Bill.element.prdctSubType).removeClass("err");
        }

        //Validation for produt size
        if(!$(Bill.element.prdctSize).val()){
            bValid = false;
            $(Bill.element.prdctSize).addClass("err");
        }
        else{
            $(Bill.element.prdctSize).removeClass("err");
        }

        //Validation for availble quantity
        if(!$(Bill.element.avlQty).val()){
            bValid = false;
            $(Bill.element.avlQty).addClass("err");
        }
        else{
            $(Bill.element.avlQty).removeClass("err");
        }

        //Validation for taken quantity
        if(!$(Bill.element.takenQty).val()){
            bValid = false;
            $(Bill.element.takenQty).addClass("err");
        }
        else{
            $(Bill.element.takenQty).removeClass("err");
        }

        //Validation for discount
        if(!$(Bill.element.discount).val()){
            bValid = false;
            $(Bill.element.discount).addClass("err");
        }
        else{
            $(Bill.element.discount).removeClass("err");
        }

        //Validation for sale
        if(!$(Bill.element.sale).val()){
            bValid = false;
            $(Bill.element.sale).addClass("err");
        }
        else{
            $(Bill.element.sale).removeClass("err");
        }

    });

    $(Bill.element.refresh).click(function(){
        $(Bill.element.billNo).val('');
        $(Bill.element.empName).val('');
        $(Bill.element.datePicker).val('');
        $(Bill.element.paymentMode).val('');
        $(Bill.element.custName).val('');
        $(Bill.element.mobNo).val('');
        $(Bill.element.prdctBarcode).val('');
        $(Bill.element.prdctName).val('');
        $(Bill.element.prdctType).val('');
        $(Bill.element.prdctSubType).val('');
        $(Bill.element.prdctSize).val('');
        $(Bill.element.avlQty).val('');
        $(Bill.element.takenQty).val('');
        $(Bill.element.discount).val('');
        $(Bill.element.sale).val('');
        $(Bill.element.address).val('');
        $(Bill.element.bookNo).val('');

        $(Bill.element.billNo).removeClass("err");
        $(Bill.element.empName).removeClass("err");
        $(Bill.element.datePicker).removeClass("err");
        $(Bill.element.paymentMode).removeClass("err");
        $(Bill.element.custName).removeClass("err");
        $(Bill.element.mobNo).removeClass("err");
        $(Bill.element.prdctBarcode).removeClass("err");
        $(Bill.element.prdctName).removeClass("err");
        $(Bill.element.prdctType).removeClass("err");
        $(Bill.element.prdctSubType).removeClass("err");
        $(Bill.element.prdctSize).removeClass("err");
        $(Bill.element.avlQty).removeClass("err");
        $(Bill.element.takenQty).removeClass("err");
        $(Bill.element.discount).removeClass("err");
        $(Bill.element.sale).removeClass("err");
        $(Bill.element.address).removeClass("err");
        $(Bill.element.bookNo).removeClass("err");
    });

})(Bill);