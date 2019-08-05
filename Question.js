var Quiz=[
          "What is your dream job like?",
          "What type of studying do u prefer?",
          "Which of these three words best suits you?",
          "How much do u go well with people?",
          "How good is your creativity and innovation?",
          "Can you learn a lot of things by heart?",
          "If you have to go to village when you work...",
          "Are you ok with maths and barin stroming?",
          "How about salary?",
          "Further learning(Should I say ph.d)?",
          "End"];
var Ans1 =["Just want to do exactly what i desire.",
           "Half by books, half practical. ",
           "Realistic",
           "Not so well.",
           "Below average.",
           "Ah.. Not really",
           "Not gonna happen",
           "My skill is not below average",
           "The more ,the merrier",
           "Hmm..What is Ph.d?"];
var Ans2 =["Lots of work, lots of money. ",
           "I'm much more into practical works.",
           "Social",
           "Very well.",
           "Pretty Good.",
           "Fine by me",
           "Everywhere is my home",
           "Maths is fun,why you ask that?",
           "I don't care",
           "Ph.d sounds nice"];
var Ans3 =["Average income but satisfied of what i do.",
           "I'm good with studying by books. ",
           "Imaginative",
           "Average.",
           "Quite okay.",
           "Not a problem",
           "Kind of,but I don't want to stay there for too long",
           "I hate cause it gives me headache",
           "Salary? I care more about fame",
           "I think I will"];
var Answer=[];
var Point1=['L','M','M','E','L','E','L','M','E','L'];
var Point2=['M','E','L','M','E','L','M','E','L','M'];
var Point3=['E','L','E','L','M','M','E','L','M','E'];
var Universities=["Medical","Techonlogy"];
var I=0;
function Click1() {
  if (Quiz[I+1]===undefined){
    Answer[I]=document.getElementById('button1').value;
    // alert(Answer[I]);
    document.getElementById('button1').value=Point1[I];
    document.getElementById('button2').value=Point2[I];
    document.getElementById('button3').value=Point3[I];
    check(Answer);
  }
  else{
  Answer[I]=document.getElementById('button1').value;
  // alert(Answer[I]);
  document.getElementById('button1').value=Point1[I];
  document.getElementById('button2').value=Point2[I];
  document.getElementById('button3').value=Point3[I];
  document.getElementById('Quiz').innerHTML=Quiz[I];
  document.getElementById('button1').innerHTML=Ans1[I];
  document.getElementById('button2').innerHTML=Ans2[I];
  document.getElementById('button3').innerHTML=Ans3[I];
  I++;
}
}

function Click2() {
  if (Quiz[I+1]===undefined){
    Answer[I]=document.getElementById('button2').value;
    document.getElementById('button1').value=Point1[I];
    document.getElementById('button2').value=Point2[I];
    document.getElementById('button3').value=Point3[I];
    check(Answer);
  }
  else{
  Answer[I]=document.getElementById('button2').value;
  // alert(Answer[I]);
  document.getElementById('button1').value=Point1[I];
  document.getElementById('button2').value=Point2[I];
  document.getElementById('button3').value=Point3[I];
  document.getElementById('Quiz').innerHTML=Quiz[I];
  document.getElementById('button1').innerHTML=Ans1[I];
  document.getElementById('button2').innerHTML=Ans2[I];
  document.getElementById('button3').innerHTML=Ans3[I];
  I++;
}
}
function Click3() {
  if (Quiz[I+1]===undefined){
    Answer[I]=document.getElementById('button3').value;
    document.getElementById('button1').value=Point1[I];
    document.getElementById('button2').value=Point2[I];
    document.getElementById('button3').value=Point3[I];
    check(Answer);
  }
  else{
  Answer[I]=document.getElementById('button3').value;
  document.getElementById('button1').value=Point1[I];
  document.getElementById('button2').value=Point2[I];
  document.getElementById('button3').value=Point3[I];
  document.getElementById('Quiz').innerHTML=Quiz[I];
  document.getElementById('button1').innerHTML=Ans1[I];
  document.getElementById('button2').innerHTML=Ans2[I];
  document.getElementById('button3').innerHTML=Ans3[I];
  I++;
}
}


function check(Answer) {
   var Doc=0;
   var Engi=0;
   var Lang=0;
  for(var k=0;k<Answer.length;k++){
  if(Answer[k]=='M')
    Doc++;
  else if(Answer[k]=='E')
    Engi++;
  else if(Answer[k]=='L')
    Lang++;
  }
  if( (Lang==Engi) || (Lang==Doc) || (Doc==Lang)){
    if(Lang==Engi)
      document.getElementById('resolve').innerHTML="You should go to Engineering or Language";
    else if(Lang==Doc)
      document.getElementById('resolve').innerHTML="You should go to Medical or Language";
    else
      document.getElementById('resolve').innerHTML="You should go to Engineering or Medical";
  }
  else if(Doc > Engi || Doc > Lang){
    document.getElementById('resolve').innerHTML="You should go to Medical";
  }
  else if(Doc < Engi || Engi > Lang){
    document.getElementById('resolve').innerHTML="You should go to Engineering";
  }
  else if(Lang > Engi || Doc < Lang){
    document.getElementById('resolve').innerHTML="You should go to Language";
  }

    document.getElementById('Quiz').style.display="none";
    document.getElementById('button1').style.display="none";
    document.getElementById('button2').style.display="none";
    document.getElementById('button3').style.display="none";
    document.getElementById('start').style.display="";
    document.getElementById('graduate').style.display="";
    document.getElementById('resolve').style.display="";
}

function Try() {
  I=0;
  document.getElementById('Quiz').innerHTML=Quiz[I];
  document.getElementById('button1').innerHTML=Ans1[I];
  document.getElementById('button2').innerHTML=Ans2[I];
  document.getElementById('button3').innerHTML=Ans3[I];
  document.getElementById('button1').value=Point1[I];
  document.getElementById('button2').value=Point2[I];
  document.getElementById('button3').value=Point3[I];
  document.getElementById('Quiz').style.display="block";
  document.getElementById('button1').style.display="block";
  document.getElementById('button2').style.display="block";
  document.getElementById('button3').style.display="block";
  document.getElementById('start').style.display="none";
  document.getElementById('graduate').style.display="none";
  document.getElementById('resolve').style.display="none";
  I++;
}
