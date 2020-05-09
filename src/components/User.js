import React from 'react'

const User = props =>{
    return (
        <div>
            <img src={props.me.avatar_url}/>
            <h1>{props.me.name}</h1>
            <p>{props.me.location}</p>
            <p>{props.me.bio}</p>
        </div>
    )
}
export default User;