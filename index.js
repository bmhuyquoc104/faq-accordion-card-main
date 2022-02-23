const questions = document.querySelectorAll(".card__question");

console.log(questions);
questions.forEach((ques) =>{
    ques.addEventListener("click",() =>{
        ques.classList.toggle("active");
    })
})