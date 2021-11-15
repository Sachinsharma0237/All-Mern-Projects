const profileImage = document.querySelector("#profileImage");
// const axios = require('axios');
profileImage.addEventListener("change", async function(e){
    e.preventDefault();
    let file = profileImage.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("user", file);
    let obj = await axios.patch("http://localhost:5000/api/user/updateProfilePhoto", formData);
    console.log(obj);
    if(obj.data.message){
        window.location.reload();
    }
})