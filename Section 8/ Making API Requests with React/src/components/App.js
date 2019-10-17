import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {

    state = {
        images : []
    }

    onSearchSubmit = async (term) => {

      const response = await unsplash.get('/search/photos',{
          params: {query:term}
      });
      const images = response.data.results;

      console.log(response)
    //   this.setState({images:images});
    }

    render(){
      
        return  (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={ this.onSearchSubmit } />
            </div>
        )
    }
}

export default App;

