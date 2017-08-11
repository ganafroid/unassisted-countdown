var countDownDate;

function creation(date=null){  
    }


//Setting up time and date picker and their values
$(document).ready(function() {
    var date;
    var time;
    var myDate;
    
//    console.log($('#results').html())

    //Setting up visual aspect and what happens when selecting the date
    $('#selectDate').pickadate({
        format: 'mm/dd/yyyy',
        formatSubmit: 'mm/dd/yyyy',
        hiddenName: true,
        onSet: function(thingSet){
            date = thingSet.select;
            console.log(date)
        }
    });
    


    //Setting up visual aspect and what happens when selecting the time    
    $('#selectTime').pickatime({
        format: 'h:i A',
        formatSubmit: undefined,
        hiddenPrefix: undefined,
        hiddenSuffix: '_submit',
        onSet: function(thingSet){
            time = thingSet.select;
                    console.log(time)    
        }
            
    });
    

    //Setting up what happens when submitting the info - check that all required info has been received before processing     
    $('#submit-btn').on('click', function(event){
        event.preventDefault();
        
        if(!date){
            alert('Please select a date');
            return;
        }
        
        if(!time){
            alert('Please select a time');
            return;
        }
        
        
        //convert date into seconds
        date = date / 1000
        time = time * 60
        countDownDate = date + time
        
        
        //Convert epoch into date
         countDownDate = new Date( countDownDate *1000);
        //document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
    })

});




/*
// The Countdown  - set target date here!!!
var testDate = new Date("dec 7, 2017 13:30:00").getTime();
*/

// Get date
var now = new Date();
//now.setDate(9);


// Setting day
var day = now.getDay();
// Setting up the Background Colour change
console.log (day)
setColor(day);


// Update every second & Function to set the output
var countdownfunction = setInterval(function() {
    if(!countDownDate){
        return;
    };
    
    document.getElementById("pickTimeDateForm").style.display = "none";
    
    // Get time
    var today = new Date().getTime();
    
    // Distance between now & the selected date
    var distance = countDownDate - today;
    
    // The time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // How to output the result
    document.getElementById("info").innerHTML = days + " d  ·  " + hours + " h  ·  "
    + minutes + " m  ·  " + seconds + " s";
    
    // If the countdown is over, display the following
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("info").innerHTML = "Time is up!";
    }
}, 1000);


// The Background Colour
function setColor(day) {
    var background = document.querySelector('.container');
    
    // The Background Colour changes according to the seven days of the week day
    if( day == "0" ) {
        background.style.backgroundColor = "#212c4a";
    } else if( day == "1" ) {
        background.style.backgroundColor = "#0b99ac";
    } else if ( day == "2" ) {
        background.style.backgroundColor = "#113246";
    } else if ( day == "3" ) {
        background.style.backgroundColor = "#205c59";
    } else if ( day == "4" ) {
        background.style.backgroundColor = "#152a9a";
    } else if ( day == "5" ) {
        background.style.backgroundColor = "#0c4569";
    } else {
        background.style.backgroundColor = "#505050";
    } 
}