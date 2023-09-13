// array with objects representing each question
// each question has a question, 4 answers, and the correct answer

export const QUIZZ_QUESTIONS = [
	{
		id: "q11",
		question: "What does CSS specificity determine when multiple rules apply to an element?",
		answers: [
			{ id: 1, text: "The order in which rules are applied" },
			{ id: 2, text: "The importance of a rule" },
			{ id: 3, text: "Which rule takes precedence" },
			{ id: 4, text: "The color of the element" },
		],
		correctAnswerId: 3,
	},
	{
		id: "q12",
		question: "In React, what is the purpose of the virtual DOM?",
		answers: [
			{ id: 1, text: "To create a 3D user interface" },
			{ id: 2, text: "To optimize memory usage" },
			{ id: 3, text: "To improve rendering performance" },
			{ id: 4, text: "To replace the actual DOM" },
		],
		correctAnswerId: 3,
	},
	{
		id: "q13",
		question: "Which HTML tag is used to embed a video?",
		answers: [
			{ id: 1, text: "<img>" },
			{ id: 2, text: "<video>" },
			{ id: 3, text: "<embed>" },
			{ id: 4, text: "<iframe>" },
		],
		correctAnswerId: 2,
	},
	{
		id: "q14",
		question: "What is the purpose of the JavaScript `map()` function?",
		answers: [
			{ id: 1, text: "To filter elements in an array" },
			{ id: 2, text: "To create a new array with modified elements" },
			{ id: 3, text: "To remove elements from an array" },
			{ id: 4, text: "To sort an array in ascending order" },
		],
		correctAnswerId: 2,
	},
	{
		id: "q15",
		question: "Which of the following is a valid way to declare a JavaScript variable?",
		answers: [
			{ id: 1, text: "const x = 10;" },
			{ id: 2, text: "variable x = 10;" },
			{ id: 3, text: "let x: 10;" },
			{ id: 4, text: "x := 10;" },
		],
		correctAnswerId: 1,
	},
]
