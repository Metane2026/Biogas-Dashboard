// ================================
// BIOGAS OPERATION CENTER V2
// ================================

// ---------- นาฬิกา ----------

function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString("th-TH");

    const date = now.toLocaleDateString("th-TH",{

        weekday:"long",

        day:"numeric",

        month:"long",

        year:"numeric"

    });

    document.getElementById("clock").innerHTML=time;
    document.getElementById("date").innerHTML=date;

}

setInterval(updateClock,1000);

updateClock();


// ---------- Checklist ----------

const checkboxes=document.querySelectorAll('input[type="checkbox"]');

const progressBar=document.getElementById("progressBar");

const progressText=document.getElementById("progressText");

function updateProgress(){

    const total=checkboxes.length;

    let checked=0;

    checkboxes.forEach(box=>{

        if(box.checked){

            checked++;

        }

    });

    const percent=Math.round((checked/total)*100);

    progressBar.style.width=percent+"%";

    progressText.innerHTML=percent+"%";

}

checkboxes.forEach(box=>{

    box.addEventListener("change",updateProgress);

});

updateProgress();


// ---------- Animation ----------

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(30px)";

    setTimeout(()=>{

        card.style.transition="0.6s";

        card.style.opacity="1";

        card.style.transform="translateY(0px)";

    },index*120);

});


// ---------- Greeting ----------

const hour=new Date().getHours();

let greeting="";

if(hour<12){

    greeting="🌞 สวัสดีตอนเช้า";

}

else if(hour<17){

    greeting="☀️ สวัสดีตอนบ่าย";

}

else{

    greeting="🌙 สวัสดีตอนเย็น";

}

console.log(greeting);


// ---------- Demo Alarm ----------

function randomAlarm(){

    const alarms=[

        "🟢 ระบบทำงานปกติ",

        "🟢 Bio Scrubber ปกติ",

        "🟢 Pump ทำงานปกติ",

        "🟢 Boiler พร้อมใช้งาน"

    ];

    const random=Math.floor(Math.random()*alarms.length);

    console.log(alarms[random]);

}

setInterval(randomAlarm,5000);