import React,{Component} from 'react';
import ReactDom from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends Component {

//initialize state without calling a consturctor : state = {}; 
// initialize state with a constructor method


constructor(props){
    super(props);
    this.state = {
        lat : null,
        errorMessage : ''

    };

    window.navigator.geolocation.getCurrentPosition(
        (position ) =>  {
            //setState method : for updating our state
      
            this.setState({lat:position.coords.latitude})        
        },
        (err) => {
            this.setState({errorMessage:err.message}); 
        }
    );

}



render() {
    let output = '';

    if(this.state.errorMessage && !this.state.lat){
        output = <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
        output = <div>Latitude: {this.state.lat}</div>
    }
    if(!this.state.errorMessage && !this.state.lat){
        output = <div>Loading....</div>
    }
    return output;
}




/* 
 *
    function base component 
  const app = () => {
    return(
        <div>Season Display</div>
    )
} 
 */





}

const root = document.querySelector('#root');

ReactDom.render(<App/>,root);