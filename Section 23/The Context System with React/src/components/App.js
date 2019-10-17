import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';


class App extends React.Component{

    state = {
        language : 'english'
    }

    onLanguageChange = language => {
        this.setState({language});
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a Language
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')}></i>
                    <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}></i>
                </div>
              <LanguageContext.Provider value={this.state.language}>
              <UserCreate/>
              </LanguageContext.Provider>
            </div>
        )
    }
}


export default App;