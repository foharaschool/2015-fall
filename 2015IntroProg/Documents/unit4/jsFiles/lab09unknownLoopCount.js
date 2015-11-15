/*
    This is the JavaScript code for 
    the function lab09unknownLoopCount() 
    in "Lab 9: Unknown Loop Count" 
    File: /unit4/labs/lab09unknownLoopCount.html
*/
function lab09unknownLoopCountPart1() {
    // Your code goes in here.
    
    // Delete the following statement when you start your code.            
    var startNum = 0;
    var userNum = Number(prompt("enter a number greater than 0"));
    var numTest = true;
    
    if(userNum > startNum) {
        document.write(userNum + " is bigger than " + startNum + "<br />");
    }
    
    while(numTest) {
        userNum = Number(prompt("enter a bigger number"));
        
        if(userNum > startNum) {
            document.write(userNum + " is bigger than " + startNum + "<br />");
            startNum = userNum;
        } else {
            document.write(userNum + " is less than " + startNum + "<br />");
            numTest = false;
        }
        
        
        
    }
    document.write("Goodbye!");
    
    var startingValue = 0;
    var userEnteredValue = prompt("enter a number");
    userEnteredValue = Number(userEnteredValue);
    
    while (userEnteredValue > startingValue)
    {
        document.write(userEnteredValue + " is bigger than " + startingValue);
        startingValue = userEnteredValue;
        userEnteredValue = prompt("Enter a number bigger than " + startingValue);
        userEnteredValue = Number(userEnteredValue);    
    
    }
    
    document.write(userEnteredValue + " is less than " + startingValue);
    document.write("\nGoodbye!");
    
}


