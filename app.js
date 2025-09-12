let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
//let newGameBtn=document.querySelector("#new-btn");
let chanceX = true;
let winningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button was clicked");
        if (chanceX){
            box.innerText="X";
            chanceX=false;
        }
        else{
            box.innerText="O";
            chanceX=true;
        }
        box.disabled=true;
        checkWinner();
    })    
});
resetBtn.addEventListener("click",()=>{
    alert("Game was reset !");
    resetGame();
})
const resetGame=()=>{
    chanceX = true;
    enableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner=()=>{
    for(let pattern of winningPattern){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                disableBoxes();
                alert(`Congratulations !!! Winner is ${posVal1}`);
            }            
        }
    }
    let isTie = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isTie = false;
            break;
        }
    }
    if (isTie) {
        alert("It's a Tie!");
        disableBoxes();
    }
}
resetBtn.addEventListener("click",resetGame());
// newGameBtn.addEventListener("click",()=>{
//     if(disableBoxes()){
//         resetGame();
//     }
// })