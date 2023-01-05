const quizDB=[
{

    question: "Q1:Which of the following JavaScript cannot do?",
    a: "JavaScript can react to events",
    b: "JavaScript can manipulate HTML elements",
    c: "JavaScript can be use to validate data",
    d: "All of the Above",
    ans: "ans4"
},
{
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheeps",
    c: "Cartoon Style Sheets",
    d: "Cascading Style Super",
    ans: "ans1"   
},

{
    question: "Q3: _________ keyword is used to declare variables in javascript.",
    a: "Var",
    b: "Dim",
    c: "String",
    d: "None of the above",
    ans: "ans1"
},
{
    question: "Q4:Which is not a property of attribute Behaviour of Marquee tag?",
    a: "alternate",
    b: "blur",
    c: "scroll",
    d: "slide",
    ans: "ans2"
}
];

const question= document.querySelector('.Questions');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;

const loadQuestion = () => {
 
    const questionList=quizDB[questionCount];
    question.innerHTML= questionList.question;

    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;

}
loadQuestion();
const getChecked=() =>{
    let ans;
    answers.forEach((curAnsElem) =>{
if(curAnsElem.checked){
    ans=curAnsElem.id;
}
    });
    return ans;
};
const  deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
 }

submit.addEventListener('click' , () =>{
    const checkedAnswer=getChecked();
    console.log( checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
score++;
    };

    questionCount++;
deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
     else{
         showScore.innerHTML=`
         <h3> You scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>`;
        
                 showScore.classList.remove('scoreArea');
    }
});