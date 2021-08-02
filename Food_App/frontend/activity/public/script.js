let names = ['EVERYONE', 'VEGANS', 'FITNESS FREAKS', 'MEAT LOVERS', 'VEG LOVERS'];
let changingText = document.querySelector('#changing-text');
let idx = 0;
let word = names[idx];
let text = "";
let isDeleting = false;
let showcase = document.querySelector(".showcase");
let navlinks = document.querySelector(".navlinks")


window.addEventListener('load', ()=>{
    typeWords();
    window.addEventListener('scroll', ()=>{
        let {bottom} = showcase.getBoundingClientRect();
        if( bottom < 0 ){
            navlinks.classList.add(".fixed");
        }else{
            navlinks.classList.remove(".fixed");
        }
    })
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