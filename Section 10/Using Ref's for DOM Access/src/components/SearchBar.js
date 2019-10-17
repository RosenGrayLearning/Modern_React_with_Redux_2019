import React from 'react';

/*
 * Communicating Child to Parent
 * passing the relevant event handlers methods from the parent to child
 * the child will get our relevant value and will pass it on to the parent
*/

class SearchBar extends React.Component {

    state = {
        term : ''
    }
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term );
    }
      

    render(){
        return (
            <div className="ui segment">
               <form onSubmit={this.onFormSubmit } className="ui form" action="">
                   <div className="field">
                       <label htmlFor="">Image Search</label>  
                       <input  value={this.state.term} onChange={(e) => this.setState({term:e.target.value})} type="text"/>
                   </div>
               </form>
            </div>
        );
    }
}


export default SearchBar;