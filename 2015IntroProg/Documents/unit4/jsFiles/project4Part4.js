/*
    This is the JavaScript code for 
    "Students in Zip Codes" 
    File: /unit4/project/project4Part4.html
*/
// Initialize global variables
var totalMales = 0;
var totalFemales = 0;

// The purpose of this object constructor is to build the gender counter for use by each zipcode
function ZipcodeObj(zip) {
    this.numMale = 0;
    this.numFemale = 0;
    this.zipcode = zip;
    this.countGender = function (currentZip, currentGender) {
        if (currentZip === this.zipcode) {
            switch (currentGender) {
                case "M":
                    this.numMale++;
                    totalMales++;
                    break;
                case "F":
                    this.numFemale++;
                    totalFemales++;
                    break;
            }
        }
    };
}

// Create Global Objects
var count53711 = new ZipcodeObj(53711);
var count53712 = new ZipcodeObj(53712);
var count53713 = new ZipcodeObj(53713);
var count53714 = new ZipcodeObj(53714);
var count53716 = new ZipcodeObj(53716);

// The purpose of this function is to Open the enrollment records and execute the situaional counts
function studentEnrollmentRecords() {
     
    //Declare function variables
    var currentZipCode;
    var currentGender;
    var studentRecords;
     
    // Open the Student Enrollment Records and make them 
    // available to the script
    studentRecords = openStudentEnrollmentRecords();
     
    // Read the next record,  test to see if there 
    // is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentZipCode = studentRecords.getStudentZipCode();
        currentGender = studentRecords.getStudentGender();
        
        // Check and count gender for each zipcode
        count53711.countGender(currentZipCode, currentGender);
        count53712.countGender(currentZipCode, currentGender);
        count53713.countGender(currentZipCode, currentGender);
        count53714.countGender(currentZipCode, currentGender);
        count53716.countGender(currentZipCode, currentGender);
    }
}

function project4Part4() {
    // Invoke the student records function
    studentEnrollmentRecords();
    
    // Write out the number of males and females by zipcode
    document.write(count53711.zipcode + ": Males: " + count53711.numMale + " Females: " + count53711.numFemale + "<br />");
    document.write(count53712.zipcode + ": Males: " + count53712.numMale + " Females: " + count53712.numFemale + "<br />");
    document.write(count53713.zipcode + ": Males: " + count53713.numMale + " Females: " + count53713.numFemale + "<br />");
    document.write(count53714.zipcode + ": Males: " + count53714.numMale + " Females: " + count53714.numFemale + "<br />");
    document.write(count53716.zipcode + ": Males: " + count53716.numMale + " Females: " + count53716.numFemale + "<br />");

    // Write out the total number of males and females
    document.write("Total Males: " + totalMales + "<br />");
    document.write("Total Females: " + totalFemales);
}