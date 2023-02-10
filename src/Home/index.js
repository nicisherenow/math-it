import { NavLink } from "react-router-dom"
import './Home.css'

export default function Home () {

  return (
    <div className="home-container">
      <div className="general-overview">
        <h1 className="general-instructions">How to play: </h1>
        Ready to practice some math!? Here we go! Select which type of math you would like to practice and get to it!
      </div>
      <div className="zen-mode-container">
        <NavLink to='/addition' className="zen-mode-button">
          Addition
        </NavLink>
        <div className="zen-mode-description">
          Feel free to practice your addition here! It will choose two random numbers up to 100.
        </div>
      </div>
      <div className="zen-mode-container">
        <NavLink to='/subtraction' className="zen-mode-button">
          Subtraction
        </NavLink>
        <div className="zen-mode-description">
          Feel free to practice your subtraction here! It will choose two random numbers up to 100.
        </div>
      </div>
      <div className="zen-mode-container">
        <NavLink to='/multiplication' className="zen-mode-button">
          Multiplication
        </NavLink>
        <div className="zen-mode-description">
          Feel free to practice your multiplication here! It will choose two random numbers up to 12.
        </div>
      </div>
      <div className="zen-mode-container">
        <NavLink to='/division' className="zen-mode-button">
          Division
        </NavLink>
        <div className="zen-mode-description">
          Feel free to practice your multiplication here! It will choose two random numbers up to 12.
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
