/*
    This is the JavaScript code for 
    "Name Entry" 
    File: /unit5/project/project5Part2.html.
*/
// Planning List
// Store name
// Output name to page on submit

// Global variables
var nameArray = [];

// The purpose of this function is to store the name and update the count
function storeName(inputName) {
    var counter = document.getElementById('count');
    nameArray.push(inputName);
    counter.innerHTML = nameArray.length;    
}

// The purpose of this function is to output the name
function outputName(inputName) {
    var output = document.getElementById('outputTable');
    output.innerHTML += "<tr><td>" + inputName + "</td></tr>";
}

function project5Part2() {    
     var enteredName = document.getElementById('nameID').value;
    // Output name, store it, update count
    outputName(enteredName);
    storeName(enteredName);
    document.getElementById('nameID').select();
    
    return false;
}