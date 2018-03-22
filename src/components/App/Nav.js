import React from 'react'
import PropTypes from 'prop-types'
var api = require('../../utils/api.js')

function SelectedGenre (props) {
  var genre = ['All', 'Disco', 'House', 'Techno', 'Pop'];
  return (
    <ul className='genres'>
      {genre.map(function (genre) {
        return (
          <li
            style={genre === props.selectedGenre ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, genre)}
            key={genre}>
              {genre}
          </li>
        )
      })}
    </ul>
  )
}

function GenreGrid (props) {
  return (
    <ul className='popular-crate'>
      {props.genre.map(function (genre, index) {
        <li key={genre.name} className='popular-record'>
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

  updategenre(genre) {
    this.setState(function () {
      return {
        selectedGenre: genre,
        genre: null
      }
    })
     api.fetchPopularGenres(this.state.selectedGenre)
    .then(function (genre) {
      this.setState(function () {
        return {
          genre: genre
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
          {!this.state.genre
            ? <p>LOADING...</p>
            : <GenreGrid genre={this.state.genre} />}
      </div>
    )
  }
}