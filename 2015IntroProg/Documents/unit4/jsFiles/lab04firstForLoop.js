/*
    This is the JavaScript code for 
    "Lab 4: Your First For Loop" 
    File: /unit4/labs/lab04firstForLoop.html
*/
function lab04firstForLoop() {
    // Your code goes in here.
    // declare variables
    var counter;
    var userText;
    
    // loop 5 times to collect and output user prompts
    for(var i = 0; i < 5; i++) {
        userText = prompt("Need input");
        document.write("You entered: " + userText + "<br />");
    }
}