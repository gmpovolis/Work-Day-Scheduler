$("#currentDay").text(moment().format("dddd MMMM Do"));

var time = moment().format("LT");
console.log(time);
var currentHour = moment().format("LT").charAt(0);
console.log("Current Hour: " + currentHour);
var currentAm = moment().format("LT").charAt(5);
currentAm += moment().format("LT").charAt(6);
console.log("AM or PM: " + currentAm);
var hour = currentHour + " " + currentAm;
var startHour = moment().subtract(4, 'hour').format('LT').charAt(0);
console.log("Start hour: " + startHour);
var index = 0;

for(var i = 0; i<10; i++){
    $("<div>")
    var row = $("myRow").append('<div class="row past future present saveBtn time-block description"  id="myRow"+index></div>'); 
    $(".container").append(row);
    if(parseInt(startHour)>parseInt(currentHour)){
        $("myRow")
        }; 
    if(startHour===currentHour){
    $("myRow")
    };
    
    $("div").append(hour + " " + currentAm);
}

