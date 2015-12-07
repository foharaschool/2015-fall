// The purpose of this function is to validate the form fields for correct input.
function formValidation() {
    // Initialize validation flag and array to apply .select();
    var validFlag = true;
    var selectPriority = [];
    
    // Validate user fields for valid input
    // Validate First name field; at least two alpha characters
    if (!/^[a-z][a-z]/i.test(document.form01.fname.value)) {
        alert("First name must begin with at least two alpha characters");
        // Set warning CSS
        $('input[name=fname]').parent().addClass("has-error");
        selectPriority.push(document.form01.fname);
        validFlag = false;
    } else {
        // Remove warning CSS
        $('input[name=fname]').parent().removeClass("has-error");
    }
    
    // Validate last name field; at least two alpha characters
    if (!/^[a-z][a-z]|^[a-z]'/i.test(document.form01.lname.value)) {
        alert("Last name must begin with at least two alpha characters, or an alpha character and an apostrophe for you Irish folk.");
        // Set warning CSS
        $('input[name=lname]').parent().addClass("has-error");
        selectPriority.push(document.form01.lname);
        validFlag = false;
    }
    // Validate selection made in Gender field
    if (/select-one/.test(document.form01.gender.value)) {
        alert("Must select a gender response");
        selectPriority.push(document.form01.gender);
        validFlag = false;
    }
    // Validate selection made in Country field
    if (/select-one/.test(document.form01.country.value)) {
        alert("Must select a country");
        selectPriority.push(document.form01.country);
        validFlag = false;
    }
    // Validate password field contains at least 5 characters
    if (document.form01.pwd.value.length < 5) {
        alert("Password must be at least 5 characters");
        selectPriority.push(document.form01.pwd);
        validFlag = false;
    }
    // Validate password confirm field contains at least 5 characters
    if (document.form01.cnfmpwd.value.length < 5) {
        alert("Confirming Password must be at least 5 characters");
        selectPriority.push(document.form01.cnfmpwd);
        validFlag = false;
    }
    // Validate password and confirm match
    if (document.form01.pwd.value !== document.form01.cnfmpwd.value) {
        alert("Password Confirmation does not match, Please try again");
        selectPriority.push(document.form01.pwd);
        document.form01.cnfmpwd.value = "";
        validFlag = false;
    }
    // Set top validation error select() or focus()
    if (/select-one/.test(selectPriority[0].value)) {
        selectPriority[0].focus();
    } else {
        selectPriority[0].select();
    }
    return validFlag;
}