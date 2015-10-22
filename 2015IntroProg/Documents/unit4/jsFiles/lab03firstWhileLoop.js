/*
    This is the JavaScript code for 
    "Lab 3: Your First While Loop" 
    File: /unit4/labs/lab03firstWhileLoop.html
*/
function lab03firstWhileLoop() {
    // Your code goes in here.
    
    // Declare variable
    var counter = 0;
    var userText;
    
    // Loop through a prompt for input 5 times
    while(counter < 5) {
        userText = prompt("Need Input");
        document.write("You entered: " + userText + "<br />");
        counter++;
    }
}