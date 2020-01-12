var score = 0
var i = 1
var ans = 1

var audio = document.createElement("audio");
audio.setAttribute("src","complete.mp3");

function myFunction() {
  document.getElementById("img1").style.visibility = "hidden";
  document.getElementById("img2").style.visibility = "hidden";
}

function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
      document.getElementById( "img1" ).style.visibility = "visible";
      document.getElementById("question").value="You are right"
      audio.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.getElementById( "img2" ).style.visibility = "visible";
        audio.play();
    }
    document.view.qscore.value=score
}
else if (ans===2){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        document.getElementById( "img1" ).style.visibility = "visible";
        audio.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.getElementById( "img2" ).style.visibility = "visible";
        audio.play();

    }
    document.view.qscore.value=score
}

else if (ans==3){
  y = document.getElementById("qans").value
    if(yy==="C"){
    document.getElementById("question").value="You are right"
    document.getElementById( "img1" ).style.visibility = "visible";
    audio.play();
     score++
   }
   else {
       document.getElementById("question").value="You are wrong"
       document.getElementById( "img2" ).style.visibility = "visible";
       audio.play();
   }
   document.view.qscore.value=score
}

else if (ans==4){
  y = document.getElementById("qans").value
    if(yy==="B"){
    document.getElementById("question").value="You are right"
    document.getElementById( "img1" ).style.visibility = "visible";
    audio.play();
     score++
   }
   else {
       document.getElementById("question").value="You are wrong"
       document.getElementById( "img2" ).style.visibility = "visible";
       audio.play();
   }
   document.view.qscore.value=score
}

else if (ans==5){
  if(yy==="A"){
  document.getElementById("question").value="You are right"
  document.getElementById( "img1" ).style.visibility = "visible";
  audio.play();
   score++
 }
 else {
     document.getElementById("question").value="You are wrong"
     document.getElementById( "img2" ).style.visibility = "visible";
     audio.play();
 }
 document.view.qscore.value=score
}

else if(ans==6){
  if(yy==="C"){
  document.getElementById("question").value="You are right"
  document.getElementById( "img1" ).style.visibility = "visible";
  audio.play();
   score++
 }
 else {
     document.getElementById("question").value="You are wrong"
     document.getElementById( "img2" ).style.visibility = "visible";
     audio.play();
 }
 document.view.qscore.value=score
}

else if(ans==7){
  if(yy==="C"){
  document.getElementById("question").value="You are right"
  document.getElementById( "img1" ).style.visibility = "visible";
  audio.play();
   score++
 }
 else {
     document.getElementById("question").value="You are wrong"
     document.getElementById( "img2" ).style.visibility = "visible";
     audio.play();
 }
 document.view.qscore.value=score
}

else if(ans==8){
  if(yy==="B"){
  document.getElementById("question").value="You are right"
  document.getElementById( "img1" ).style.visibility = "visible";
  audio.play();
   score++
 }
 else {
     document.getElementById("question").value="You are wrong"
     document.getElementById( "img2" ).style.visibility = "visible";
     audio.play();
 }
 document.view.qscore.value=score
}

else if(ans==9){
  if(yy==="D"){
  document.getElementById("question").value="You are right"
  document.getElementById( "img1" ).style.visibility = "visible";
  audio.play();
   score++
 }
 else {
     document.getElementById("question").value="You are wrong"
     document.getElementById( "img2" ).style.visibility = "visible";
     audio.play();
 }
 document.view.qscore.value=score
}

else if(ans==10){
  if(yy==="B"){
  document.getElementById("question").value="You are right"
  document.getElementById( "img1" ).style.visibility = "visible";
  audio.play();
   score++
 }
 else {
     document.getElementById("question").value="You are wrong"
     document.getElementById( "img2" ).style.visibility = "visible";
     audio.play();
 }
 document.view.qscore.value=score
}
	ans++;
}

function main(){
if (i===1){
	document.view.qnum.value=i;
   	document.view.question.value ="Who does Micheal accidentally hit with his car in the parking lot? \na)Meredith \nb)Phyllis \nc)Kelly \nd)Erin";
    document.view.qans.value=""
}
else if (i===2){
	document.view.qnum.value=i;
	document.view.question.value ="Which Dundie award did Pam win on The Dundies (Season 2 Ep.1)? \na)Longest Engagement \nb)Coolest Receptionist \nc)Tidiest Desk \nd)Whitest Sneakers";
    document.view.qans.value=""
}
else if (i==3){
  document.view.qnum.value=i;
	document.view.question.value ="According to Prison Mike, what is the worst thing about prison? \na)The mice \nb)The food \nc)The dementors \nd)The boredom";
    document.view.qans.value=""
}
else if (i==4){
  document.view.qnum.value=i;
	document.view.question.value ="What is the name of the company Ryan sets up that sends messages to all of your devices at once? \na)Borkk \nb)Wuphf \nc)Grrows \nd)All Message";
    document.view.qans.value=""
}
else if (i==5){
  document.view.qnum.value=i;
	document.view.question.value ="What is the name of the senator Angela marries? \na)Robert \nb)Richard \nc)Randy \nd)Ronald";
    document.view.qans.value=""
}
else if (i==6){
  document.view.qnum.value=i;
	document.view.question.value ="What is Erins real first name? \na)Angela \nb)Gloria \nc)Kelly \nd)Angie";
    document.view.qans.value=""
}
else if (i==7){
  document.view.qnum.value=i;
	document.view.question.value ="Which college did Andy attend? \na)Harvard \nb)Dartmouth \nc)Cornell \nd)Princeton";
    document.view.qans.value=""
}
else if (i==8){
  document.view.qnum.value=i;
	document.view.question.value ="Where does Toby move when he leaves his job at Dunder Mifflin? \na)Puerto Rico \nb)Costa Rica \nc)Cuba \nd)Aruba";
    document.view.qans.value=""
}
else if (i==9){
  document.view.qnum.value=i;
	document.view.question.value ="What does Dwight call Justin Beiber? \na)Just a Bever \nb)Bearclaw \nc)Justice Fever \nd)Justice Bever";
    document.view.qans.value=""
}
else if (i==10){
  document.view.qnum.value=i;
	document.view.question.value ="What did Jan name her baby? \na)Carmella \nb)Astrid \nc)Cornelius \nd)Astoria";
    document.view.qans.value=""
}
	i++;
}
