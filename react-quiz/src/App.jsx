import { useState } from "react"
import "./App.css"
import { QUESTIONS } from "./questions"

function App() {
	const [currentQuestionId, setCurrentQuestionId] = useState(0)
	const [score, setScore] = useState(0)
	const [displayResult, setDisplayResult] = useState(false)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const currentQuestion = QUESTIONS[currentQuestionId]

	const handleSubmit = (event) => {
		setSelectedAnswer(event.target.value)
		handleAnswer(event.target.value)
		setTimeout(() => {
			handleNextQuestion()
		}, 1000)
	}

	const handleAnswer = (answerSelected) => {
		if (answerSelected == currentQuestion.correctAnswerId) {
			setScore((prev) => prev + 1)
		}
	}

	const handleNextQuestion = () => {
		if (currentQuestionId !== QUESTIONS.length - 1) {
			setCurrentQuestionId((prev) => prev + 1)
		} else {
			setDisplayResult(true)
			setCurrentQuestionId(0)
		}
		setSelectedAnswer(null)
	}

	const handleRestart = () => {
		setDisplayResult(false)
		setScore(0)
	}

	const getAnswerClass = (answerId) => {
		if (!selectedAnswer) return ""
		
		if (answerId == currentQuestion.correctAnswerId) {
			return "correct"
		} else if (answerId == selectedAnswer) {
			return "incorrect"
		}
	}
	


	return (
		<>
			{displayResult ? (
				<>
					<h1>Result</h1>
					<p>
						You scored {score} out of {QUESTIONS.length}
					</p>
					<button onClick={handleRestart}>Restart</button>
				</>
			) : (
				<>
					<h1>{currentQuestion.question}</h1>
					<ul className="answers">
						{currentQuestion.answers.map((answer) => (
							<li className="label" key={answer.id}>
								<label className={getAnswerClass(answer.id)}>
									{answer.text}
									<input type="radio" id={answer.id} value={answer.id} onClick={handleSubmit} disabled={selectedAnswer} />
								</label>
							</li>
						))}
					</ul>
					<p>
						Score: {score} / {QUESTIONS.length}
					</p>
				</>
			)}
		</>
	)
}

export default App
