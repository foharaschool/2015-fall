/*
    This is the JavaScript code for 
    "Lab 5: Record Set Processing" 
    File: /unit4/labs/lab05recordSetProcessing.html
*/
function lab05recordSetProcessing() {
    // Your code goes in here.
    
    // Declare Variables
    var currentNumber;
    var currentDescription;
    var currentStockAmount;
    
    var itemRecords;
    var inventoryRecordsCount = 0;
    var itemInventory = 0;
    
    // Open the Inventory Items Records and make them 
    // available to the script
    itemRecords = openInventoryItemsRecords();
    
    document.write("The Inventory Items Record Set:<br /><br />");
    
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (itemRecords.readNextRecord()) {
        currentNumber      = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();
        
        document.write(currentNumber + "\t" + currentDescription 
                + "\t" + currentStockAmount + "<br />");
        inventoryRecordsCount++;
        itemInventory += currentStockAmount;
    }
    document.write("<br /><br />");
    document.write("Total number of items: " + itemInventory + "<br />");
    document.write("Count of Records: " + inventoryRecordsCount);
    
}