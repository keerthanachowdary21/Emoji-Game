import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickbtn = () => {
    clickEmoji(id)
    console.log(id)
    console.log(emojiName)
  }

  return (
    <li className="line-container">
      <button className="btn" onClick={onClickbtn} type="button">
        <img src={emojiUrl} className="emji-pic" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
