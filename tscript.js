var sentences;
var suffle;
var changeButton;
var changeText;
var focus;
var startProcess = 0;
var showTime = [0,0,0,0];
var interval;
var timeStop = false;
var timeTaken;
var wpm;
function list()
{
        sentences = ["After carefully studying hominin fossils found in Kenya, Ethiopia and Chad, German", "scientists have concluded that 4 distinct human species coexisted at the same", "time about 3 million years ago.  What isn't known is how or if they are related and whether they interacted with one another.","Hard to believe, but true.  Sharks kill an average of 5 people per year while cows kill an average of 22 people per year."];
} 
//===========Button reset function=======
function start()
{  
    
    if(startProcess == 0)
        {
           list(); //calling function for sentences
           suffle = sentences[Math.floor(Math.random()*sentences.length)];
           document.getElementById('area').style.display="block";
            changeButton = document.getElementById('button').innerText = "START AGAIN";
            changeText = document.getElementById('text').innerHTML=suffle;
            startProcess++;
        }
    else
    {
        location.reload();
        startProcess=0;
    }
    
}
//==================Spelling check======
function check()
{
    let textEntered = document.getElementById('area').value;
    let shownText = document.getElementById('text').innerHTML.substring(0,textEntered.length);
    
    if(textEntered == document.getElementById('text').innerHTML)
    {
         wpm = parseInt((textEntered.length/ timeTaken)/6);
        document.getElementById('speed').innerHTML="Speed is "+wpm+" wpm";
       clearInterval(interval); document.getElementById('area').style.color="#ffffff";
    document.getElementById('message').innerHTML="Your overall speed is "+wpm+" wpm. But if you want to try again you can go for a next try."
    }else{
    if(textEntered == shownText)
    {
         document.getElementById('area').style.color="#ff6600";
    }else{
        document.getElementById('area').style.color="#ffff00";
    }
    }
}
//==================time===============

function zerobefore(i)
{
    if(i<=9)
        {
            i="0" + i;
        }return i;
}
function runshowTime()
{
   let timeNow=zerobefore(showTime[0])+":"+zerobefore(showTime[1]); document.getElementById("time").innerHTML=timeNow;
    showTime[3]++;
    
    showTime[0]=Math.floor((showTime[3]/100)/60);
    showTime[1]=Math.floor((showTime[3]/100)-(showTime[0]*60));
    timeTaken= parseFloat((showTime[0]+showTime[1])/60);
}
function startTime()
{
    
let textEnteredLength=document.getElementById('area').value.length;
    if(textEnteredLength === 0 && !timeStop)
        {
            timeStop = true;
    interval = setInterval(runshowTime,10);
        }
}
//===============event listener============

area.addEventListener("keypress",startTime,false);
area.addEventListener("keyup",check,false);
