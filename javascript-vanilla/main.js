import { QUIZZ_QUESTIONS } from "./DATA"
import "./style.css"

const quizzElement = document.querySelector(".quizz")
const questions = QUIZZ_QUESTIONS
let currentQuestionIndex = 0
let score = 0

function renderQuestion(question) {
  const questionHeader = document.createElement("div");
  questionHeader.classList.add("question");
  questionHeader.innerHTML = `
    <h2>Question ${question.id}</h2>
    <p>${question.question}</p>
  `;

  const answersList = document.createElement("ul");
  answersList.classList.add("answers");

  const answersElements = question.answers.map((answer) => {
    const li = document.createElement("li");
    li.classList.add("answer");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = `answer${answer.id}`;
    input.value = answer.id;

    const label = document.createElement("label");
    label.htmlFor = `answer${answer.id}`;
    label.textContent = answer.text;

    li.appendChild(input);
    li.appendChild(label);

    return li;
  });

  answersElements.forEach((answerElement) => {
    answersList.appendChild(answerElement);
  });

  return [questionHeader, answersList];
}

function displayQuestion(currentQuestionIndex) {
	const [questionHeader, answersList] = renderQuestion(questions[currentQuestionIndex])

	quizzElement.innerHTML = ""
	quizzElement.appendChild(questionHeader)
	quizzElement.appendChild(answersList)

	answersList.addEventListener("click", (e) => {
		if (e.target.type === "radio") {
			const answerId = parseInt(e.target.value)
			checkAnswer(answerId)
		}
	})
}

function nextQuestion() {
	currentQuestionIndex++
	if (currentQuestionIndex === questions.length) {
		endQuizz()
	} else {
		displayQuestion(currentQuestionIndex)
	}
}

function highlightAnswer(answerId) {
	const question = questions[currentQuestionIndex]
	const correctAnswerElement = document.querySelector(`#answer${question.correctAnswerId}`)
	correctAnswerElement.parentElement.classList.add("correct")

	if (answerId !== question.correctAnswerId) {
		const answerElement = document.querySelector(`#answer${answerId}`)
		answerElement.parentElement.classList.add("incorrect")
	}
}

function checkAnswer(answerId) {
	const question = questions[currentQuestionIndex]
	if (answerId === question.correctAnswerId) {
		score++
	}
	highlightAnswer(answerId)
	setTimeout(nextQuestion, 800)
}

function endQuizz() {
	quizzElement.innerHTML = `
    <h2>End of quizz</h2>
    <p>Your score is ${score}</p>
    <button class="restart">Restart</button>
  `

	const restartButton = quizzElement.querySelector(".restart")
	restartButton.addEventListener("click", restartQuizz)
}

function restartQuizz() {
	currentQuestionIndex = 0
	score = 0
	initQuizz()
}

function initQuizz() {
	displayQuestion(0)
}

initQuizz()
