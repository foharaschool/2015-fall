/*
    This is the JavaScript code for 
    "Lab 7: First Arrays" 
    File: /unit5/labs/lab07firstArrays.html
*/
function lab07firstArrays() {
    // Your code goes in here.
	
	// Below is the initial program code for this function.
	// It should be placing the literal string on the 3rd
	// statement onto the web page, into the <div> element
	// already present on the web page.
	
	// However, when you test the execution of this program
	// by clicking on the submit button on the form you
	// set up on the web page, something odd happens.
	// This must be fixed before you can accomplish Lab 07.
	
    var outputBlock;
    
    outputBlock = document.getElementById('outputDiv');
    
    outputBlock.innerHTML = "The JavaScript file for this page is: "
            + "\"/unit5/jsFiles/lab07firstArrays.js\"";

}