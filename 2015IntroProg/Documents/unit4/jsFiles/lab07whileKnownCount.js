/*
    This is the JavaScript code for 
    the function lab07whileKnownCountPart1() 
    in "Lab 7: While Loop with Known Count" 
    File: /unit4/labs/lab07whileKnownCount.html
*/
function lab07whileKnownCountPart1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Variables
    var loopCounter = 1;
    var maximumLoop;
    var total = 0;
    
    //Prompt the user to enter the loop number and perform the loop
    maximumLoop = Number(prompt("enter the number of times you'd like to loop"));
    
    while(loopCounter <= maximumLoop) {
        total += loopCounter;
        document.write("In loop " + loopCounter + " the total is " + total + ".<br />");
        loopCounter++;
    }
    document.write("<br />The final total is " + total + ".");


}

/*
    This is the JavaScript code for 
    the function lab07whileKnownCountPart2() 
    in "Lab 7: While Loop with Known Count" 
    File: /unit4/labs/lab07whileKnownCount.html
*/
function lab07whileKnownCountPart2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare and assign variables
    var loopCounter = 1;
    var loopMaximum = 20;
    var baseMultiplier = 7;
    
    // Do all the looping!
    while(loopCounter <= loopMaximum) {
        var product;
        product = loopCounter * baseMultiplier;
        document.write(baseMultiplier + " x " + loopCounter + " = " + product + "<br />");
        loopCounter++;
    }
}