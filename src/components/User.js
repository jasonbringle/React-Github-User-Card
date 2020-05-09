import React, {useEffect} from 'react'
import {gsap} from 'gsap'

const User = props =>{
    const gh = React.createRef();

useEffect(() => {
    gsap.to(gh.current, {duration: 1, rotation: 360, scale: 1} )
    }, [gh])

    return (
        <div className='user-card'>
            <div className='user-name'>
                <h1>{props.me.name}</h1>
            </div>
            <div className='profile'>
                <img className='avatar' src={props.me.avatar_url} alt="my face"/>
                <div className='information'>
                    <p>Where:{props.me.location}</p>
                    <p>About Me:{props.me.bio}</p>
                    <p>Number of Repos:{props.me.public_repos}</p>
                </div>
            </div>
            <div className='gh-chart'>
                <h2>My activity on github</h2>
                <img ref={gh} src="http://ghchart.rshah.org/jasonbringle" alt="jasonbringle's Github chart" />
            </div>
        </div>
    )
}
export default User;