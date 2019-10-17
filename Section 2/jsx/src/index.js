// //Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

var nano ='vladi';

// //Create React Component
const App = () => (<div>
    <button>{nano}</button>
</div>);

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
