/*
    This is the JavaScript code for 
    the function lab08forKnownCountPart1() 
    in "Lab 8: For Loop with Known Count" 
    File: /unit4/labs/lab08forKnownCount.html
*/
function lab08forKnownCountPart1() {
    // Your code goes in here.
    
    // Declare/assign variables
    var loopCounter;
    var maximumLoop;
    var total = 0;
    
    // Prompt for loop number
    maximumLoop = Number(prompt("Enter the number of loops"));
    
    // Process loop
    for(var loopCounter = 1; loopCounter <= maximumLoop; loopCounter++) {
        total += loopCounter;
        document.write("In loop " + loopCounter + " the total is " + total + ".<br />");
    }
    document.write("<br />The final total is " + total + ".");

}

/*
    This is the JavaScript code for 
    the function lab08forKnownCountPart2() 
    in "Lab 8: For Loop with Known Count" 
    File: /unit4/labs/lab08forKnownCount.html
*/
function lab08forKnownCountPart2() {
    // Your code goes in here.
    
    // Declare/assign variables
    var numLines = 100;
    
    // Loop the operations
    for(var i = 1; i <= 100; i++) {
        var numQuotient = numLines / i;
        document.write("1000 / " + i + " = " + numQuotient + "<br />");
    }

}

