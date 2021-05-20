const search = document.getElementById("search");
const uidInput = document.getElementById("uid");
const img = document.getElementById("profile-image");
const name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const following = document.querySelector(".following");
const followers = document.querySelector(".followers");

search.addEventListener("click", function(){
    let uid = uidInput.value;
    if(uid){
        axios.get(`/api/user/${uid}`).then(function(obj){
            let user = obj.data.user;
            console.log(user);
            img.src = user.profilePic;
            name.innerHTML = user.name;
            username.innerHTML = user.username;
            bio.innerHTML = user.bio;
            let followingPromise = axios.get(`/api/request/following/${uid}`);
            return followingPromise;
        }).then(function(obj){
            let myfollowing = obj.data.myFollowing.length;
            following.innerHTML = myfollowing + " Following";   
        })
    }
})