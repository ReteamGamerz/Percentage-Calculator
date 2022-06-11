
// ----- Code For Navigation -----//

function redirect_marks() {
    window.location = "marks_percent.html";
}

function redirect_home() {
    window.location = "index.html";
}

function redirect_total() {
    window.location = "total_percent.html";
}

function redirect_help() {
    window.location = "help.html";
}

function redirect_feedback() {
    window.location = "feedback.html";
}


//---- Variables ----//

var marks_input = ""
var marks_total = ""

// Get Percentage //

function getPercent() {

    marks_input = document.getElementById("input_received").value;
    marks_total = document.getElementById("input_total").value;

    answer = ( marks_input / marks_total) * 100;
    marksLost = (marks_total - marks_input);
  
    document.getElementById("error").innerHTML = "Percentage = " + answer + "%";
    document.getElementById("error_marks").innerHTML = "Marks Lost = " +  marksLost + "";
  
    console.log("Percentage = " + answer);
    console.log("Marks Lost = " + marksLost);

    // ------- Code For Zenbot ------- //

    
  
  }

  /// ------------------------ Code For Clear Input ------------------------///

  function ClearInput(){

    document.getElementById("input_received").value = "";
    document.getElementById("input_total").value = "";

    document.getElementById("error").innerHTML = "Percentage : ";
    document.getElementById("error_marks").innerHTML = "Marks Lost : ";

    console.log("Deleted Input -> Marks Recieved");
    console.log("Deleted Input -> Total Marks");

    console.log("Deleted Input -> Percentage ");
    console.log("Deleted Input -> marks Lost ");


  }





//--- Code For The Buttons ----//

function get_10() {
   document.getElementById("input_total").value = "10";
}

function get_20() {
    document.getElementById("input_total").value = "20";
}

function get_30() {
    document.getElementById("input_total").value = "30";
}

function get_40() {
    document.getElementById("input_total").value = "40";
}

function get_50() {
    document.getElementById("input_total").value = "50";
}

function get_60() {
    document.getElementById("input_total").value = "60";
}

function get_70() {
    document.getElementById("input_total").value = "70";
}

function get_80() {
    document.getElementById("input_total").value = "80";
}

function get_90() {
    document.getElementById("input_total").value = "90";
}

function get_100() {
    document.getElementById("input_total").value = "100";
}

// ---- Code For Help Navigation ---- //

function Help() {
    window.location = "help.html";
}



