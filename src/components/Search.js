import React from 'react'

class Search extends React.Component{ 
    constructor(props){
        super(props);
        this.state= {
            userSearch: '',
            results: '',
        }
    }

    handleChange = e => {
        this.setState({ 
            userSearch: e.target.value
        });
    };

    handleSearch = e => {
    e.preventDefault();
    this.props.setFollowers(this.props.followersData.filter(fol => fol.login.toLowerCase().includes(this.state.userSearch.toLowerCase())))
    console.log('Handlesearchworks')
    }

    componentDidUpdate(prevProps, prevState){
        // if(prevState.userSearch !== this.state.userSearch){
        //     fetch(`https://api.github.com/users/${this.state.results}`)
        //     .then(res => res.json())
        //     // .then(res => console.log(res))
        //     .catch(err => console.log("errro", err))
        // }
    }

    render(){
        return (
        <form>
            <input 
            onChange={this.handleChange}
            value={this.state.userSearch} 
            type='text' 
            placeholder='Search'/>
            <button onClick={this.handleSearch}>Search Now</button>
        </form>
        )
    }
}
export default Search;