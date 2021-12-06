var read = require("readline-sync")
var chalk = require("chalk")
var name= read.question(chalk.red("what is your name : "))
var wlcome = console.log(chalk.green( "WELCOME TO THE QUIZ " +name +" ALL THE BEST"))
console.log(chalk.blue("Please answer the following question with correct option.---------------------------------------"))



var score = 0
function quiz( question, answer)
{ 
  var userAnswer= read.question(question +" Choose one of the following option ")
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    
    console.log(chalk.red("you are right"))
    score= score+ 1
    console.log(chalk.bold("your score is " + score))
  } else{
    console.log(chalk.red("sorry you are wrong, the right answer is option :" +answer))
    score= score
    console.log(chalk.bold("your score is " + score))
  } console.log(chalk.red("-----------------------------------------"))
}
//quiz("aaaaaaaa ", "b")

var quizarr =[
  {
    question:"1. The Fantastic Four have the headquarters in what building? ?(a) Stark Tower (b) Fantastic headquarters (c)Baxter building (d) Xavier Institute",
    answer: "B",

  },
  {  question:"2. Peter Parker works as a photographer for? (a)The Daily Planet (b) The Daily Bugle (c)The New York Times (d)The Rolling Stone ",
    answer: "a",

  },
  { question:"3.S.H.I.E.L.D.'s highest ranking agent is:? (a)Nick Fury (b)Steven Rogers  (c)Peter Parker (d)Natalia Romanova  ",
    answer: "c",
  },
  {
    question:"4.Captain America was frozen in which war? ?(a) World War I (b) World War II(c)American Civil War ",
    answer: "b",

  },
  { question:"5.Who is Tony Stark’s father?? (a)bluezone (b)Peggy Carter. (c) Howard Stark ",
    answer: "c",
  }, 
  { question:"6. What is the name of Thor’s hammer? (a)Vanir (b)Mjolnir (c) Aesir ",
    answer: "a",
  },
   { question:"7.In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film? ? (a)That he wants to study The Hulk (b)That he knows about S.H.I.E.L.D. (c)That they are putting a team together ",
    answer: "b",
  },  
   { question:"8.What is Captain America’s shield made of? ?(a)Adamantium (b) Vibranium (c)Promethium",
    answer: "b",
  },
  { question:"9.What is the real name of the Black Panther??(a)T’Challa (b)M’Baku (c)N’Jadaka ",
    answer: "c",
  },
  { question:"10. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet??(a)Thor(b)Loki(c)Tony Stark",
    answer: "b",
  }, 

]

 for(var i=0; i< quizarr.length; i++)
  {
   var currQuestion = quizarr[i];
   quiz(currQuestion.question, currQuestion.answer)
  }
   console.log(chalk.bold.yellow.underline("your score is " + score))

var highScore= [
  {
    name: "harry",
    scores: "10",
  },
  {
    name: "ron",
    scores:"9",
  }

]
for(j=0;j<highScore.length;j++)
{
  console.log("LEADER BOARD ")
  console.log(highScore[j])
  { 
    
  }
}console.log(chalk.blue.bold(" SEND A SCREENSHOT IF THE HIGHSCORE BEATEN  "))