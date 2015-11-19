/*
    This is the JavaScript code for 
    "Lab 2: Local and Global Variables" 
    File: /unit5/labs/lab02localGlobal.html
*/

var fullName;

function printFullName() {
    var fullName = "Bill Smith";
    document.getElementById("outputList").innerHTML += "<li>" + fullName + "</li>";
}



function lab02localGlobal() {
    // Your code goes in here.
    
    var output;
    
    output = document.getElementById('outputList');
    
    fullName = "Judy Green";
    document.getElementById("outputList").innerHTML += "<li>" + fullName + "</li>";
    printFullName();
    
}