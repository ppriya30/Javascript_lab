function Quiz(questions){
    this.score=0;
    this.questions = questions
    this.questionIndex=0
}
function Question(text,option,answer){
    this.text = text;
    this.option= option
    this.answer=answer
}
Quiz.prototype.getQuestionbyIndex = function(){
    return this.questions[this.questionIndex]
}
  
Quiz.prototype.checkOptionWithAnswer=function(ans){
   
    if(this.getQuestionbyIndex().answer==ans)
    {
      this.score++
    }
    this.questionIndex++
}
Quiz.prototype.isEnded = function(){
    return this.questionIndex ==this.questions.length
}
let questions=[
    new Question("Javascript supports",["Function","XHTML","CSS","HTML"],"Function"),
    new Question("Which language used for styling web pages",["HTML","JQuery","CSS","XML"],"CSS"),
    new Question("Which is not a Javascrip Framwork",["Python","JQuery","Django","NodeJS"],"Django"),
    new Question("Which is used to connect to Database",["PHP","HTML","JS","ALL"],"PHP"),
    new Question("Javascript is a",["Language","Programming Language","Development","All"],"Programming Language"),
    
]
let quiz = new Quiz(questions)
function displayQuestions(){
    if(quiz.isEnded()){
        showScores()
    }
    else{
        let questionElem = document.getElementById("question")
      questionElem.innerText = quiz.getQuestionbyIndex().text
    
      let choices = quiz.getQuestionbyIndex().option
      for(let i=0;i < choices.length;i++){
        let elem = document.getElementById("choice"+i)
        elem.innerText = choices[i];
        handleClickOnBtn("btn"+i,choices[i])
      }
      showProgress()
    }
}
function showProgress(){
    let curr = quiz.questionIndex +1
    let elem = document.getElementById("progress")
    elem.innerText=`Question ${curr} of ${quiz.questions.length}`
}
function handleClickOnBtn(id,choice){
    let buttonElem=document.getElementById(id)
    buttonElem.onclick = function()
    {
      quiz.checkOptionWithAnswer(choice)
      displayQuestions()
    }
}
function showScores(){
    let result = `<h1>Result</h1><h2 id="score">Your Score: ${quiz.score}.And mark percentage is:${(quiz.score/questions.length)*100}%</h2>`
    let quizElem= document.getElementById("quiz")
    quizElem.innerHTML = result
}
    
    
    
displayQuestions()