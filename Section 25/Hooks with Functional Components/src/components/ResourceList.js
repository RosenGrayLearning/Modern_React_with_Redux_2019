import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function ResourceList({resource}) {


    const [resources,setResources] = useState([]);
   
    const fetchResource = async (resource) => {
       const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
       setResources(response.data);
       
    }

    useEffect(() => {
        fetchResource(resource);
       // effect
        return () => {
            
        };
    }, [resource]) //  If calling without passing array, 
                   //it will be called every sing time our component erenders
    

    return (
        <ul>
        {resources.map(resource=>{
           return <li nano={resource.id} key={resource.id}>{resource.title}</li>
        })}
        </ul>
    )
}









// import React, { Component } from 'react'
// import axios from 'axios';

// export default class ResourceList extends Component {

//     state = {
//         resources : []
//     };

//     async componentDidMount(){
//        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//        this.setState({resources:response.data});
//     }
//     async  componentDidUpdate(prevProps){
//        if(prevProps.resource !== this.props.resource){
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//         this.setState({resources:response.data});
//        }
//     }
  
//     render() {
//         return (
//             <div>
//                 {this.state.resources.length}
//             </div>
//         )
//     }
// }
