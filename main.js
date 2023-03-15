let zodiacContainer = document.getElementById("zodiacContainer");
let revealZodiacOptions = document.getElementById("zodiac-button");

let sagittariusMessage = document.getElementById("sagittarius");
let capricornMessage = document.getElementById("capricorn");
let aquariusMessage = document.getElementById("aquarius");
let ariesMessage = document.getElementById("aries");
let libraMessage = document.getElementById("libra");
let scorpioMessage = document.getElementById("scorpio");
let virgoMessage = document.getElementById("virgo");
let taurusMessage = document.getElementById("taurus");
let piscesMessage = document.getElementById("pisces");
let geminiMessage = document.getElementById("gemini");
let leoMessage = document.getElementById("leo");
let cancerMessage = document.getElementById("cancer");

let positiveRomance = ["You will finally meet the person who understands your needs and is willing to follow you", 
"Saturns moons are aligned for you! You will have a lot of success in your love life.", 
"You will be surprised to find your love among familiar faces."];

let negativeRomance = ["It is the time to move on. If you have been struggling in the relationship, this is the time to free yourself.",
"Venus is looking the other way. Do not hope to find your life partner anytime soon.",
"Love life will not be active this year. Use the opportunity for personal growth."];

let positiveHealth = ["Crystals from Sirius B are sending healing energy towards you. Your health will blossom.", 
"The long ailing pain in your back will subside. Your body will get a long awaited rest.",
"Your health will rise along with your happiness. First half of the year is the time to be active."];

let negativeHealth = ["Be aware of your health. Illnesses which you have dealt with in the past will appear again.",
"Moons of Jupiter are not aligned. Your headaches will be a regular occurence.",
"You should restrain from hard work and intensive workouts. Your heart needs some rest."];

let positiveWork = ["Your business ventures will be prosperous. Stay clear of the unfamiliar faces.",
"Trust your closest friends and you will gain success professionally.",
"The effort you have been putting in the past year will finally bear fruits. Congratulations!"];

let negativeWork = ["Business ventures will not yield any earnings. Do not be discouraged.",
"Do not invest your savings. Business storms ahead!",
"Be patient. Invest in education, but do not expect any short term earnings."];

revealZodiacOptions.addEventListener('click', event => {
    
    if (zodiacContainer.style.display === "none") {
        document.getElementById("zodiacContainer").style.display = "block";
    } else {
        document.getElementById("zodiacContainer").style.display = "none";
    }
});

sagittariusMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + positiveHealth[j] + "\n" + "\n Your Work: " + positiveWork[k]);
    
});

capricornMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + positiveHealth[j] + "\n" + "\n Your Work: " + negativeWork[k]);
    
});

aquariusMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + positiveWork[k]);
    
});

ariesMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + negativeWork[k]);
    
});

libraMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + negativeRomance[i] + "\n" + "\nYour Health: " + positiveHealth[j] + "\n" + "\n Your Work: " + positiveWork[k]);
    
});

scorpioMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + negativeRomance[i] + "\n" + "\nYour Health: " + positiveHealth[j] + "\n" + "\n Your Work: " + negativeWork[k]);
    
});

virgoMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + negativeRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + positiveWork[k]);
    
});

taurusMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + negativeRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + negativeWork[k]);
    
});

piscesMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + negativeWork[k]);
    
});

geminiMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + positiveWork[k]);
    
});

leoMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + positiveRomance[i] + "\n" + "\nYour Health: " + positiveHealth[j] + "\n" + "\n Your Work: " + negativeWork[k]);
    
});

cancerMessage.addEventListener('click', event => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let k = Math.floor(Math.random()*3);
    alert("Your romance: " + negativeRomance[i] + "\n" + "\nYour Health: " + negativeHealth[j] + "\n" + "\n Your Work: " + positiveWork[k]);
    
});