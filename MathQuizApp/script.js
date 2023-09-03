// create a maths que
// maths question will have a random generated
// question type multiplication questioj wuth random number range 1-10
// answer will be the product of the random number range and the random number 
// user will have to answer the que
//on submit answer answer will be compared with the random generated answer
// if hte answer willl be correct than the score will be increment
//if the answer will be wrong than the score will be decremented

const questionE1=document.getElementById("question");
const questionFormEl=document.getElementById("questionForm");
const scoreEl=document.getElementById("score");
let storedAnswer;
let score=0;
const randomNumber=(min,max) =>{
    return Math.floor(Math.random()*(max-min+1)+min);
};
//console.log("randomNumber",randomNumber(20,25));
let number=1;//
const generateQuestion=()=>{
    const randomNumber1=randomNumber(1,10);
    const randomNumber2=randomNumber(1,10);
    const question=`Q ${number}. what is ${randomNumber1} multiply by ${randomNumber2}`
    const answer=randomNumber1*randomNumber2;
    return {question,answer};
};

const showQuestion =()=>{
    const {question,answer}=generateQuestion();
    questionE1.innerText=question;
    storedAnswer=answer;
};
showQuestion();

const cheakAnswer=(event)=>{
    event.preventDefault();// this will help to prevent reset que on clicking on submit button
    const formData=new FormData(questionFormEl);

    const userAnswer=formData.get("answer");
    if(userAnswer == storedAnswer){
        score +=1; 
    } else{
        score -=1;
    }
    scoreEl.innerText = score;
    event.target.reset();// this will help to reset the value after submition
    showQuestion();
    number++;//

    console.log("answer",userAnswer);
};