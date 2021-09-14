import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateFunction} = props
  const {suggestion} = suggestionDetails
  const update = () => {
    updateFunction(suggestion)
  }
  return (
    <li className="box">
      <p className="element">{suggestion}</p>
      <button type="button" className="but" onClick={update}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
