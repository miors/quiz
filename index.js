const correctAnswers = ["D", "A", "C", "B", "C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

console.log(questions[0]);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });
  console.log(score);

  scrollTo(0, 0);
  result.classList.remove("hide");

  result.querySelector("p").textContent = `You score ${score}/5!`;
  console.log(result.querySelector("p").textContent);
});
