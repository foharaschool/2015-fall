/*
    This is the JavaScript code for 
    "Lab 3: Passing Parameters" 
    File: /unit5/labs/lab03firstPassing.html
*/
function lab03firstPassing() {
	
    var referenceToDivElement;
    
    referenceToDivElement = document.getElementById('divForOutput');
    
    referenceToDivElement.innerHTML = "The JavaScript file for this page is: "
            + "\"/unit5/jsFiles/lab03firstPassing.js\"";
}