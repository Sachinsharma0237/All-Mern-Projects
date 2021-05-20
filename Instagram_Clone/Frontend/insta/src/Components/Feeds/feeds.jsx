import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import "./feeds.css";

class Feeds extends Component {
    state = { 
        posts:[],
        captionInput:""
     }

     fileInput = React.createRef();

    componentDidMount(){
        axios.get("/api/post").then( obj =>{
            let posts = obj.data.allPosts;
            let sortedPosts = posts.sort( (a,b) =>{
                return new Date(b.createdOn) - new Date(a.createdOn);
            })            
            this.setState({
                posts:sortedPosts,
                captionInput:""
            })
        });
    }

    onCaptionChangeHandler = (value) =>{
        this.setState({
            captionInput:value
        })
    }

    onUploadPostHandler = () =>{
        let fileObject = this.fileInput.current.files[0];
        console.log(fileObject);
        let formData = new FormData(); 
        formData.append('post', fileObject);
        formData.append('uid', this.props.user["_id"]);
        formData.append('caption', this.state.captionInput);

        axios.post("/api/post", formData).then( obj =>{
            if( obj.data.postCreated ){
                this.componentDidMount();
            }
        })
       
    }

    render() { 
        return ( <div className="feeds">
            <div className="upload-post">
                <input type="file" id="upload-post" ref = {this.fileInput}/>
            <input type="text" id="caption" value = {this.state.captionInput } onChange={ (e) => {this.onCaptionChangeHandler(e.target.value)} } /><b>Caption</b>
                <button className="upload-button btn btn-primary btn-lg" onClick={this.onUploadPostHandler} >upload post</button>
            </div>

            { this.state.posts.length ?   this.state.posts.map( post => {
                return <Post key={post["_id"]} post={ post } />
            }) :
            <h1 className="spinner-border text-warning" id="no-post-tag"></h1>
            /* <h1 style={{color: "orange", position:"absolute", top:"250px", left:"500px" }}>No Post To Show</h1> } */}
            </div> );
    }
}
 
export default Feeds;