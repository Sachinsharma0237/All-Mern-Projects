  
  let arr = [1, 2, 3 ,4];
  const filter = (...arr)=>{
    return arr.filter( x => x !== 1 );
  }
  console.log(filter( 1, 2, 3 ,4 ));



  setTimeout( function(){
    console.log("Hello");
  }, 2000)

  setInterval( function(){
    console.log("hey");
  }, 2000)

  console.log(c);