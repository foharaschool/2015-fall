/*
    This is the JavaScript code for 
    "Lab 6: A Simple Start With Student Enrollment Records" 
    File: /unit4/labs/lab06simpleEnrollment.html
*/
function lab06simpleEnrollment() {
    // Your code goes in here.
    var studentNumber;
    var studentName;
    var studentRecords = openStudentEnrollmentRecords();
    
    while(studentRecords.readNextRecord()) {
        studentNumber = studentRecords.getStudentNumber();
        studentName = studentRecords.getStudentName();
        document.write(studentNumber + "\t" + studentName + "<br />");
    }
    
}