import React, { Component } from 'react'

class MovieCard extends Component {
  render() {
    const { id, profiles, users, movies } = this.props
    return (
      <div>
      	<h2>{movies[id].name}</h2>
      </div>
      )
  }
}

export default MovieCard