import React from 'react'

const Followers = props => {
    console.log("from followers", props.followersData)


    return (
      <div className='lower-half'>
        <h1 className='my-followers'>My Followers</h1>
        <div className='follower-container'>
          {props.followersData.map(person => {
              return <div key={person.id}>
                <img src={person.avatar_url} alt="faces" className='followers'/>
              
              </div>
          })}
        </div>  
      </div>
    )
}
export default Followers;