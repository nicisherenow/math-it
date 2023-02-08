import { useState, useEffect } from "react";
import '../index.css'

export default function ZenMode() {
  let [val, setVal] = useState(1)

  const rand1 = () => {
    return Math.floor((Math.random()* 85) + 5)
  }
  const rand2 = () => {
    return Math.floor((Math.random()* 85) + 5)
  }
  const rand3 = () => {
    return Math.floor((Math.random()* 85) + 5)
  }
  const rand4 = () => {
    return Math.floor((Math.random()* 85) + 5)
  }


  useEffect(() => {
    rand1()
    rand2()
    rand3()
    rand4()
  }, [val])

  const randval1 = () => {
    return Math.floor((Math.random() * val) * 2)
  }
  const randval2 = () => {
    return Math.floor((Math.random() * val) * 2)
  }
  const randval3 = () => {
    return Math.floor((Math.random() * val) * 2)
  }
  const randval4 = () => {
    return Math.floor((Math.random() * val) * 2)
  }

  let variable1 = randval1()
  let variable2 = randval2()
  let variable3 = randval3()
  let variable4 = randval4()
  let base = val

  const unStuck = () => {
    setVal(base += 1)
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    if (+e.target.value > val) {
      setVal(1)
      alert('Oh no, you lost. Try again?')
    } else {
      setVal(base += +e.target.value)
    }
  }

  return (
    <div className="game-board">
      <div className="click-val-container">
        <div className="click-val" onClick={unStuck}>{val}</div>
      </div>
      <button className="button-target-1"
           style={{position: "absolute", top: `${rand1()}vh`, left: `${rand1()}vw`}}
           onClick={handleOnClick}
           value={variable1}>{variable1}</button>
      <button className="button-target-1"
           style={{position: "absolute", top: `${rand2()}vh`, left: `${rand2()}vw`}}
           onClick={handleOnClick}
           value={variable2}>{variable2}</button>
      <button className="button-target-1"
           style={{position: "absolute", top: `${rand3()}vh`, left: `${rand3()}vw`}}
           onClick={handleOnClick}
           value={variable3}>{variable3}</button>
      <button className="button-target-1"
           style={{position: "absolute", top: `${rand4()}vh`, left: `${rand4()}vw`}}
           onClick={handleOnClick}
           value={variable4}>{variable4}</button>
    </div>
  );
}
