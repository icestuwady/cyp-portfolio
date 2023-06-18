//snow
let container = document.getElementById('container');
let count = 70;
for(var i = 0; i<70; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5)+5);
    let blurSnow = Math.floor(Math.random() * 20);
    console.log(leftSnow);
    let div =document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}
//countdown
let countdownDate = new Date("Dec 25," + new Date().getFullYear() + " 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countdownDate - now;
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let mins = Math.floor((distance % (1000*60*60)) / (1000*60));
    let secs = Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
},1000);