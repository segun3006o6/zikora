//set the date we're counting down to
const countDownDate = new Date("february 27 2025").getTime();

//update countdown every 1 second
const countdown = setInterval(() => {


    //get today's date and time
    const now = new Date().getTime();{

        //find the distance between now and the count date
        const distance = countDownDate - now;
        
        //time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //display the result in the element with id="countdown"
    //document.getElementById("countdown").innerHTML = 'zikora's 19th birthday is in:${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`; 

         
 //if countdown is over display a message
        if (distance < 100000000) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'ZIKORA"S BIRTHDAY';
          }

    }
}, 1000);