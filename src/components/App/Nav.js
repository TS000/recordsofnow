import React from 'react'
import PropTypes from 'prop-types'
var api = require('../../utils/api.js')

function SelectedGenre (props) {
  var genres = ['All', 'Disco', 'House', 'Techno', 'Pop'];
  return (
    <ul className='genres'>
      {genres.map(function (lang) {
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

function GenreGrid (props) {
  return (
    <ul className="popular-crate">

    </ul>
    )
}

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default class Nav extends React.Component {
  constructor(props) {
    super()
    this.state = {
      selectedGenre: 'All',
    }

    this.updateGenres = this.updateGenres.bind(this);
  }

  componentDidMount () {
   this.updateGenres(this.state.selectedGenre)
  }

  updateGenres(lang) {
    this.setState(function () {
      return {
        selectedGenre: lang,
        genres: null
      }
    })
     api.fetchPopularGenres(this.state.selectedGenre)
    .then(function (genres) {
      this.setState(function () {
        return {
          genres: genres
        }
      })
    }.bind(this))
  }
  render() {
    return (
      <div>
        <SelectedGenre
          selectedGenre={this.state.selectedGenre}
          onSelect={this.updateGenres} />
          <GenreGrid genres={this.state.genres} />
      </div>
    )
  }
}