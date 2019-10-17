import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return ( 
        <div className="ui container comments">

           <ApprovalCard>
              <CommentDetail author="Vladi" 
                date="Nice Blog Post" 
                text="Today at 06:00 PM"
                avatar={faker.image.avatar()}/>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail author="Danniel"
                date="Nice Blog Post"
                text="Today at 06:00 PM"
                avatar={faker.image.avatar()}/>
         </ApprovalCard> 
         
         <ApprovalCard>
            <CommentDetail author="Anna"
                date="Nice Blog Post" 
                text="Today at 06:00 PM"
                avatar={faker.image.avatar()}/> 
         </ApprovalCard>
        </div>
    )
};

const root = document.querySelector('#root');

ReactDom.render(<App/>,root);