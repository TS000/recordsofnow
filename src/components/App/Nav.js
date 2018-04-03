import React from 'react'
import PropTypes from 'prop-types'
import API from '../../utils/api.js'
import Masonry from 'react-masonry-component'

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
    <div>
          <Masonry 
      className={'my-gallery-class'}>
       {props.genres.map(function (genres, index) {
        return (
         
        <div className="record-wrap">
          <div className="textWrap"><h1>{genres.title}</h1></div>
            <img src={genres.cover_image} alt=""/>
            </div>

        
        )
      })}
   </Masonry>
   </div>
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
    this.setState( () => {
      return {
        selectedGenre: genres,
        genres: null
      }
    })
     API.fetchPopularGenres(genres)
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