import React from 'react';


const imageList = (props) => {
  
    const images  = props.images.map(({description,id,urls})=> <img alt={description} key={id} src={urls.regular}/>);

    return (
        <div>{images}</div>
    )
}

export default imageList;




