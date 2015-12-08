// The purpose of this function is to validate the form fields for correct input.
function formValidationProduct() {
    // Initialize validation flag and array to apply .select();
    var validFlag = true;
    var selectPriority = [];
    
    // Initialize Alert String Array and message
    var errorAlert = [];
    var errorMessage = "";
    
    // Validate Artist ID to have exactly 5 numbers
    if (!/^\d{5}$/.test($('[name=idnum]').val())) {
        // Add to error message
        errorAlert.push("Artist Id must be 5 numbers");
        
        // Set warning CSS
        $('[name=idnum]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=idnum]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=idnum]').parent().removeClass("has-error");
    }
    
    // Validate password to have at least 5 characters
    if ($('[name=pwd]').val().length < 5) {
        // Add to error message
        errorAlert.push("Password must have at least 5 characters");
        
        // Set warning CSS
        $('[name=pwd]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=pwd]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=pwd]').parent().removeClass("has-error");
    }
    
    // Validate product price to be currency
    if (!/^\d+\.?,?\d{0,2}$/.test($('[name=prc]').val())) {
        // Add to error message
        errorAlert.push("Please enter valid dollar amount (Without $ or ,)");
        
        // Set warning CSS
        $('[name=prc]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=prc]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=prc]').parent().removeClass("has-error");
    }
    
    // Validate product weight to have numbers with optional decimal
    if (!/^\d+.?\d+$/.test($('[name=prdwt]').val())) {
        // Add to error message
        errorAlert.push("Product weight must contain numbers");
        
        // Set warning CSS
        $('[name=prdwt]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=prdwt]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=prdwt]').parent().removeClass("has-error");
    }
    
    // Validate selection made in Category field
    if (/select-one/.test($('[name=prdcat]').val())) {
        // Add to error message
        errorAlert.push("Must select a product category");
        
        // Set warning CSS
        $('select[name=prdcat]').parent().addClass("has-error");
       
        // Add to priority array
        selectPriority.push($('[name=prdcat]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('select[name=prdcat]').parent().removeClass("has-error");
    }
    
    // Validate product organic percentage to have numbers with optional decimal ranging between 1-100
    if (!($('[name=org]').val() >= 0 && $('[name=org]').val() <=100) || $('[name=org]').val().length ===0) {
        // Add to error message
        errorAlert.push("Product weight must contain numbers");
        
        // Set warning CSS
        $('[name=org]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=org]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=org]').parent().removeClass("has-error");
    }
    
    // Validate text area has at least 10 characters
    if ($('[name=prd-desc]').val().length < 10) {
        // Add to error message
        errorAlert.push("Product Description must be greater than 10 characters");
        
        // Set warning CSS
        $('[name=prd-desc]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push($('[name=prd-desc]'));

        validFlag = false;
    } else {
        // Remove warning CSS
        $('[name=prd-desc]').parent().removeClass("has-error");
    }


    
    // Build and call alert if errors
    if (errorAlert.length > 0) {
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

function formClearProduct() {
    $('*').removeClass("has-error");
}