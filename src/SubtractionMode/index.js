import { useState } from "react"
import '../index.css'

export default function SubtractionMode() {
  const [answerGuess, setAnswerGuess] = useState(0)
  const [streak, setStreak] = useState(0)

  let firstVariable = Math.floor(Math.random() * 100)
  let secondVariable = Math.floor(Math.random() * 100)
  const actualAnswer = firstVariable - secondVariable
  const equationToString = `${firstVariable} - ${secondVariable} ?`

  const answerOptions = []
  for (let i = 0; i < 5; i++) {
    answerOptions.push(Math.floor(Math.random() * 200))
  }
  answerOptions[Math.floor(Math.random() * 5)] = actualAnswer

  const handleClick = (option) => {
    setAnswerGuess(option)
    if (option === actualAnswer) {
      setStreak(streak + 1)
    } else {
      setStreak(0)
      alert("Oh no, you missed one! Back to 0")
    }
  }

  return (
    <div>
      <span className="streak-style">{streak}</span>
      <h1 className="equation-style">{equationToString}</h1>
      {answerOptions.map((option, i) => (
        <button className={`button-${i}`} key={i} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
