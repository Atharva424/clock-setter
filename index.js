function clock() {

    var hours = document.getElementById("Hours");
    var minutes = document.getElementById("Min");
    var seconds = document.getElementById("Sec");
    // var period = document.getElementById ("last-time");

    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    // var d=time.getperiods();



    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    // am.innerHTML = d;


}
setInterval(clock, 1000)

function settime(){
    var w = document.getElementById("wake-up").value;

    




    var i = document.getElementById("wake-it").value;




    var c = document.getElementById("wake-down").value;


    
   



    var hourr = new Date()  .getHours();




    if (w == hourr)  {

        document.getElementById('right-third-container').style.backgroundImage = "url(Wakeup.jpg)" ;
        document.getElementById('right-third-container').style.backgroundSize = "100% 100%";
        document.getElementById('right-second-container').innerHTML="GOOD MORNING !! GET  WAKE  UP FAST";

    }


    if (i==hourr){

   



        document.getElementById('right-third-container').style.backgroundImage = "url(lunch.jpg)" ;
        document.getElementById('right-third-container').style.backgroundSize = "100% 100%";
        document.getElementById('right-second-container').innerHTML="LETS HAVE SOME BREAKFAST";

    }


    if (c==hourr){

   



        document.getElementById('right-third-container').style.backgroundImage = "url(nap.jpg)" ;
        document.getElementById('right-third-container').style.backgroundSize = "100% 100%";
        document.getElementById('right-second-container').innerHTML="GOOD EVENING !! LETS TAKE SOME TEA";

    }







    
}


    // if (i== hourr){

    //     document.getElementById('right-third-container').style.backgroundImage = "url(lunch.jpg)" ;
    //         document.getElementById('right-third-container').style.backgroundSize = "100% 100%";
    //         document.getElementById('right-second-container').innerHTML="Lets have some breakfast";
    
    
    // }


// function settime(){
//     var i = document.getElementById("wake-it").value;
// var hourr = new Date() .getHours();

// if (i== hourr){

//     document.getElementById('right-third-container').style.backgroundImage = "url(lunch.jpg)" ;
//         document.getElementById('right-third-container').style.backgroundSize = "100% 100%";
//         document.getElementById('right-second-container').innerHTML="Lets have some breakfast";


// }
// }


