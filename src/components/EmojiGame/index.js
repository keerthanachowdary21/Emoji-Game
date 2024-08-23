/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topscore: 0,
    isgameInProgress: false,
    clickedEmojisList: [],
  }

  toClickPlayAgainGame = () => {
    this.setState({isgameInProgress: false, clickedEmojisList: [], score: 0})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  toSetTheTopScore = toTopScoreInput => {
    const {topscore} = this.state
    this.setState({score: toTopScoreInput, isgameInProgress: true})
    if (toTopScoreInput > topscore) {
      this.setState({topscore: toTopScoreInput})
    }
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.toSetTheTopScore(clickedEmojisLength)
    } else {
      this.setState(previousState => ({score: previousState.score + 1}))
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.toSetTheTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, topscore, isgameInProgress} = this.state
    return (
      <div className="main-conatiner">
        <NavBar
          score={score}
          topscore={topscore}
          isgameInProgress={isgameInProgress}
        />
        <ul className="unorder-list">
          {isgameInProgress ? (
            <WinOrLoseCard
              score={score}
              topscore={topscore}
              toClickPlayAgainGame={this.toClickPlayAgainGame}
            />
          ) : (
            shuffledEmojisList.map(eachEmoji => (
              <EmojiCard
                eachEmoji={eachEmoji}
                key={eachEmoji.id}
                clickEmoji={this.clickEmoji}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
