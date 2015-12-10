/*
    This is the JavaScript code for 
    "Find Unique Zip Codes" 
    File: /unit5/project/project5Part1.html.
*/	
// Initialize constants

// Initialize global variables
var uniqueZipCodes = [];
var zipcodeCount = [];
var index;

// The purpose of this function is to build the unique zip code test
function isUniqueZipCode(currentZipcode) {
    // Set flag assuming zipcode is unique and loop through zipcodes
    var uniqueZipFlag = true;
    for(index = 0; index < uniqueZipCodes.length; index++) {
        if(currentZipcode === uniqueZipCodes[index]) {
            uniqueZipFlag = false;
            zipcodeCount[index]++;
            }
        }
    // If it is a unique zipcode push to the array and initialize the count at index
    if(uniqueZipFlag === true) {
        uniqueZipCodes.push(currentZipcode);
        zipcodeCount.push(1);
    }
}
    
//	The purpse of this function is to access and collect information about zipcodeStudyRecords
function zipCodeStudyRecords() {
     
    // Variable Declarations
    var zipCode;
    var records;
 
    // Open the Zip Code Study Records and make them 
    // available to the script
    records = openZipCodeStudyRecordSet();
 
    while (records.readNextRecord()) {
        zipCode = records.getSampleZipCode();
        isUniqueZipCode(zipCode);
    }
}

// The purpose of this function is to build the results table
function createOutputList () {
    // Store access to div element
    var output = document.getElementById('outputTable');
    
    // Build output table
    output.innerHTML += "<tr><th>Unique Zipcode</th><th>Count</th></tr>";
    for (index = 0; index < uniqueZipCodes.length; index++) {
        output.innerHTML += "<tr><td>" + uniqueZipCodes[index] + "</td><td>"
                + zipcodeCount[index] + "</td></tr>"; 
    }
}

function project5Part1() {
    // invoke functions to access records, test unique zipcode(within records function)
    // and output the resultant table
    zipCodeStudyRecords();
    createOutputList();
   
}