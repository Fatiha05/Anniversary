const reasons = [

"Your smile makes every bad day disappear. ❤️",

"You always make me feel safe.",

"I love how you care about everyone.",

"You understand me without words.",

"You are my favorite person.",

"You support every dream I have.",

"You make ordinary moments magical.",

"You are my home.",

"You are my peace.",

"I'll always choose you. ❤️"

];

let index = 0;

document.getElementById("reasonText").innerHTML = reasons[index];

function nextReason(){

index++;

if(index < reasons.length){

document.getElementById("reasonNumber").innerHTML="Reason #"+(index+1);

document.getElementById("reasonText").innerHTML=reasons[index];

}

else{

location.href="quiz.html";

}

}