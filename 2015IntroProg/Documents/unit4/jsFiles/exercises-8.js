/*
    This is the JavaScript code for 
    "Lab Exercise 8, Part 1
    File: /unit4/labs/exercise-8.html
*/
function exercise8Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE

    // Loop through the numbers
    for(var count = 1; count <= 50; count++) {
        var half = count * 0.5;
        var quarter = count * 0.25;
        document.write(count + ", " + half + ", " + quarter + "<br />");
    }
    
}


/*
    This is the JavaScript code for 
    "Lab Exercise 8, Part 2
    File: /unit4/labs/exercise-8.html
*/
function exercise8Part2() {
    // Prompt for numbers
    var num1 = Number(prompt("enter a number"));
    var num2 = Number(prompt("enter a bigger number"));
    var messageOut = "";
    var totalNum = 1;
    
    
    // Loop between numbers to calculate and output
    for(var count = num1; count <= num2; count++) {
        totalNum *= count;
        messageOut += count;
        if(count < num2) {
            messageOut += " * "
        } else {
            messageOut += " = " + totalNum;
        }
        console.log(totalNum);
    }
    document.write(messageOut);
}