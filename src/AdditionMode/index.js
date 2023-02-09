import { useState, useEffect } from "react";
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

  const answerVariable1 = randomAnswer1()
  const answerVariable2 = randomAnswer2()
  const answerVariable3 = randomAnswer3()
  const answerVariable4 = randomAnswer4()


  const equation = () => {
    return firstVariable + secondVariable
  }


  const actualAnswer = equation()

  const possibleAnswers = [actualAnswer, actualAnswer - 5, actualAnswer + 5, 'Answer not available']

  const equationToString = `${firstVariable} + ${secondVariable} ?`

  const currentStreak = streak

  const updateAnswerGuess = (e) => {
    setAnswerGuess(e.target.value)
  }

  const compare = (e) => {
    e.preventDefault()
    console.log(+answerGuess)
    console.log(+actualAnswer)
    console.log(+answerGuess === +actualAnswer)
    return +answerGuess === +actualAnswer
  }

  useEffect(() => {
    if(compare === true) {
      setStreak(+currentStreak + 1)
    }
  }, [streak])


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
