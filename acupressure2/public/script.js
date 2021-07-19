let names = ['कमर दर्द', 'जोड़ों में दर्द', 'दबी हुई नस खोलने का इलाज', 'मांसपेशियों में दर्द', 'लिवर के रोग'];
let changingText = document.querySelector('#changing-text');
let idx = 0;
let word = names[idx];
let text = "";
let isDeleting = false;
window.addEventListener('load', ()=>{
    typeWords();
})

function typeWords(){

    if(isDeleting && text.length == 0){
        idx = (idx+1) % names.length;
        word = names[idx];
        isDeleting = false;
    }

    if(text.length == word.length){
        isDeleting = true;
    }
    text = isDeleting ? word.substring(0, text.length-1) : word.substring(0, text.length+1);
    changingText.innerHTML = text;
    setTimeout(typeWords, 140);
}