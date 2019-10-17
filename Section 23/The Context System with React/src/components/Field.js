import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context === 'english' ? 'Name' : 'Nuum'; 
        return (
            <div>
                <div className="ui field">
                    <label htmlFor="">{text}</label>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}
