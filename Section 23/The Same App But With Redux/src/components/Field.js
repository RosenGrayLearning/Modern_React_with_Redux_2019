import React, { Component } from 'react'

export default class Field extends Component {
   
    render() {
        return (
            <div>
                <div className="ui field">
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}
