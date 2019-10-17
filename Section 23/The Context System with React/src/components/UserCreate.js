import React from 'react';
import Field from './Field';
import Button from './Button';



const UserCreate = (props) => {
 console.log(props)
    return (
        <div className="ui form">
            <Field/>
            <Button/>
        </div>
    ) 
}

export default UserCreate;