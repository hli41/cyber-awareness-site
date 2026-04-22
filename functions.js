const form = document.querySelector(".quiz-card");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page refresh

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // loop through each question
    for (let q in correctAnswers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      
      if (!selected) {
        result.textContent = "Please answer all questions.";
        return; // stop if any question is unanswered
      }

      if (selected.value === correctAnswers[q]) {
        score++;
      }
    }

    // display total score
    result.textContent = `You got ${score} out of ${totalQuestions} correct!`;
  });
}