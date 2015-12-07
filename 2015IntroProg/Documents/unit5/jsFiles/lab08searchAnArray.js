/*
    This is the JavaScript code for 
    "Lab 8: Searching an Array"
    File: /unit5/labs/lab08searchAnArray.html
*/
function lab08searchAnArray() {
    // Your code goes in here.
    // Declare variables
    var outputIndex;
    var outputFoundWord;
    var searchFound = false;
    
    var copiedArray = ["Believe", "it", "or", "not", "", "the", "very", "first",
    "version", "of", "Javascript", "shipped", "without", "Arrays",
    "Subsequent", "versions", "made", "up", "for", "the",
    "oversight", "and", "modern", "Javascript", "Arrays", "are",
    "powerful", "structures", "indeed", "", "even", "emulating",
    "many", "common", "data", "structures", "such", "as",
    "stacks", "and", "queues", "This", "reference", "will",
    "cover", "the", "core", "functionality", "of", "Arrays",
    "as", "well", "as", "introduce", "a", "few", "useful",
    "extensions"];
    
    // Search array
    for(var i = 0; i < copiedArray.length; i++){
        
        if(copiedArray[i].length === 13){
            searchFound = true;
            outputIndex = i;
            outputFoundWord = copiedArray[i];
        }
    }
    
    var output;
    
    output = document.getElementById('outputP');
    if(searchFound === true){
        output.innerHTML = "The word: " + outputFoundWord + " was found at index " + outputIndex + ".";
    } else {
        output.innerHTML = "Your search returned no results.";
    }
}