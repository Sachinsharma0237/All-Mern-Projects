const fileInput = document.querySelector("#image");

fileInput.addEventListener("change", function(e){
    console.log(e.target.files[0]);
    let fileObject = e.target.files[0];
    let formData = new FormData();          //formData class hoth hai
    formData.append('photo', fileObject);   //photo is key uski object hai fileObject
    axios.post("/imageUpload", formData);
})