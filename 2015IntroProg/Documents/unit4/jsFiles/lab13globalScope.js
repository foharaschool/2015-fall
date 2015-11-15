/*
    This is the JavaScript code for 
    "Lab 2: Global Scope" 
    File: /unit5/labs/lab13globalScope.html
*/

// Global variable set
var fullName = "Fred O'Hara";

//The purpose of this function is to display the full name on the web page
function displayNameOnWebPage() {
    document.write(fullName + "<br />");
}


function lab13globalScope() {
    // Your code goes in here.
    var numNames = 25;
    for(var i= 0; i < numNames; i++) {
        displayNameOnWebPage();
    }
}