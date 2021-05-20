const photo = document.querySelector("#photo");
const imgUpload = document.querySelector("#photo-upload");
const download = document.querySelector("#download");
const printer = document.querySelector("#printer");

photo.addEventListener("click", function(){
    clickSound();
    imgUpload.click();
});

download.addEventListener("click", function(){
    clickSound();
    let image = canvas.toDataURL("image/jpeg");
    let aTag = document.createElement("a");
    aTag.download = "canvas.jpeg";
    aTag.href = image;
    aTag.click();
});
  
imgUpload.addEventListener("change", function(e){
    let photo = e.target.files[0];
    let src = URL.createObjectURL(photo);
    let img = document.createElement("img");
    img.setAttribute("src", src);
    let stickyContent = createSticky();
    stickyContent.append(img);
});



printer.addEventListener("click", function(){
    window.print();
});