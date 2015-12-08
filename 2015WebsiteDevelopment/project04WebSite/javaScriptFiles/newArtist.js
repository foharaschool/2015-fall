// The purpose of this function is to validate the form fields for correct input.
function formValidation() {
    // Initialize validation flag and array to apply .select();
    var validFlag = true;
    var selectPriority = [];
    
    // Initialize Alert String Array and message
    var errorAlert = [];
    var errorMessage = "";
    
    // Validate user fields for valid input
    // Validate First name field; at least two alpha characters
    if (!/^[a-z][a-z]/i.test(document.form01.fname.value)) {
        // Add to error message
        errorAlert.push("First name must begin with at least two alpha characters");
        
        // Set warning CSS
        $('input[name=fname]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.fname);

        validFlag = false;
    } else {
        // Remove warning CSS
        $('input[name=fname]').parent().removeClass("has-error");
    }
    
    // Validate last name field; at least two alpha characters
    if (!/^[a-z][a-z]|^[a-z]'/i.test(document.form01.lname.value)) {
        // Add to error message
        errorAlert.push("Last name must begin with at least two alpha characters, or an alpha character and an apostrophe for you Irish folk.");
        
        // Set warning CSS
        $('input[name=lname]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.lname);

        validFlag = false;
    } else {       
        // Remove warning CSS
        $('input[name=lname]').parent().removeClass("has-error");
    }
    
    // Validate selection made in Gender field
    if (/select-one/.test(document.form01.gender.value)) {
        // Add to error message
        errorAlert.push("Must select a gender response");
        
        // Set warning CSS
        $('select[name=gender]').parent().addClass("has-error");
       
        // Add to priority array
        selectPriority.push(document.form01.gender);

        validFlag = false;
    } else {
        // Remove warning CSS
        $('select[name=gender]').parent().removeClass("has-error");
    }
    // Validate selection made in Country field
    if (/select-one/.test(document.form01.country.value)) {
        // Add to error message
        errorAlert.push("Must select a country");
        
        // Set warning CSS
        $('select[name=country]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.country);

        validFlag = false;
    } else {
        // Remove warning CSS
        $('select[name=country]').parent().removeClass("has-error");
    }
    // Validate password field contains at least 5 characters
    if (document.form01.pwd.value.length < 5) {
        // Add to error message
        errorAlert.push("Password must be at least 5 characters");
        
        // Set warning CSS
        $('input[name=pwd]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.pwd);

        validFlag = false;
    } else {
        // Remove warning CSS
        $('input[name=pwd]').parent().removeClass("has-error");
    }
    // Validate password confirm field contains at least 5 characters
    if (document.form01.cnfmpwd.value.length < 5) {
        // Add to error message
        errorAlert.push("Confirming Password must be at least 5 characters");
        
        // Set warning CSS
        $('input[name=cnfmpwd]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.cnfmpwd);
        validFlag = false;
    } else {
        // Remove warning CSS
        $('input[name=cnfmpwd]').parent().removeClass("has-error");
    }
    // Validate password and confirm match
    if (document.form01.pwd.value.length > 4 && document.form01.cnfmpwd.value.length > 4
        && document.form01.pwd.value !== document.form01.cnfmpwd.value) {
        // Add to error message
        errorAlert.push("Password Confirmation does not match, Please try again");
        
        // Set warning CSS
        $('input[name=pwd]').parent().addClass("has-error");
        $('input[name=cnfmpwd]').parent().addClass("has-error");
        
        // Add to priority array
        selectPriority.push(document.form01.pwd);
        
        // Clear confirm password field
        document.form01.cnfmpwd.value = "";

        validFlag = false;
    } else if (document.form01.pwd.value.length > 4 && document.form01.cnfmpwd.value.length > 4
        && document.form01.pwd.value === document.form01.cnfmpwd.value) {
        // Remove warning CSS
        $('input[name=pwd]').parent().removeClass("has-error");
        $('input[name=cnfmpwd]').parent().removeClass("has-error");
    }
    // Build errors alert
    for (var i = 0; i < errorAlert.length; i++) {
        errorMessage += "* " + errorAlert[i] + "\n\n";
    }
    // call alert for errors
    if(errorMessage.length > 0){
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

// The purpose of this function is to remove all error CSS when the reset button is presed
function formClear() {
    // Clear errors from fields
    $('input[name=fname], input[name=lname], select[name=gender], select[name=country], input[name=pwd], input[name=cnfmpwd]').parent().removeClass("has-error");
}