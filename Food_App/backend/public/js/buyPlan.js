let buyPlansButtons = document.querySelectorAll(".signup-button a");
let allLis = document.querySelectorAll(".showcase-ul li");
const stripe = stripe("pk_test_51Jw3ZNSHiXulIbukZ3aeHNyaLO4k6u5oB7UmuSVgzMrUTdX1YvCsouVJRyra3brhHbJYRcA4yZOS7cwiGT4TzoQ3002OD6Wfl7");


for(let i=0 ; i<buyPlansButtons.length ; i++){
    buyPlansButtons[i].addEventListener("click" , async function(){
        try{
            if(allLis.length < 6){
                window.location.href = "/login";
            }
            else{
                let planId = buyPlansButtons[i].getAttribute("planid");
                let session =  await axios.post("https://localhost:5000/api/booking/createPaymentSession" , {planId : planId });
                let sessId = session.data.session.id;
                let result = await stripe.redirectToCheckout({ sessionId: sessId });
                console.log(result);
            }
        }
        catch(error){
            alert(error.message);
        }
    })
}