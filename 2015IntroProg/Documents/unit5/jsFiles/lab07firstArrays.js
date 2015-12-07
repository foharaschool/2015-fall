// Global variables
var enteredStuffArray = [];

/*
    This is the JavaScript code for 
    "Lab 7: First Arrays" 
    File: /unit5/labs/lab07firstArrays.html
*/
function lab07firstArrays() {
    // Your code goes in here.
	
    // Capture input
    var formInput;
    var formObject;
    
    formObject = document.getElementById('formId');
    formInput = formObject.input.value;
    
    // push input into array
    enteredStuffArray.push(formInput);
    
    // output array items into ol
    var outputBlock;
    outputBlock = document.getElementById('outputOl');
    var fullList = "";
    for (var index = 0; index < enteredStuffArray.length; index++) {
        fullList += "<li>" + enteredStuffArray[index] + "</li>";
    }
    outputBlock.innerHTML = fullList;
    
    return false;
}