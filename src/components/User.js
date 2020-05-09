import React from 'react'

const User = props =>{
    return (
        <div>
            <img src={props.me.avatar_url} alt="my face"/>
            <h1>{props.me.name}</h1>
            <p>Where:{props.me.location}</p>
            <p>{props.me.bio}</p>
            <p>Number of Repos:{props.me.public_repos}</p>
        </div>
    )
}
export default User;