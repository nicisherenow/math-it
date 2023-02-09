import { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import '../index.css'

export default function AdditionMode() {
  const [answerGuess, setAnswerGuess] = useState(0)
  const [streak, setStreak] = useState(0)
  const rand1 = () => {
    return Math.floor(Math.random() * 100)
  }

  const rand2 = () => {
    return Math.floor(Math.random() * 100)
  }

  const randomAnswer1 = () => {
    return Math.floor(Math.random() * 3)
  }
  const randomAnswer2 = () => {
    return Math.floor(Math.random() * 3)
  }
  const randomAnswer3 = () => {
    return Math.floor(Math.random() * 3)
  }
  const randomAnswer4 = () => {
    return Math.floor(Math.random() * 3)
  }

  const firstVariable = rand1()
  const secondVariable = rand2()

  const answerVariable1 = 0
  const answerVariable2 = 1
  const answerVariable3 = 2
  const answerVariable4 = 3

  const [actualAnswer, setActualAnswer] = useState(firstVariable + secondVariable)

  const possibleAnswers = [actualAnswer, actualAnswer - Math.floor(Math.random() * actualAnswer), actualAnswer + Math.floor(Math.random() * actualAnswer), 'Answer not available']

  const equationToString = `${firstVariable} + ${secondVariable} ?`

  const currentStreak = streak

  const updateAnswerGuess = (e) => {
    setAnswerGuess(e.target.value)
  }

  const compare = (e) => {
    e.preventDefault()
    rand1()
    rand2()
    return +answerGuess === +actualAnswer
  }
  useEffect(() => {
    rand1()
    rand2()
    setActualAnswer(firstVariable + secondVariable)
  }, [actualAnswer])

  useEffect(() => {
    if (+answerGuess === +actualAnswer) {
      setStreak(currentStreak + 1)
      setActualAnswer(firstVariable + secondVariable)
    }
  }, [streak, actualAnswer])

  return (
    <div>
      <span>{streak}</span>
      <h1>{equationToString}</h1>
      <form onSubmit={compare}>
        <button type='submit' onClick={updateAnswerGuess} value={possibleAnswers[answerVariable1]}>{possibleAnswers[answerVariable1]}</button>
      </form>
      <form onSubmit={compare}>
        <button type='submit' onClick={updateAnswerGuess} value={possibleAnswers[answerVariable2]}>{possibleAnswers[answerVariable2]}</button>
      </form>
      <form onSubmit={compare}>
        <button type='submit' onClick={updateAnswerGuess} value={possibleAnswers[answerVariable3]}>{possibleAnswers[answerVariable3]}</button>
      </form>
      <form onSubmit={compare}>
        <button type='submit' onClick={updateAnswerGuess} value={possibleAnswers[answerVariable4]}>{possibleAnswers[answerVariable4]}</button>
      </form>
    </div>
  );
}
