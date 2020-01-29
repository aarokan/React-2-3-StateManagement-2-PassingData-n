import React, { Component } from 'react'

class UserList extends Component {
  render() {
    const { id, profiles, users } = this.props
    const likedMovieProfiles = profiles.filter((profile) => profile.favoriteMovieID === id)
    return (
      <div>
      	{likedMovieProfiles.length < 1
       	? <p>None of the current users liked this movie</p>
       	: (
            <ul>
              {likedMovieProfiles.map((profile) => {
                const userName = users[profile.userID].name
                      return <li key={profile.id}>{userName}</li>
                })
              }
            </ul>
       		)
  		  }
      </div>
    )
  }
}

export default UserList