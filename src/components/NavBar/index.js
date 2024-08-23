// Write your code here.

import './index.css'

const NavBar = props => {
  const {topscore, score, isgameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="container">
        <div className="log-head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="log-heading">Emoji Game</h1>
        </div>
        {!isgameInProgress && (
          <div className="Score-container">
            <p className="Score-text">Score: {score}</p>
            <p className="Score-text">Top Score: {topscore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
