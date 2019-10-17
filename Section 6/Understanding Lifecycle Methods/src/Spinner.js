import React from 'react';


const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
               {props.message}
            </div>
        </div>
    );
};


//Provide default props in case that there was no relevant prop defined.

Spinner.defaultProps = {
    message : 'Loading...'
}


export default Spinner;