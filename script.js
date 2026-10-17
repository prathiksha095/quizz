const quizForm = document.getElementById("quizForm");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

const correctAnswers = {
  q1: "b",
  q2: "a",
  q3: "c",
  q4: "a",
  q5: "c"
};

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let score = 0;
  let answered = 0;

  for (const question in correctAnswers) {
    const answer = formData.get(question);

    if (answer !== null) {
      answered++;

      if (answer === correctAnswers[question]) {
        score++;
      }
    }
  }

  if (answered === 0) {
    result.textContent =
      "Please select an answer before submitting!";
    result.style.color = "#dc2626";
    return;
  }

  if (answered < 5) {
    result.textContent =
      `Please answer all 5 questions. You answered ${answered}.`;
    result.style.color = "#b45309";
    return;
  }

  let message = `Your score: ${score}/5. `;

  if (score >= 4) {
    message += "Excellent work! 🎉";
  } else if (score >= 3) {
    message += "Good effort! Keep practicing. 👍";
  } else {
    message += "Keep learning and try again! 💪";
  }

  result.textContent = message;
  result.style.color = score >= 3 ? "#15803d" : "#dc2626";
});

restartBtn.addEventListener("click", function () {
  quizForm.reset();
  result.textContent = "";
});