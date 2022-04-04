var hourArray = [
    {
        hourKey: 9, 
        hourDisplay: "9am"
    },
    {
        hourKey: 10, 
        hourDisplay: "10am"
    },
    {
        hourKey: 11, 
        hourDisplay: "11am"
    },
    {
        hourKey: 12, 
        hourDisplay: "12pm"
    },
    {
        hourKey: 13, 
        hourDisplay: "1pm"
    },
    {
        hourKey: 14, 
        hourDisplay: "2pm"
    },
    {
        hourKey: 15, 
        hourDisplay: "3pm"
    },
    {
        hourKey: 16, 
        hourDisplay: "4pm"
    },
    {
        hourKey: 17, 
        hourDisplay: "5pm"
    }
];
$(document).ready(function() {
    hourArray.forEach(function(hour) {
        var rowHour = hour.hourKey;
        var momentHour = moment().hour()
        var colorCode = "future"
        if (rowHour < momentHour){
            colorCode = "past"
        }
        // else {
        //     colorCode = "present"
        // }
        else if (rowHour === momentHour){
            colorCode = "present"
        }
        console.log(hour, momentHour)
        var row = $("<div>").addClass("row time-block").attr("id", hour.hourKey)
        var hourDiv = $("<div>").addClass("col-1 hour").text(hour.hourDisplay)
        var textAreaEl = $("<textarea>").addClass("col-10 description "+ colorCode).val(localStorage.getItem(hour.hourKey))
        var saveBtn = $("<button>").addClass("btn saveBtn").text("save")
        $(".container").append(row.append(hourDiv,textAreaEl,saveBtn))
    })
    $(".saveBtn").on("click", function(){
        var activity = $(this).siblings(".description").val();
        
        var hourKey = $(this).parent().attr("id");
        localStorage.setItem(hourKey, activity);
        
    })

})