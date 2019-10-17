import React from 'react';


class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {
            spans : 0
        }
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans =() => {
        const imageHeight = this.imageRef.current.clientHeight,
              spans = Math.ceil(imageHeight / 10);
              this.setState({spans});
    }

    render(){
        
        const {description,urls} = this.props.image;
        return(
            
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular}  alt={description} />
            </div>
        );
    }
}



export default ImageCard;
