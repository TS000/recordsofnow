import React from 'react'
import PropTypes from 'prop-types'

function SelectedGenre (props) {
  var languages = ['All', 'Disco', 'House', 'Techno', 'Pop'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedGenre ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedGenre: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedGenre: lang,
      }
    });
  }
  render() {
    return (
      <div>
        <SelectedGenre
          selectedGenre={this.state.selectedGenre}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}