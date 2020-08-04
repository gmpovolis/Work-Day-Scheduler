$(function initialize(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //puts the day month number of day in the month in the jumbotron

var time = moment().format("LT");
console.log("time: " + time);
var currentHour = moment().format("LT").charAt(0);
if(moment().format('LT').charAt(1)==1 || moment().format('LT').charAt(1)==2){
    currentHour += moment().format('LT').charAt(1);
}
//pulls the current hour from the moment.js
console.log("currentHour: " + currentHour);

var currentAm = moment().format("LT").charAt(5);
currentAm += moment().format("LT").charAt(6);
console.log("AM or PM: " + currentAm);
//pulls if it is AM or PM

var index = 0;
//index increments with each row

var localStartHour = 9;
//initializes the local start hour to 9
//this variable is for comparisons with the value of the milHour

var timeDisplay = 9;
//initializes the time for the time display
var localAmPm = "AM";
// AM or PM variable for the time Display 

var milHour = currentHour;
if(currentAm==="PM"){
    milHour= milHour + 12;
}
console.log("milHour: " + milHour)
// initializes a military time variable for easy comparisons and sets it to the current hour also changes it into military time if it is PM

for(var i = 0; i<9; i++){
    $(".container").append('<div class="row"  id="myRow'+index+'"></div>');
    //creates the row that the three elements being created go in

    var hourDisplay = $("<div class='hour time-block' id='hour" +index+ "'>");
    $("#myRow"+index).append(hourDisplay);
    //creates the hour display section in the row
    $("#hour"+index).text(timeDisplay +  " " + localAmPm);
    var pastInput = $("<input type='text' class='past description' id='input"+index+"'>")
    var presentInput = $("<input type='text' class='present description' id='input"+index+"'>")
    var futureInput = $("<input type='text' class='future description' id='input"+index+"'>");

    if(milHour<localStartHour){
        //set to future
        $("#myRow"+index).append(futureInput);
    } else if(milHour==localStartHour){
        // set to present
        $("#myRow"+index).append(presentInput);
    } else{
        // set to past
        $("#myRow"+index).append(pastInput);        
    }
    if(!localStorage.getItem('text'+index=="")){
    $("#input"+index).text(localStorage.getItem('text'+index))
    
    //adds local storage info for that indexed row
    }
   
    var makeBtn = $('<button class="saveBtn" id="btn'+index+'">');
    $("#myRow"+index).append(makeBtn);
    $("button").text("Save");
    // make save button
    
    console.log('milHour: '+ milHour+ ' hourDisplay: '+ timeDisplay + ' localStartHour: ' +  localStartHour + ' Index: ' + index);
    localStartHour++;
    timeDisplay++;
    index++;
    if(timeDisplay===13){
        timeDisplay = 1;
        localAmPm = "PM"
        //Sets the localAmPm variable to PM and sets timeDisplay to begin the PM values display
    }
}

$("button").on("click", function(event){
    event.preventDefault();
    console.log(this.id);
    var clickIndex = this.id.charAt(3);
    //sets clickIndex to the row index of the button clicked
    var inputText = $("#input"+clickIndex).val();
    // sets inputText to the text in the input field in the row of the button clicked
    localStorage.setItem('text'+clickIndex, inputText);
    // saves the inputText to a text+clickIndex key related to the row clicked
console.log(localStorage.getItem('text'+clickIndex));
});
})
