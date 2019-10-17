import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{

    render(){
console.log(this)
        const {user} = this.props;

        if(!user){
            return null;
        }
        
        return(
           <div className="header">{user.name}</div>
        );
    }
}

const mapStateToPops = (state,ownProps) => {
    return {
        user: state.users.find(user=>user.id === ownProps.userId)
    }
}
export default connect(mapStateToPops,{})(UserHeader);