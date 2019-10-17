import React,{Component} from 'react';


class SearchBar extends Component {

    state = {
        term : ''
    }

    onInputChange = (e) =>{
        this.setState({term:e.target.value});

        //TODO: Make sure we call
        //callback from parent component
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input 
                           type="text"
                           value={this.state.term}
                           onChange={this.onInputChange}
                         />
                    </div>
                </form>
            </div>
        );
    }

}


export default SearchBar;