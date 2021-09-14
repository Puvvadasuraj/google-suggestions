import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeEvent = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateValue = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachResult =>
      eachResult.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="searchBox">
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="searchElement"
              onChange={this.onChangeEvent}
              value={searchInput}
            />
          </div>
          <ul className="ulContainer">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestionDetails={eachItem}
                key={eachItem.id}
                updateFunction={this.updateValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
