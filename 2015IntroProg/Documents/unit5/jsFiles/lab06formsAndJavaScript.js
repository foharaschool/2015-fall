// The purpose of this function is to display the formatted address
function displayformattedAddress() {
    var form = document.getElementById("addressFormId");
    var htmlDiv = document.getElementById("addressReturnDiv");
    var address;
    var city;
    var state;
    var zipcode;
    
    // Get the values
    address = form.address.value;
    city = form.city.value;
    state = form.state.value;
    zipcode = form.zip.value;
    
    //Output collected values
    htmlDiv.innerHTML = "<h4 style='text-indent: 0px; padding: 0 25px; margin: 5px 5px;'>" + address + "</h4>"
            + "<h4 style='text-indent: 0px; padding: 0 25px; margin: 5px 5px;'>" + city 
            + ", " + state + " "
            + zipcode + "</h4>";
    
    return false;
}