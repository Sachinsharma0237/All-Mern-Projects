import axios from 'axios';
import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
    state = {  
        selectedFile: null
    }

    onFileChange=(e)=>{
        this.setState({ 
            selectedFile: e.target.files[0] 
        });
    }

    onFileUpload=()=>{
        const formData = new FormData();
        formData.append(
            'post',
            this.state.selectedFile,
            this.state.selectedFile.name
          );

    console.log(this.state.selectedFile);

    axios.post( "/api/user", formData).then( obj=>{
        console.log( obj );
    })
    };



    render() { 
        return ( 
            <div className="video">
                <h1 className="h1-tag">Upload Video here</h1>
                <input className="input" type="file" onChange={this.onFileChange}/>
                <button className="btn btn-warning" onClick={this.onFileUpload}>Upload Video</button>
                <div className="my-data">
                { this.state.selectedFile ? (
                    <div>
                    <h2>File Details:</h2>    
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>

                    {/* <video controls width="400" height="300"> 
                    <source src={this.state.selectedFile} type="video/mp4" ></source>
                    </video> */}

                    {/* <video width="750" height="500" controls >
                    <source src={this.state.selectedFile} type="video/mp4"/>
                    </video> */}

                    <video src={this.state.selectedFile} controls>
                    Your browser does not support the video tag.
                    </video>

                    </div>
                ) : (<h5>Please Upload Video</h5>) }
                </div>
            </div>
         );
    }
}
 
export default Video;
