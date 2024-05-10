const username="javascript";
let entered = prompt("Enter the UserName to login or Enter quit to exit");

while(entered != username){
    if(entered=="quit"){
        console.log("you pressed quit");
        break;
    }
    confirm("Wrong UserName Please Input it again");
    entered=prompt("Enter Username Again"); 
    }

if(entered == username){
console.log("Welcome to your Website the username for this webpage is : ",username);
}
else{
    console.log("You Entered Quit")
}