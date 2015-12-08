/*------------------------------------------------------
This is the JS library file for formValidation.html page 
-------------------------------------------------------*/
/*
   The purpose of this function is to go thru the Cheese
   Shipment Inquiry form and check the content of all the
   text boxes for validity.  Created  yyyy/mm/dd by       .
*/

function checkAllTextBoxes()  {
           
    console.log(document.cform);
    console.log(document.cform.lastNameFld);
    console.log(document.cform.lastNameFld.value);
    console.log(document.cform.lastNameFld.value.length);
               
    if (document.cform.lastNameFld.value.length < 2) {
        window.alert("Last name must be at least 2 characters.");
        //document.cform.lastNameFld.focus(); 
        document.cform.lastNameFld.select(); 
        return false;    // leave now --block submit
    }    
          
    if (document.cform.invoiceFld.value.length < 5 
        || document.cform.invoiceFld.value.length > 5
        || isNaN(document.cform.invoiceFld.value)) { 
        window.alert("Invoice should be 5 digits."); 
        document.cform.invoiceFld.select(); 
        return false;     // leave now --block submit
    }
  
    if (document.cform.invoiceFld2.value !== document.cform.invoiceFld.value) { 
        // Notify user there is a problem.
        window.alert("Invoice numbers do not match, please re-key both?");
        
        // Clear both fields. 
        document.cform.invoiceFld.value = ""; 
        document.cform.invoiceFld2.value = ""; 

        // Put focus in first invoice field.
        document.cform.invoiceFld.select(); 
        
        return false;     // leave now --block submit
    }
    
    if (document.cform.telFld.value.length < 10) {
        window.alert("Phone should be 10 digits."); 
        document.cform.telFld.select(); 
        return false;    // leave now --block submit
    } 
    
    if (document.cform.areaOfConcern.value === "faux") {
        window.alert("You must choose an area of concern."); 
        return false;    // leave now --block submit
    }     

    return true;    // if made it to here, all OK--let submit proceed

}  // FUNCTION END

function checkAllTextBoxes2()  {

    var errorString = "";
           
    console.log(document.cform);
    console.log(document.cform.lastNameFld);
    console.log(document.cform.lastNameFld.value);
    console.log(document.cform.lastNameFld.value.length);

    if (document.cform.lastNameFld.value.length < 2) {
        //window.alert("Last name must be at least 2 characters.");
        //document.cform.lastNameFld.focus(); 
        //document.cform.lastNameFld.select(); 
        //return false;    // leave now --block submit
        
        errorString += "* Last name\r\n";
    }    
          
    if (document.cform.invoiceFld.value.length < 5 
        || document.cform.invoiceFld.value.length > 5
        || isNaN(document.cform.invoiceFld.value)) { 
        //window.alert("Invoice should be 5 digits."); 
        //document.cform.invoiceFld.select(); 
        //return false;     // leave now --block submit
        errorString += "* Invoice Field\r\n";
    }
  
    if (document.cform.invoiceFld2.value !== document.cform.invoiceFld.value) { 
        // Notify user there is a problem.
        //window.alert("Invoice numbers do not match, please re-key both?");
        
        // Clear both fields. 
        //document.cform.invoiceFld.value = ""; 
        //document.cform.invoiceFld2.value = ""; 

        // Put focus in first invoice field.
        //document.cform.invoiceFld.select(); 
        
        //return false;     // leave now --block submit
        errorString += "* Invoice mismatch\r\n";
    }
    
    if (document.cform.telFld.value.length < 10) {
        //window.alert("Phone should be 10 digits."); 
        //document.cform.telFld.select(); 
        //return false;    // leave now --block submit
        errorString += "* Telephone Field\r\n";
    } 
    
    if (document.cform.areaOfConcern.value === "faux") {
        //window.alert("You must choose an area of concern."); 
        //return false;    // leave now --block submit
        errorString += "* Area of Concern\r\n";
    }
    
    console.log(errorString);
    
    if (errorString.length > 0) {
        window.alert("The following errors exist:\r\n\r\n" + errorString);
        return false;
    }
    
    else {
        return true;
    } 
        
}  // FUNCTION END

function setInitialFocus() {
    document.cform.lastNameFld.focus(); 
}
