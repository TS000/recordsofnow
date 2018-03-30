import React from 'react'
import PropTypes from 'prop-types'
var api = require('../../utils/api.js')

function SelectedGenre (props) {
  var genres = ['All', 'Disco', 'House', 'Techno', 'Pop']
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
        return (
        <li key={genres.id} className='popular-record'>
          <div className='sleeve-cover'>{genres.id}</div>
          <ul className='space-list-items'>
          <li>
          <p>{genres.type}</p>
            <img src={genres.cover_image} alt=""/>
          </li>
          </ul>
        </li>
        )
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
      selectedGenre: 'All'
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
     api.fetchPopularGenres(genres)
    .then(function (genre) {
      console.log(genre)
      this.setState(function () {
        return {
          genres: genre
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