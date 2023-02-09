import { NavLink } from "react-router-dom"
import './Home.css'

export default function Home () {

  return (
    <div className="home-container">
      <div className="general-overview">
        <h1 className="general-instructions">How to play: </h1>
        Your number is represented in the center as the black dot with white text. You can tap on numbers that are less than or equal to your current number in order to increase your value.
        Have fun, for an additional challenge try speed mode. Or just enjoy yourself on the zen mode.
      </div>
      <div className="zen-mode-container">
        <NavLink to='/addition' className="zen-mode-button">
          Addition
        </NavLink>
        <div className="zen-mode-description">
          Feel free to practice your addition here! It will choose two random numbers up to 100 and
        </div>
      </div>
      <div className="created-by">
        <div>Created by: </div>
        <a href='https://github.com/nicisherenow'>Github</a>
        <a href='https://www.linkedin.com/in/nicholas-talbot-5441a4242/'>LinkedIn</a>
      </div>
    </div>
  )
}
