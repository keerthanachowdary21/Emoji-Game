import {useState} from 'react'
import './index.css'

const NavBar = ({topscore, score, isGameInProgress}) => {
  const [showInstructions, setShowInstructions] = useState(false)

  const handleHowToPlay = () => {
    setShowInstructions(!showInstructions)
  }

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
        <div className="right-container">
          {!isGameInProgress && (
            <div className="Score-container">
              <p className="Score-text">Score: {score}</p>
              <p className="Score-text">Top Score: {topscore}</p>
            </div>
          )}
          <button
            className="how-to-play-button"
            onClick={handleHowToPlay}
            type="button"
          >
            How to Play
          </button>
        </div>

        {/* Instructions Popup */}
        {showInstructions && (
          <div className="instructions">
            <p>Game Rules:</p>
            <p>1️⃣ Click on emojis one by one.</p>
            <p>2️⃣ If you click the same emoji twice, you lose.</p>
            <p>3️⃣ If you click all emojis exactly once, you win.</p>
            <p>
              4️⃣ If you beat your highest score, your Top Score updates
              automatically.
            </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
