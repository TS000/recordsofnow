import React from 'react'
import PropTypes from 'prop-types'
var api = require('../../utils/api.js')

function SelectedGenre (props) {
  var genres = ['All', 'Disco', 'House', 'Techno', 'Pop'];
  return (
    <ul className='genres'>
      {genres.map(function (genres) {
        return (
          <li
            style={genres === props.selectedGenre ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, genres)}
            key={genres}>
              {genres}
          </li>
        )
      })}
    </ul>
  )
}

function GenreGrid (props) {
  return (
    <ul className='popular-crate'>
      {props.genres.map(function (genres, index) {
        <li key={genres.name} className='popular-record'>
          <div className='sleeve-cover'>Record</div>
          <ul className='space-list-items'>
          <li>
            <img src="{data.results.cover_image}" alt=""/>
          </li></ul>
        </li>
      })}
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

    this.updategenre = this.updategenre.bind(this);
  }

  componentDidMount () {
   this.updategenre(this.state.selectedGenre)
  }

  updategenre(genres) {
    this.setState(function () {
      return {
        selectedGenre: genres,
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
          onSelect={this.updategenre} />
          {!this.state.genres
            ? <p>LOADING...</p>
            : <GenreGrid genres={this.state.genres} />}
      </div>
    )
  }
}