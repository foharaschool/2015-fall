/*
    This is the JavaScript code for 
    the function lab11moreLoopsAndLogicPart1() 
    in "Lab 11: More Loops and Logic" 
    File: /unit4/labs/lab11moreLoopsAndLogic.html
*/
function lab11moreLoopsAndLogicPart1() {

}
/*
    This is the JavaScript code for 
    the function lab11moreLoopsAndLogicPart2() 
    in "Lab 11: More Loops and Logic" 
    File: /unit4/labs/lab11moreLoopsAndLogic.html
*/
function lab11moreLoopsAndLogicPart2() {
    // Your code goes in here.

    // Variables
    var hourlyWage;
    var count15 = 0;
    var count20 = 0;
    var count25 = 0;
    var count30 = 0;
    
    // Open records
    var records = openEmployeePayrollRecords();
    
    // read records
    while (records.readNextRecord()) {
        hourlyWage = records.getEmployeeHourlyWage();
        switch(hourlyWage) {
            case 15:
                count15++;
                break;
            case 20:
                count20++;
                break;
            case 25:
                count25++;
                break;
            case 30:
                count30++;
                break;
        }
     }
     document.write("<div style ='width: 300px; margin-left: auto; margin-right: auto;'>");
     document.write("<table style='color: green;'><th>Hourly Wage</th><th>Count</th></tr>");
     document.write("<tr><td>15</td><td>" + count15 + "</td></tr>");
     document.write("<tr><td>20</td><td>" + count20 + "</td></tr>");
     document.write("<tr><td>25</td><td>" + count25 + "</td></tr>");
     document.write("<tr><td>30</td><td>" + count30 + "</td></tr></table>");
     document.write("</div>");

}
