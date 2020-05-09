import React from 'react'

const Followers = props => {

    return (
      <div>
          {props.followersData.map(person => {
              return <div key={person.id}>
                <img src={person.avatar_url} alt="faces"/>
              <h1>{person.login}</h1>
              </div>
          })}
      </div>
    )
}
export default Followers;