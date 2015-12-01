/*------------------------------------------------------
This is the JS library file for formValidation.html page 
-------------------------------------------------------*/
/*
   The purpose of this function is to go thru the Cheese
   Shipment Inquiry form and check the content of all the
   text boxes for validity.  Created  yyyy/mm/dd by       .
*/

function checkAllTextBoxes()  {
    var errorArticle = document.getElementById("errors");
    var errorMessage = "<h2>Error Log</h2>";
    var noSend = true;  
       
    if (document.cform.lastNameFld.value.length <= 1) { 
        // alert("Your Last Name must be at least 2 characters.");
         errorMessage += "<p>Your Last Name must be at least 2 characters</p>";
        noSend = false;    // leave now --block submit
    }    
          
    if (document.cform.invoiceFld.value.length <= 4) { 
        // alert("Your invoice number must be at least 5 characters.");
        errorMessage += "<p>Your invoice number must be at least 5 characters.</p>";
        noSend = false;     // leave now --block submit
    }
  
    if (document.cform.telFld.value.length <= 9) {
        // alert("Your phone number must be at least 10 characters.");
        errorMessage += "<p>Your phone number must be at least 10 characters.</p>";
        noSend = false;    // leave now --block submit
    } 

    errorArticle.innerHTML = errorMessage;
    return noSend;    // if made it to here, all OK--let submit proceed

}  // FUNCTION END
