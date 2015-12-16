/* File: /unit5/project/project5Part3.html */

/*  There are no global variables  */

/*
Table update Specifications:
* Table must generate rows only for items that have stock within user specified range
* Table in stock aggregate should reflect only information included in user defined results, total records
  to continue to reflect all records in file

User range specifications:
* Program to ask user for lower and upper bounds of in stock range
* Program to validate input, and not run if invalid input provided.
* Program to notify user of invalid input

Table heading specifications:
* Table heading to pass in the user defined bounds

Version Plan:
Version 1:
* Program accepts lower and upper bounds and builds table with selected range

Version 2:
* Program incorporates bounds into heading above table

Version 3:
* Program prompts user for bounds and validates input


The Test Plan

    Test Case 1:
        Inputs: 1, 20
    
        Expected Results: 8 records

    Test Case 2:
        Inputs: -1 , 20
    
        Expected Results: Invalid lower bound

    Test Case 3:
        Inputs: 4, twenty
    
        Expected Results: Invalid upper bound
        
    Test Case 4:
        Inputs: cancel button selected, 20
    
        Expected Results: Invalid lower bound
*/


/*
This is the JavaScript code for the Item Inventory starting program 
as it currently exists.  This is a working program, and currently produces 
the output as seen at the bottom of the Project Part 3 web page.

You must do maintenanace to the program to change it so that it then meets the 
specifications of LU5 Project Part 3.
*/


/* ---------- The functions constituting this program are below -----------*/


/*-----------------------------------------------------------------------
  The purpose of this function is to place the heading title ABOVE the table
  that will hold the rows of data from the selected records.
    
  Inputs arriving from the calling function:       - none -
     
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/

function displayHeadingAboveTable(lowerB, upperB)  {
    var lowerBoundHeading = document.getElementById('lower-bound');
    var upperBoundHeading = document.getElementById('upper-bound');
    
	// Add bounds to heading
	lowerBoundHeading.innerHTML = lowerB;
    upperBoundHeading.innerHTML = upperB;
}

/*-----------------------------------------------------------------------
  The purpose of this function is to place the FIRST row into the results
  table.  This first row contains just a descriptive heading for each column.
    
  Inputs arriving from the calling function:
  
    theResultsTable:  contains a reference to the output table on the Web page
     
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/

function insertColumnHeadingsRow(theResultsTable)  {
	
    theResultsTable.innerHTML =  "<tr><th>Item Number</th><th>Item Description</th><th>Item Stock Amount</th></tr>";
};   // END OF FUNCTION



/*-----------------------------------------------------------------------
  The purpose of this function is to place a selected record's information
  in the form of a table row) into the results table on the Web page.
  
  Inputs arriving from the calling function:
  
    theOutputTable:  contains a reference to the output table on the Web page
    itemNumber:      contains the item number of the current record
    itemDescription: contains the item description of the current record
    itemStockAmount: contains the stock amount of the current record
  
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/

function placeRecordIntoResultTable(theOutputTable,itemNumber,itemDescription,itemStockAmount)  {
	
    theOutputTable.innerHTML += "<tr><td>" 
	        + itemNumber
            + "</td><td>" + itemDescription
            + "</td><td>" + itemStockAmount
            + "</td></tr>"; 
}    // END OF FUNCTION



/*-----------------------------------------------------------------------
  The purpose of this function is to place the number of selected
  records for this run, and the total number of records in the
  Item Inventory file, into the results table on the Web page.  The
  totals will be the last two rows in the table. 
    
  Inputs arriving from the calling function:
  
    thatOutputTable:         contains a ref to the output table on the Web page
    numberSelectedRecords:   contains the total number of selected records this run
    numberRecordsInFile:     contain the total number of records in the file
   
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/
function displayRecordTotals(thatOutputTable,numberSelectedRecords,numberRecordsInFile)  {

    thatOutputTable.innerHTML += "<tr><td>&nbsp;Number Recs Selected</td><td>" + numberSelectedRecords + "</td></tr>";
	thatOutputTable.innerHTML += "<tr><td>&nbsp;Total Number Records</td><td>" + numberRecordsInFile + "</td></tr>";
};    // END OF FUNCTION

// The purpose of this function is to prompt the user for input and validate the provided input
function promptBoundInputs() {
    var inputError = false;
    var inputRange = [];
    var askLowerBound = prompt("Provide the lower bound of desired stock amount range:");
    var askUpperBound = prompt("Provide upper bound of desired stock amount range:");
    var lowerBoundNumber = Number(askLowerBound); // Stores converted number so that null can be tested
    var upperBoundNumber = Number(askUpperBound); // Store converted number so that null can be tested
    console.log(askLowerBound + " and the upper: " + askUpperBound);
    // Validate lower and upper bound inputs for positive, numeric, lower < upper criteria
    if(isNaN(lowerBoundNumber) || askLowerBound === "" || askLowerBound === null || lowerBoundNumber < 0) {
        alert('The lower bound must be a number that is 0 or greater.');
        inputError = true;
    }
    
    if(isNaN(upperBoundNumber) || askUpperBound === "" || askUpperBound === null || upperBoundNumber < lowerBoundNumber) {
       alert('The upper bound must be a number that is positive and greater than the lower bound');
       inputError = true; 
    }
    
    // If There is error in the input, return nothing to halt program
    if(inputError) {
        
        return inputRange;
    } else {
        return inputRange = [lowerBoundNumber, upperBoundNumber];
    }
}



/*------------------------------------------------------------------------
 This is the MAINLINE function called from the Web page.  The purpose of 
 this function is to coordinate all the function calls needed to produce
 a table of stock items with one hundred or more on hand.
------------------------------------------------------------------------*/

function project5Part3()  {
		
		
    // Define all variables available in this mainline function		
    var currentNumber;
    var currentDescription;
    var currentStockAmount;
	
	
	var totalNumberRecords;
	var numberSelectedRecords;
	
	var itemRecords;           // will hold ref to the Item Inventory file
    var outputTable;           // will hold ref to the results table on Web page
    
    
    var boundInputs;       // will hold array with validated lower and upper bounds  
    var lowerBoundInput;   // will hold lower bound of stock range
    var upperBoundInput;   // will hold upper bound of stock range

	// Gather and validate inputs
    boundInputs = promptBoundInputs();
    
    // Stop mainline function if Inputs have errors
    if(boundInputs.length === 0) {
        return;
    }
    
    // Assign lower and upper bounds
    lowerBoundInput = boundInputs[0];
    upperBoundInput = boundInputs[1];
    
	// Place heading line above the table to reflect what the table contains
	displayHeadingAboveTable(lowerBoundInput, upperBoundInput);
     
    // Generate a reference to the HTML output table so we can add rows to it
	//    (Note that for this program, the html table element itself is already present
	//    in the html, and does not have to be inserted by this JavaScript program.)
    outputTable = document.getElementById('tableForResults');
	
	// Initialize counter variables in prep for looping
	totalNumberRecords = 0;
	numberSelectedRecords = 0;
     
	// Set up output table heading row as first row of the table
	insertColumnHeadingsRow(outputTable);
		 
    // Open the Inventory Items Records & make them available to be read
    itemRecords = openInventoryItemsRecords();
     
    // Loop thru all Item records and output those with 100 or more on hand
    while (itemRecords.readNextRecord()) {
        
		totalNumberRecords++;
		 
        currentNumber      = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();
        currentStockAmount = currentStockAmount.toFixed(1);        // user said there might be parital units onhand
		
		if (currentStockAmount >= lowerBoundInput && currentStockAmount <= upperBoundInput)   {
			
			numberSelectedRecords++;
			
            placeRecordIntoResultTable(outputTable,currentNumber,currentDescription,currentStockAmount);   
		}
    }
	
	// Display total lines on Web page
	displayRecordTotals(outputTable,numberSelectedRecords,totalNumberRecords);
	
}  // END OF MAINLINE FUNCTION

