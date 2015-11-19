/*
    This is the JavaScript code for 
    "Students in Zip Codes" 
    File: /unit4/project/project4Part3.html
*/

// Global variables
    var numA = 0;
    var recordCount = 0;
    
// The purpose of this function is to access the exam records
function studentExamRecords() {
    var currentName;
    var currentScore;
    var studentRecords;
     
    // Open the Student Enrollment Records and make them 
    // available to the script
    studentRecords = openStudentExamRecords();
     
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentName          =  studentRecords.getStudentName();
        currentScore         =  studentRecords.getStudentScore();
 
        // Count all records
        recordCount++;
        
        // Capture and count A's
        if(currentScore >= 90) {
            printRecord(currentName,currentScore);
            numA++;
        }
         
    }
}

// The purpose of this function is to create the beginning of the table
function startTable() {
    return document.write("<h2>Exams with A's</h2><table><tr><th>Student Name</th><th>Exam Score</th></tr>");
}

// The purpose of this function is to insert a table record
function printRecord(name, score) {
    return document.write("<tr><td>" + name + "</td><td>" + score + "</td></tr>");
}

// The purpose of this function is to close out the table HTML
function endTable() {
    return document.write("</table>");
}

// The purpose of this function is to print out the number of A's and the total number of records
function printTotals(numA, recordCount) {
    return document.write("<br /><br /><p>Number of A's: " + numA + "</p><p>Number of Records: " + recordCount);
}

function project4Part3() {
    startTable();
    studentExamRecords();
    endTable();
    printTotals(numA, recordCount);
}