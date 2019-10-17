import React from 'react';
import {connect} from 'react-redux';
import {switchLanguage} from './../actions';
import UserCreate from './UserCreate';



class App extends React.Component{


    render(){

        return (
            <div className="ui container">
                            <div>
            Select a Language
            <i className="flag us" onClick={() => this.props.switchLanguage('english')}></i>
            <i className="flag nl" onClick={() => this.props.switchLanguage('dutch')}></i>
            </div>
              <UserCreate/>
            </div>
        )
    }
}

const mapStateToProps  = state => {
    return {
        language : state.language
    }
 };


export default connect(mapStateToProps,{
    switchLanguage
})(App);

