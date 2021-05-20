import React, { Component } from 'react';
import "./Post.css"
import axios from 'axios';
class Post extends Component {
    state = { 
        userPhoto:"",
        username:"",
        caption:"",
        postImage:"",
        comments:[],
        likes:[]
     }
    componentDidMount(){
        if(this.props.user){
            this.setState({
                userPhoto:this.props.user.profilePic,
                username:this.props.user.username,
                caption:this.props.user.bio,
                postImage:this.props.user.postImage,
                comments:this.props.user.comments,
                likes:this.props.user.likes
            });
        }else{
            let postUserUid = this.props.post.uid;
            let post = this.props.post;
            axios.get(`/api/user/${postUserUid}`).then((obj) => {
              let postUser = obj.data.user;
              this.setState({
                userPhoto: postUser.profilePic,
                username: postUser.username,
                caption: post.caption,
                postImage: post.postImage,
                comments: post.comments,
                likes: post.likes,
              });
            });
        }
     }

    render() { 
        let { username, userPhoto, caption, postImage, comments, likes } = this.state;
        return (  
            <div className="post">
                <div className="post-header">
                    <div className="post-userphoto">
                        <img src={userPhoto} alt="user.png"/>
                    </div>
                    <div><strong className="post-username">{username}</strong></div>
                </div>
                <div className="post-body">
                    <div className="post-image">
                        <img src={postImage} alt="user.png"/>
                    </div>
                    <div className="post-actions">
                        <div className="like-comment">
                        <p className="like">
                            <img src="like.png" alt=""/>
                        </p>
                        <p className="comment">
                            <img src="comment.png" alt=""/>
                        </p>
                        </div>
                        <div className="likes-count">1231 likes</div>
                        <div className="post-details">
                            <div><strong className="post-username">{username}</strong></div>
                            <div className="post-caption">{caption}</div>
                        </div>
                        <div className="post-comments">Comments
                        </div>
                        <div className="post-comment-box">
                            <input type="text" name="" id="input" placeholder="Add a comment…"/>
                            <div className="post-comment-btn">post</div>
                        </div>
                     </div>  
                 </div>
            </div>
         );
    }
}
 
export default Post; 