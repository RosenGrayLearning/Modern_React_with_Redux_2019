import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext';



/**
 * Getting information out of our context object by using Consumer component

 */

export default class Button extends Component {
    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value)=> value=== 'english' ? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

 









/**
 * Getting information out of our context object by using this.context
 */

 /*

export default class Button extends Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; 
        return (
            <button className="ui button primary">{text}</button>
        )
    }
}

*/