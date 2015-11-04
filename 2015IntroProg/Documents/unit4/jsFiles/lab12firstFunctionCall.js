
//The purpose of this function is to write a message for the user
function callMessage() {
    document.write("Hi, from the f<br />");
}

/*
    This is the JavaScript code for Part 1 of
    "Lab 1: Calling Functions in JavaScript" 
    File: /unit5/labs/lab01firstFunctionCall.html
*/
function lab12firstFunctionCallPart1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:
    
    // Call the message
    for(var i = 0; i < 5; i++) {
        callMessage();
    }
}


/*
    This is the JavaScript code for Part 2 of
    "Lab 1: Calling Functions in JavaScript" 
    File: /unit5/labs/lab01firstFunctionCall.html
*/
//
function generateName() {
    var firstName = prompt("enter your first name");
    var middleName = prompt("enter your midde name");
    var lastName = prompt("enter your last name");
    
    document.write("Hello " + firstName + " " + middleName + " " + lastName);
}

function lab12firstFunctionCallPart2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:
        
    generateName();
    document.write(". Shall we play a game?");

}