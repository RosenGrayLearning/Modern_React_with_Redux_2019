import React from 'react';;

const commentDetail = (props) => {
    return (
    <div className="comment" style={{border:'1px solid red',display:'inline-block',margin:'5px',padding:'5px'}}>
        <a href="/" className="avatar">
            <img src={props.avatar} alt="avatar"/>
        </a>
        <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.date}</span>
            </div>
            <div className="text">{props.text}</div>
        </div>
    </div>
    )
}

 export default commentDetail;