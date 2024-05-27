let id = setInterval( ()=> {
    console.log("Shubham");
},2000);
setTimeout( () =>{
    clearInterval(id);
    console.log("SetTimeout ran");
},10000);