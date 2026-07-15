function updateClock(){

    const now=new Date();

    document.getElementById("clock").innerHTML=

    now.toLocaleTimeString("th-TH");

    document.getElementById("date").innerHTML=

    now.toLocaleDateString("th-TH",{

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    });

}

setInterval(updateClock,1000);

updateClock();