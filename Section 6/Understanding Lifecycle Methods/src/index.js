import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends Component {

/*
 * initialize state with a constructor method
     
 constructor(props){
        //Do NOT do any data loading inside the constructor but in the componentDidMount()
            super(props);
            this.state = {
                lat : null,
                errorMessage : ''
            };
        }
*/

/*
 * initialize state without calling a consturctor 
*/

 state = {
     lat : null,
     errorMessage : ''
 }

 
 renderContent(){
    let output = '';

    if(this.state.errorMessage && !this.state.lat){
        output = <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
        output = <SeasonDisplay lat={this.state.lat}/>
    }
    if(!this.state.errorMessage && !this.state.lat){
        output = <Spinner message="Please accept location request"/>
    }
    return output;
 }


componentDidMount(){
    console.log('componentDidMount - was first rendered');

    window.navigator.geolocation.getCurrentPosition(
        (position ) =>  this.setState({lat:position.coords.latitude}) ,    
        (err) => this.setState({errorMessage:err.message})
    );
    
}

componentDidUpdate(){
    console.log('componentDidUpdate - was first updated it self');
}

render() {
    return (
    <div>
        {this.renderContent()}
    </div>
    )
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