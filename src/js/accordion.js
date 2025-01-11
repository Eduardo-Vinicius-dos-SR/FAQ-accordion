const openAndCloseQuestionElement =
  document.querySelectorAll(".question-title");
const questionText = document.querySelectorAll(".question-text");

openAndCloseQuestionElement.forEach((question, indice) => {
  const questionIcon = document.querySelectorAll("#questionIcon")[indice];

  question.addEventListener("click", () => {
    if (questionText[indice].classList.contains("show")) {
      questionText[indice].classList.remove("show");
      questionIcon.src = "./src/images/icon-plus.svg";
      questionIcon.alt = "Closed question";
      return;
    }

    questionIcon.src = "./src/images/icon-minus.svg";
    questionIcon.alt = "Opened question";

    questionText.forEach((text, i) => {
      if (text !== questionText[indice] && text.classList.contains("show")) {
        text.classList.remove("show");
        document.querySelectorAll("#questionIcon")[i].src =
          "./src/images/icon-plus.svg";
        document.querySelectorAll("#questionIcon")[i].alt = "Closed question";
        return;
      }

      questionText[indice].classList.add("show");
    });
  });
});
