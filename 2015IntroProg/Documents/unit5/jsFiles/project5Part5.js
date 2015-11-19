/* File: /unit5/project/project5Part5.html */

/*  
    Global variables - none
/*

The Test Plan

    Test Case 1:
        Inputs:    
    
        Expected Results:   		
		  

    Test Case 2:
        Inputs:
    
        Expected Results:


    Test Case 3:
        Inputs:
    
        Expected Results:
*/

//---------------------------------------------------------------------------

/*
  
  Started by   C Cheddar  2014   
  Finished by  __(your name)__  __(today's date)__

  The formula for Body Mass Index (BMI) as given in the John Hopkins 
  HealthAfter50 newsletter (Fall 2014 issue) is:

    "Divide your weight in pounds by your height in inches squared and 
     multiply by 703. For example, if you weigh 150 pounds and are 5'5" (65")
     tall, the calculation would be as follows:  [150 / (65)2] x 703 = 24.96."

  Note that the squared operation is represented in the above quoted text by
  a "2" inline with the text, rather than raised into a superscript position
  (which would be its normal formatting in a printed textbook).

  No global variables are needed for this set of functions (i.e. for this
  program).

*/

//----------------------------------------------------------------------------
//  The purpose of this function is obtain the user weight from the user
//  of the web page. The string obtained via the prompt() method is returned
//  "as is" to the main function.
//----------------------------------------------------------------------------
function obtainUserWeight()  {

    var promptedUserWeight;

    promptedUserWeight = prompt("Enter your weight in pounds to the nearest"
            + " pound");
    return promptedUserWeight; 
}


//----------------------------------------------------------------------------
//  The purpose of this function is obtain the user height from the user
//  of the web page. The string obtained via the prompt() method is returned
//  "as is" to the main function.
//----------------------------------------------------------------------------
function obtainUserHeight()  {

    var promptedUserHeight;

    promptedUserHeight = prompt("Enter your height in inches to the nearest"
            + " inch");
    return promptedUserHeight; 
}


//----------------------------------------------------------------------------
//  The purpose of this function is to examine the string containing the
//  user's weight. If it is found to be invalid, display as precise an error
//  msg as possible, and then return to the calling function with a Boolean
//  false (problem found). Only if no probem was found, return with a Boolean
//  true.
//----------------------------------------------------------------------------
function validateUserWeight(receivedUserWeight) {

    if (receivedUserWeight.length === 0)  {
        document.write("You failed to enter any weight value.");
        return false;
    }

    if (receivedUserWeight.substr(0,1) === " ")  {
        document.write("You should enter a number without any leading blanks"
                + " for your weight value.");
        document.write("\nYou entered \"" 
                + receivedUserWeight 
                + "\" which has a leading blank.")
                ;
        return false;  
    }

    if ( isNaN(receivedUserWeight) )  {
        document.write("You must enter a number for your weight value.");
        document.write("\nYou entered \"" 
                + receivedUserWeight 
                + "\" which is not a number.")
                ;
        return false;  
    } 

    receivedUserWeight = Number(receivedUserWeight);
    if (receivedUserWeight <= 0)  {
        document.write("Your weight value must be a positive number.");
        return false;
    }

    return true;     // if FOC reaches here no problems found with weight
}


//----------------------------------------------------------------------------
//  The purpose of this function is to examine the string containing the
//  user's height. If it is found to be invalid, display as precise an error
//  msg as possible, and then return to the calling function with a Boolean
//  false (problem found). Only if no probem was found, return with a Boolean
//  true.
//----------------------------------------------------------------------------
function validateUserHeight(receivedUserHeight) {

    if (receivedUserHeight.length === 0)  {
        document.write("You failed to enter any height value.");
        return false;
    }

    if (receivedUserHeight.substr(0,1) === " ")  {
        document.write("You should enter a number without any leading blanks"
                + " for your height value.");
        document.write("\nYou entered \"" 
                + receivedUserHeight 
                + "\" which has a leading blank.")
                ;
        return false;  
    }

    if ( isNaN(receivedUserHeight) )  {
        document.write("You must enter a number for your height value.");
        document.write("\nYou entered \"" 
                + receivedUserHeight 
                + "\" which is not a number.")
                ;
        return false;  
    } 

    receivedUserHeight = Number(receivedUserHeight);
    if (receivedUserHeight <= 0)  {
        document.write("Your height value must be a positive number.");
        return false;
    }

    return true;     // if FOC reaches here no problems found with height
}


//----------------------------------------------------------------------------
//  The purpose of this function is to calculate the user's BMI based on
//  the user's weight and height that the user entered into the program.
//
//  Inputs:  The function must have within the parentheses two inputs received
//           from the main function:
//             - the user's weight in pounds
//             - the user's height in inches
//
//  Output:  The function must return back into the main function one output:
//             - the user's BMI 
//----------------------------------------------------------------------------  
function calculateBodyMassIndex(      ,      )  {


          // For this project part, you must write the programming
          // statement for this one function. Remember to work
          // in "versions" for efficient debugging.

     
}


//----------------------------------------------------------------------------
//  The purpose of this function is to display the user's BMI on the web page
//  together with their entered input values and some explanatory text.
//----------------------------------------------------------------------------
function displayBodyMassIndex(userEnteredPounds, 
                              userEnteredInches, 
                              userBodyMassIndex)  {

    var UPPER_NORMAL_LIMIT = 25;         // conventional BMI max normal limit

    document.write("The results for you are as follows:");
    document.write("<br /><br />"); 
    document.write("\tYou entered your weight as being " 
            + userEnteredPounds  
            + " pounds.")
            ; 
    document.write("<br />");
    document.write("\tYou entered your height as being " 
            + userEnteredInches 
            + " inches.")
            ;  
    document.write("<br /><br />"); 
    document.write("\tYour Body Mass Index \"BMI\" is thus: " 
            + userBodyMassIndex.toFixed(2) 
            + ".")
            ; 
    document.write("<br /><br />"); 
    document.write("When evaluating BMI, body build and waist circumference"
            + " may be among the factors to also take into consideration. ");
    document.write("<br />");
    document.write("One conventional guideline is: If your BMI is over "
            + UPPER_NORMAL_LIMIT 
            + ", consider discussing these factors and your weight with your"
            + " doctor.")
            ; 
    document.write("<br />");
    
    if (userBodyMassIndex.toFixed(2) >= UPPER_NORMAL_LIMIT)  {
        document.write("<br />");
        document.write("Thus, after considering other factors, you may wish"
                + " to consider discussing your BMI of "
                + userBodyMassIndex.toFixed(2)
                + " with your doctor.")
                ;
        document.write("<br />");
    }   
}


//----------------------------------------------------------------------------
//  This is the main function called from the web page when the user loads
//  the web page.  Note that the six well-named user functions together with
//  the use of blank lines make section heading comments unnecessary. And
//  further note that the main function consists mostly of function calls 
//  (although a main function can also control a loop, something that is not
//  needed in this particular application).
//----------------------------------------------------------------------------

function project5Part5()  {

    var userPounds;                   // will contain user's weight in pounds
    var userInches;                   // will contain user's height in inches

    var validWeight;                  // will contain Boolean validation result
    var validHeight;                  // will contain Boolean validation result

    var userBodyMassIndex;            // will contain the user's BMI

   
    userPounds  = obtainUserWeight();               // will return weight string 
  
    validWeight = validateUserWeight(userPounds);   // will return Boolean
    if (validWeight) {
        userPounds = Number(userPounds);
    } else {
        document.write("\nProgram halted--refresh web page to start over.");
        throw new Error("Invalid user weight entered"); 
    }
   

    userInches  = obtainUserHeight();               // will return height string

    validHeight = validateUserHeight(userInches);   // will return Boolean  
    if (validHeight) {
        userInches = Number(userInches);
    } else {
        document.write("\nProgram halted--refresh web page to start over.");
        throw new Error("Invalid user height entered"); 
    }  

    userBodyMassIndex = calculateBodyMassIndex(userPounds, userInches);

    displayBodyMassIndex(userPounds, userInches, userBodyMassIndex); 
   
}   // End of the main function
