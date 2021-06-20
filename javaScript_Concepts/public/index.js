let a = 0;
let b = 1;
let n = 10;
function fibo(){
    while( n!=0 ){
        console.log( a + "\n");
        let c = a + b;
        a = b;
        b = c;
        n--;
    }
}
fibo();
