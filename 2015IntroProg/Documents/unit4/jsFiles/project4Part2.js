// The purpose of this function is to apply the 15% tax where applicable
function applyTax(gross) {
    return gross * 0.85
}

// The purpose of this function is to apply the overtime rule and base pay to discern gross pay
function discernGross(wage, hours) {
    if(hours < 35) {
        return (wage * hours);
    } else {
        return (wage * 35) + (wage * 1.5) * (hours - 35);
    }
}

// The purpose of this function is to create an invokable report heading
function buildLayout() {
    return document.write("Employee\tEmployee\tGross\t\tWitholding\tNet<br />"
        + "Number\t\tName\t\tPay\t\tAmount\t\tPay<br /><br />");
}

// The purpose of this function is to Output Aggregate Calculations
function outputAggregate(sumGross, numRecords) {
    return document.write("<br /><br />Total Gross Payroll: " + sumGross.toFixed(2) + "<br />"
            + "Total Net Payroll: " + applyTax(sumGross).toFixed(2) + "<br />"
            + "Average Net Pay: " + (applyTax(sumGross) / numRecords).toFixed(2));
}



/*
    This is the JavaScript code for 
    "Employee Payroll" 
    File: /unit4/project/project4Part2.html
*/
function project4Part2() {
    
    
    
    
    // Layout Headings
    buildLayout();
    
    // Open records variables
    var records = openEmployeePayrollRecords();
    var hourlyWage;
    var hoursWorked;
    var employeeNumber;
    var employeeName;
    var recordCount = 0;
    var grossTotal = 0;
    var employeeGrossWage;
    var netEmployeeWage;
    var witholdingAmount;

    // read records and push to array. Also capture total in avgHourly for later calculation
    while (records.readNextRecord()) {
        hourlyWage = records.getEmployeeHourlyWage();
        hoursWorked = records.getEmployeeHoursWorked();
        employeeNumber = records.getEmployeeNumber();
        employeeName = records.getEmployeeName();
        
        // Calculate gross pay
        employeeGrossWage = discernGross(hourlyWage, hoursWorked);
        
        // Calculate net pay and witholding
        netEmployeeWage = (applyTax(employeeGrossWage));
        witholdingAmount = (employeeGrossWage - netEmployeeWage);
        
        // Store Aggregates
        grossTotal += employeeGrossWage;
        recordCount++;
        
        // Display record
        document.write(employeeNumber + "\t\t" + employeeName + "\t" + employeeGrossWage.toFixed(2) + "\t\t" + witholdingAmount.toFixed(2) + "\t\t" + netEmployeeWage.toFixed(2) + "<br />");
        
     }
     
     // Output Aggregates
     outputAggregate(grossTotal, recordCount)
}