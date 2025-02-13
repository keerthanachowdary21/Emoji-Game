import './index.css'

const WinOrLoseCard = props => {
  const {score, topscore, toClickPlayAgainGame} = props
  const gameState = topscore === 12
  const imgUrl = gameState
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickingPlayAgain = () => {
    toClickPlayAgainGame()
  }

  return (
    <div className="result-container1">
      <div className="scorecard-container1">
        <h1 className="your-score-heading1">
          You {gameState ? 'Won' : 'Lose'}
        </h1>
        {gameState ? (
          <p className="best-score-para1">Best Score</p>
        ) : (
          <p className="best-score-para1">Score</p>
        )}
        <p className="score-para1">{score}/12</p>
        <button
          className="play-again-button1"
          onClick={onClickingPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>

      <div className="scorecard-image-container1">
        <img className="scorecard-image1" alt="win or lose" src={imgUrl} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
