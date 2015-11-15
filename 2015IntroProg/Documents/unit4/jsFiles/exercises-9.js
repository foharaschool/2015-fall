/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 1
    File: /unit4/labs/exercise-9.html
*/
function exercise9Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    var numTotal = 0;
    var userNum = Number(prompt("Enter a number"));
    numTotal += userNum;
    document.write("Entered Number: " + userNum + ", Current Total: " + numTotal + "<br />");
    
    while(numTotal <= 1000) {
        userNum = Number(prompt("Enter another number"));
        numTotal += userNum;
        document.write("Entered Number: " + userNum + ", Current Total: " + numTotal + "<br />");
        
    }
    
    document.write ("<br />The final total is " + numTotal)
    
}


/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 2
    File: /unit4/labs/exercise-9.html
*/
function exercise9Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
        
    // Delete the following statement when you start your code.
    document.write("This function is named \"exercise9Part2()\" " 
            + "<br />and is in the JavaScript file: " 
            + "\"/unit4/jsFiles/exercise-9.js\"");
}


/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 3
    File: /unit4/labs/exercise-9.html
*/
function exercise9Part3() {
    // PART 3: YOUR CODE STARTS AFTER THIS LINE
    
    // Delete the following statement when you start your code.
    document.write("This function is named \"exercise9Part3()\" " 
            + "<br />and is in the JavaScript file: " 
            + "\"/unit4/jsFiles/exercise-9.js\"");
}