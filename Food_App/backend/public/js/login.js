let email = document.querySelector("#email");
let pw = document.querySelector("#pw");
let loginBtn = document.querySelector(".loginBtn");
let message = document.querySelector("#message");
let forgetPassword = document.querySelector(".forgetPassword");

+

forgetPassword.addEventListener("click" , async function(e){
    try{
        e.preventDefault();
        if(email.value){
            let obj = await axios.post("/api/user/forgetpassword" , {email:email.value});
            console.log(obj);
        }
    }
    catch(error){
        console.log(error);
    }
})

loginBtn.addEventListener("click" , async function(e){
    try{
        e.preventDefault(); // prevent page refresh
        if(email.value && pw.value){
            console.log("Im inside login");
            let obj = await axios.post( "/api/user/login" , {email:email.value , password:pw.value});
            if(obj.data.data){
                window.location.href = "/home";
            }else{
                message.innerHTML = obj.data.message;
            }
        }
    }
    catch(error){
        console.log(error);
    }
})