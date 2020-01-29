import React, { Component } from 'react'
import MovieCard from './MovieCard'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { profiles, users, movies } = this.props
    return (
      <div>
      	{Object.keys(movies).map(id => (
      		<MovieCard key={id} id={id} profiles={profiles} users={users} movies={movies} />
    		))
  		}
      </div>
      )
  }
}

export default Dashboard