let your=0;
let computer=0;
let uwin;

const options=["rock","scissors","paper"]
const gencomp=()=>{
const rand=Math.floor(Math.random()*3);

return options[rand];

}
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#computer-score");

let msg=document.querySelector(".msg-container");

const show =(uwin)=>{
    if(uwin){
        console.log(" YoU ARE THE F**KING GOAT ");
        msg.innerText="YOU WON :) ";
        your++;
        uscore.innerText=your;
    }else{ console.log(" COMPUTER IS SMARTER ");
        msg.innerText="YOU LOSE :( ";
        computer++;
       cscore.innerText=computer;
    }
}
const playgame=(userchoice)=>{
const comp=gencomp();
console.log(`COMP: ${comp}`);
if(userchoice ===comp){
    //draw 
    console.log("draww");
msg.innerText="draw,Play again ";
}else 
{uwin=true;
    
    if (userchoice==="rock"){
        uwin=comp==="paper"? false : true;

    }else if (userchoice==="paper"){
        uwin=comp==="scissors"? false : true;

    }else{
        uwin=comp==="rock"? false : true;

    }show(uwin);
}

}
const choices=document.querySelectorAll(".choice");




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

const userchoice=choice.getAttribute("id");
console.log(`YOU CLICKED ${userchoice}`)
playgame(userchoice);
    });
});