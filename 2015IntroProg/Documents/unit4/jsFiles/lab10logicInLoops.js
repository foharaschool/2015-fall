/*
    This is the JavaScript code for 
    the function lab10logicInLoopsPart1() 
    in "Lab 10: Logic in Loops" 
    File: /unit4/labs/lab10logicInLoops.html
*/
function lab10logicInLoopsPart1() {
    // Your code goes in here.
    var userNum;
    var numTotal = 0;
    
    for(var count = 0; count < 5; count++) {
        userNum = Number(prompt("Enter a number"));
        document.write("Entered number was : " + userNum + "<br />");
        if(userNum > 0) {
            numTotal += userNum;
        }
    }
    document.write("<br />Total: " + numTotal);

}

/*
    This is the JavaScript code for 
    the function lab10logicInLoopsPart2() 
    in "Lab 10: Logic in Loops" 
    File: /unit4/labs/lab10logicInLoops.html
*/
function lab10logicInLoopsPart2() {
    // variables
    var arrayHourlyWage = [];
    var hourlyWage;
    var recordCount = 0;
    var minHourly;
    var maxHourly;
    var avgHourly = 0;
    
    // Open records
    var records = openEmployeePayrollRecords();

    // read records and push to array. Also capture total in avgHourly for later calculation
    while (records.readNextRecord()) {
        hourlyWage = records.getEmployeeHourlyWage();
        arrayHourlyWage.push(hourlyWage);
        recordCount++;
        avgHourly += hourlyWage;
     }
       
     // Set max and min using Math
     minHourly = Math.min(...arrayHourlyWage);
     maxHourly = Math.max(...arrayHourlyWage);

    
    // Calculate average with count and total
    avgHourly = avgHourly / recordCount;
        
    document.write("Average Hourly Wage: " + avgHourly.toFixed(2) + "<br />");
    document.write("Maximum Hourly Wage: " + maxHourly + "<br />");
    document.write("Minimum Hourly Wage: " + minHourly);
        

}
