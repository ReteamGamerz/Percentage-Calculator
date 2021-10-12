
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

 //-----Code to get Percentage ----//

 function getTotalPercent() {

    Maths = document.getElementById("input_received_maths").value;
    Science = document.getElementById("input_received_science").value;
    Social = document.getElementById("input_received_social").value;
    Second = document.getElementById("input_received_2nd").value;
    Third = document.getElementById("input_received_3rd").value;
    English = document.getElementById("input_received_english").value;
    Total_Marks = document.getElementById("input_total").value;

    total = document.getElementById("input_total").value * 6;
    recieved = Number(Maths) + Number(Science) + Number(Social) + Number(Second) + Number(Third) + Number(English);
    answer = (recieved / total) * 100;

    
    document.getElementById("Percentage").innerHTML = "Total Percentage = " + answer + "%";
    document.getElementById("Marks").innerHTML = "Total Marks = " + recieved ;

    console.log("Maths = " + Maths);
    console.log("Science = " + Science);
    console.log("Social = " + Social);
    console.log("2nd Language = " + Second);
    console.log("3rd Language = " + Third);
    console.log("English = " + English);
    console.log("Total Marks Of The Exam = " + Total_Marks);

    console.log("Total Marks = " + total);
    console.log("Recieved Marks = " + recieved);
    console.log("Total Percent = " + answer);

    
 }

// ---- Code For Help Navigation ----//

function Help() {
    window.location = "help.html";
}



