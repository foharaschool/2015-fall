/*
    This is the JavaScript code for 
    "Lab Exercise 3, Part 1
    File: /unit4/labs/exercises-7.html
*/
function exercise7Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare functions
    function square(loopCounter) {
        return loopCounter * loopCounter;
    }
    function cube(loopCounter) {
        return loopCounter * loopCounter * loopCounter;
    }
    
    // Loop functions to provide Output
    
    for(var loopCounter = 1; loopCounter <= 30; loopCounter++) {
        document.write(loopCounter + ", " + square(loopCounter) + ", " + cube(loopCounter) + "<br />");
    }

}


/*
    This is the JavaScript code for 
    "Lab Exercise 3, Part 2
    File: /unit4/labs/exercises-7.html
*/
function exercise7Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // declare/assign variables
    var num1 = Number(prompt("Enter a number"));
    var num2 = Number(prompt("Enter another number"));
    var total = 0;
    // while loop to build addition
    while(num1 <= num2) {
        total += num1;
        if(num1 < num2) {
            document.write(num1 + " + ");
        } else {
            document.write(num1 + " = " + total);
        }
        num1++;
    }

}