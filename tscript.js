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
        sentences = ["After carefully studying hominin fossils found in Kenya, Ethiopia and Chad, German scientists have concluded that 4 distinct human species coexisted at the same time about 3 million years ago.  What isn't known is how or if they are related and whether they interacted with one another.","Hard to believe, but true.  Sharks kill an average of 5 people per year while cows kill an average of 22 people per year.  In fact, humans are more deadly to sharks than they are to humans.  Humans kill about 100 million sharks per year!","You know all those movies and TV shows where someone very dramatically gets swallowed up by quicksand.  It's just that...dramatic, but not true.  This is because most quicksand is only a few inches deep.  If someone does die in quicksand it usually occurs in tidal basins.  The person gets stuck, then drowns when the tide comes in.","There is some disagreement on this fact and it kind of all boils down to semantics.  The explanation is long and very scientifically technical.  So, I'll let this article explain it.","The trees that existed 300 million years ago do not resemble the trees we have on Earth now.  These trees could grow extremely tall, but they had very shallow root systems, so fell over very easily.  At the time, no microbes existed that could decompose these trees, so as they fell, they stacked up upon each other, eventually creating what one could consider a blessing or a curse","That adds up to 2,700 per day, or 100 every hour.  How?  Malaria is the cause of most deaths.  Mosquitos carry the virus that causes Malaria.  When they bite a human, the virus is transferred to the human who then contracts the disease.  A child dies every 30 seconds from Malaria.","Yes!  It's true!  Pluto was discovered on February 18, 1930.  It hasn't made a full orbit of the sun since that time because of its incredibly slow orbit.  In fact, it takes Pluto 248.09 years to make one orbit around the sun.  Which means that Pluto will make its first full orbit since 1930 on March 23, 2178!","Arcadia trees, which grow all over the African savannah, have a unique defense system. When animals like antelopes start to gobble up its leaves, the tree increases tannin production to levels that are toxic to animals.","What they have instead are better described as eye tubes. Since they can't move these tubes back and forth, owls have developed incredible neck flexibility to be able to see the world around them. They can turn their heads a whopping 270 degrees, whereas humans can only manage about 180.","On Earth, you need heat to fuse metal, but in space, two pieces of the same kind of metal will fuse together with only a little pressure. The process is called cold welding, and it happens because of the lack of atmosphere.","You might not know about the plant genus Rafflesia, but you may have heard about the CORPSE FLOWER, a rare type of jungle plant that attracts pollinating insects to its huge flowers by smelling like death and rot."]
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
