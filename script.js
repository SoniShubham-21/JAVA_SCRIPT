const num=prompt("enter the max range for random number generator");
console.log(num)
const random=Math.floor(Math.random()*num)+1;
console.log(random)

let gus=prompt("enter a gussing number");
while(true){
    if(gus=="quit"){
        console.log("you presssed quit")
        break;
    }
    if(gus == random){
        console.log("your are right")
        break
    }
    else{
        gus=prompt("enter a gussing number");
    }
}


