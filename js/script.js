let Quiz = [
    {
        question: "What does HTML stand for? ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        option: [
            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: 2,
    },
    {
        question: "What does CSS stand for?",
        option: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet",
        ],
        answer: 3,
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        option: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section",
        ],
        answer: 3,
    },
    {
        question:
            "What is the correct format for aligning written content to the center of the page in CSS?",
        option: [
            "Text-align:center;",
            "Font-align:center;",
            "Text:align-center;",
            "Font:align-center;",
        ],
        answer: 1,
    },
    {
        question:
            "What is the correct format for changing the background colour of a div in CSS?",
        option: [
            "Bg-color:red;",
            "bg:red;",
            "Background-colour:red;",
            "Background-color:red;",
        ],
        answer: 4,
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        option: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: 4,
    },
    {
        question: "Which is the correct CSS syntax?",
        option: [
            "Body {color: black}",
            "{body;color:black}",
            "{body:color=black(body}",
            "body:color=black",
        ],
        answer: 1,
    },
    {
        question:
            "In CSS, what is the correct option to select all the tags on a page?",
        option: ["<p> { }", ".p { }", "#p { }", "* { }"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text italic?",
        option: ["Italic", "II", "IT", "I"],
        answer: 4,
    },
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const mark = document.querySelector('#mark');

const clear = document.querySelector('#clear');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const submit = document.querySelector('#submit');
const clearoptions = document.querySelector('#clear');

const answers = document.querySelectorAll('.answer');


let questioncount =0;

const loadQuestion = () => {
  
     var curcircle =(questioncount);
    var element = document.getElementById(curcircle);
    element.classList.add("curr");
    const questionlist = Quiz[questioncount];
    question.innerHTML = questionlist.question;
    option1.innerText = questionlist.option[0];
    option2.innerText = questionlist.option[1];
    option3.innerText = questionlist.option[2];
    option4.innerText = questionlist.option[3];
    $("#mark").prop("checked", false);

}

$(function (){

  //time code starts
  let totaltime=600;
  let min=0;
  let sec=0;

  let counter=0;
  let timer =setInterval(function(){
      counter++;
      min=Math.floor((totaltime-counter)/60);
      sec=totaltime- min*60- counter;
      $(".timer span").text(min +":"+sec);
      // console.log(`min ${min}`);
      // console.log(`sec ${sec}`);
      //console.log(questioncount);
      $(".line1 span").text(1+questioncount +"/"+ Quiz.length);

  },1000);
  //time code ends

});

loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
          answer=curAnsElem.id;
        }
    });
    return answer;
};
 const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
     $("#review").prop("checked", false);
 }

submit.addEventListener('click', () =>{

  const checkedAnswer = getCheckAnswer();
  //console.log(checkedAnswer);
  questioncount++;
  var curcircle =(questioncount-1);
  var element = document.getElementById(curcircle);
  element.classList.add("visited");
  if(questioncount>=0 && questioncount < Quiz.length){
    loadQuestion();
     deselectAll();

  }
  else {
    questioncount=Quiz.length-1;
    loadQuestion();
  }


});

prev.addEventListener('click', () =>{
  var curcircle =(questioncount);
  var element = document.getElementById(curcircle);
  element.classList.add("notsubmitted");
  questioncount--;
  if(questioncount>=0 && questioncount < Quiz.length){
    loadQuestion();
     deselectAll();
  }
  else {
    questioncount=0;
    loadQuestion();
  }
});
next.addEventListener('click', () =>{
   var curcircle =(questioncount);
  var element = document.getElementById(curcircle);
  element.classList.add("notsubmitted");
  questioncount++;
  if(questioncount>=0 && questioncount < Quiz.length){
    loadQuestion();
     deselectAll();
  }
  else {
    questioncount=Quiz.length-1;
    loadQuestion();
  }
});
clearoptions.addEventListener('click', () =>{
    deselectAll();
});
mark.addEventListener('click', ()=>{
    var curcircle =(questioncount);
  var element = document.getElementById(curcircle);
  element.classList.add("marked");
  questioncount++;
  if(questioncount>=0 && questioncount < Quiz.length){
    loadQuestion();
     deselectAll();
  }
  else {
    questioncount=Quiz.length-1;
    loadQuestion();
  }
});



