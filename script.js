let arr = [2,5,25,3,85,35,2,44,20];
let print= arr.reduce((max,el)=>{
    if(el>max){
        return el;
    } else{
        return max ;
    }
});
console.log(print)