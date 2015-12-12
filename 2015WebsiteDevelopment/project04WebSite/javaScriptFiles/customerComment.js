// The purpose of this function is to return functions for validating form fields
// and dynamically adding fields based on user interactions
function validateCustomerCommment() {
    // initialize aggregate variables
    var validFlag = true;
    var errorAlert = [];
    var selectPriority = [];
    
     // Validate First name field; at least two alpha characters
    if (!/^[a-z][a-z]/i.test(document.form01.customerName.value) && document.form01.customerName.value.length < 4) {
        // Add to error message
        errorAlert.push("Name must begin with at least two alpha characters and be at least 4 characters");
        
        // Set warning CSS
        $('[name=customerName]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.customerName);

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=customerName]').parent().removeClass("has-error");
    }
    
    // Validate text area has at least 10 characters
    if ($('[name=comment]').val().length < 10) {
        // Add to error message
        errorAlert.push("Product Description must be greater than 10 characters");
        
        // Set warning CSS
        $('[name=comment]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=comment]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=comment]').parent().removeClass("has-error");
    }
    
    // Build and call alert if errors
    if (errorAlert.length > 0) {
        var errorMessage = "";
        for (var i = 0; i < errorAlert.length; i++) {
            errorMessage += "* " + errorAlert[i] + "\n\n";
        }
        alert(errorMessage);
    }
    
    
    // Set top validation error select() or focus()
    if (/select-one/.test(selectPriority[0].value)) {
        selectPriority[0].focus();
    } else {
        selectPriority[0].select();
    }
    
    // Return validation boolean
    return validFlag;
}


// The purpose of this function is to toggle the contact information when the select box is checked
function toggleContactInfo() {
    $('.hidden').toggle();
}

// The purpose of this function is to remove all error CSS when the reset button is presed
function formClearComment() {
    $('*').removeClass("has-error");
    if($('[name=contact]:checked')) {
        toggleContactInfo();
    }
}