import React, { Component } from 'react'
import UserList from './UserList'

class MovieCard extends Component {
  render() {
    const { id, profiles, users, movies } = this.props
    return (
      <div>
      	<h2>{movies[id].name}</h2>
		    <UserList id={id} profiles={profiles} users={users} />
      </div>
    )
  }
}

export default MovieCard