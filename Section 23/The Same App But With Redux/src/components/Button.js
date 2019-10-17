import React, { Component } from 'react'
import {connect} from 'react-redux';

 class Button extends Component {
    render() {
        console.log(this.props)
        const language = this.props.language === 'english' ? 'Submit' : 'Dutchland';
        return (
            <button className="ui button primary">
                {language}
            </button>
        )
    }
}

const mapStateToProps  = state => {
    return {
        language : state.language
    }
 };


export default connect(mapStateToProps)(Button);