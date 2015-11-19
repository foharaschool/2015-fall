/*
    This is the JavaScript code for 
    "Lab 1: Working With innerHTML" 
    File: /unit5/labs/lab01innerHTML.html
*/
function lab01innerHTML() {
    // Initialize variables
    var table = document.getElementById("myTable");
    var someRows;
    
    //Create rows
    someRows = "<tr><td>Test1</td><td>Test2</td></tr><tr><td>Test3</td><td>Test4</td></tr><tr><td>Test1</td><td>Test2</td></tr><tr><td>Test3</td><td>Test4</td></tr>";
    
    table.innerHTML += someRows;
    
}