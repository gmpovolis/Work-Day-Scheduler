function setDate() {
        $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

setDate();

function pullSaved() {
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var saved = localStorage.getItem(id);
        if(saved!==null) {
            $(this).children(".data").val(saved);
        } 
    });
}
pullSaved();

$(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    var saved = $(this).siblings(".data").val();
    localStorage.setItem(time, saved);
})

function colorCode() {
    currentHour= moment().hours();
    $(".time-block").each(function(){
        var hour = parseInt($(this).attr("id"))
        if(hour>currentHour) {
            $(this).addClass("future");
        } else if(hour===currentHour){
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

colorCode();