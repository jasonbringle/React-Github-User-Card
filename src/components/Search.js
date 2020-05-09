import React from 'react'

class Search extends React.Component{ 
    constructor(props){
        super(props);
        this.state= {
            userSearch: '',
            results: ''
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({...this.state, userSeach: e.target.value})
    }

    render(){
        return (
        <form>
            <input onChange={this.handleChanges} value={this.state.userSearch} type='text' placeholder='Search'/>
            <button>Search Now</button>
        </form>
        )
    }
}
export default Search;