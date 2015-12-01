/*------------------------------------------------------
This is the JS library file for formValidation02.html page 
-------------------------------------------------------*/
/*
   The purpose of this function is to go thru the Cheese
   Information Request form and check the content of all the
   text boxes for validity.  Created  yyyy/mm/dd by       .
*/

function checkAllInputs()  {

    if (document.cform.lastNameFld.value.length <= 1) { 
        alert("Last name entry too short--please correct");
        document.cform.lastNameFld.select();
        return false;    // leave now
    } 
   
          
    if (document.cform.cheeseFld.value.length <= 3) { 
        alert("Cheese name too short--please correct");
        document.cform.cheeseFld.select();
        return false;     // leave now
    }

  
    if (document.cform.telephoneFld.value.length <= 9) {
        alert("Telephone entry too short--please correct");
        document.cform.telephoneFld.select();
        return false;    // leave now
    } 

    
    if (document.cform.zipCodeFld.value.length <= 4) {
        alert("Zip Code too short--please correct");
        document.cform.zipCodeFld.select();
        return false;    // leave now
    } 
    

    return true;    // if made it to here, all OK--let submit proceed

}  // FUNCTION ENDS HERE -------------------------------

