/*
    This is the JavaScript code for 
    "A fine little part" File: /unit4/project/project4Part1.html
*/
// The purpose of this function is to provide the prompt shell to call in the text desired in the prompt



function makePrompt(promptMessage) {
    return Number(prompt(promptMessage));
}




function project4Part1() {
    
    // Constants
    const zero = 0;
    
    // Declare and assign variables
    var num1;
    var num2;
    var numProd;
    
    // Assign values    
    num1 = makePrompt("Enter a number");
    num2 = makePrompt("Enter another number");
    
    // compare numbers and output looping
    if (num1 < zero || num2 < zero) {
        alert("One of the numbers was less than zero, please try again.");
    } else if(num2 < num1) {
        alert("The second number has to be bigger than the first, please try again.");
    } else
    
        while (num1 < num2){
            numProd = num1 * num2;
            document.write(num1 + " times " + num2 + " is " + numProd + "<br />");
            num1 ++;
    }
}

