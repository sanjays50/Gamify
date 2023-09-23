//sudoku
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

var timer;
var timeRemaining=0;
var lives;
var selectedNum;
var selectedTile;
var disableSelect;

window.onload=function(){
    id("start-btn").addEventListener("click",startGame);
    addEventToContainer();
}

function addEventToContainer(){
    for(let i=0;i<9;i++){
        id("number-container").children[i].addEventListener("click",function(){
            if(!disableSelect){
                if(this.classList.contains("selected")){
                    this.classList.remove("selected");
                    selectedNum=null;
                }
                else{
                    for(let i=0;i<9;i++){
                        id("number-container").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selectedNum=this;
                    updateMove();
                }
            }
        });
    }
}

function startGame(){
    fetch('')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
    })
    let board;
    if(id("diff-easy").checked){
        board=easy[0];
    }
    else if(id("diff-medium").checked){
        board=medium[0];
    }
    else{
        board=hard[0];
    }
    
    lives=3;
    disableSelect=false;
    id("lives").textContent="Lives Remaining: "+lives;
    generateboard(board);
    startTimer();
    id("number-container").classList.remove("hidden");
}

function clearPrevious(){
    let tiles=qsa(".tile");
    for(let i=0;i<tiles.length;i++){
        tiles[i].remove();
    }
    if(timer) clearTimeout(timer);
    for(let i=0;i<9;i++){
        id("number-container").children[i].classList.remove("selected");
        selectedTile=null;
        selectedNum=null;
    }
}

function generateboard(board){
    clearPrevious();
    let idCount=0;
    for(i=0;i<81;i++){
        let tile=document.createElement("p");
        if(board.charAt(i)!="-"){
            tile.textContent=board.charAt(i);
        }
        else{
            tile.addEventListener("click",function(){
                if(!disableSelect){
                    if(tile.classList.contains("selected")){
                        tile.classList.remove("selected");
                        selectedTile=null;
                    }
                    else{
                        let tiles=qsa(".tile");
                        for(let i=0;i<81;i++){
                            tiles[i].classList.remove("selected");
                        }
                        tile.classList.add("selected");
                        selectedTile=tile;
                        updateMove();
                    }
                }
            });
        }
        tile.id=idCount;
        idCount++;
        tile.classList.add("tile");
        if((tile.id>17 && tile.id<27) || (tile.id>44 && tile.id<54)){
            tile.classList.add("bottomBorder");
        }
        if((tile.id+1)%9==3 || (tile.id+1)%9==6 ){
            tile.classList.add("rightBorder");
        }
        if((tile.id) %9==0 || (tile.id)%9==1 || (tile.id)%9==2){
            tile.classList.add("green1");
        }
        if((tile.id) %9==3 || (tile.id)%9==4 || (tile.id)%9==5){
            tile.classList.add("yellow1");
        }
        if((tile.id) %9==6 || (tile.id)%9==7 || (tile.id)%9==8){
            tile.classList.add("blue1");
        }
        id("board").appendChild(tile);
    }
}

function updateMove(){
    if(selectedNum && selectedTile){
        selectedTile.textContent=selectedNum.textContent;
        if(checkCorrect(selectedTile)){
            selectedTile.classList.remove("selected");
            selectedNum.classList.remove("selected");
            selectedNum=null;
            selectedTile=null;
            if(checkDone()){
                endGame();
            }
        }
        else{
            disableSelect=true;
            selectedTile.classList.add("incorrect");

            setTimeout(function(){
                lives--;
                if(lives===0){
                    endGame();
                }
                else{
                    id("lives").innerText="Lives Remaining: "+lives;
                    disableSelect=false;
                }
                selectedTile.classList.remove("incorrect");
                selectedTile.classList.remove("selected");
                selectedNum.classList.remove("selected");
                selectedTile.textContent="";
                selectedTile=null;
            },1000);
        }
    }
}

function endGame(){
    disableSelect=true;
    clearTimeout(timer);
    if(lives===0 || timeRemaining===0){
        id("lives").textContent="YOU Lost !!!";
    }
    else{
        id("lives").textContent="YOU Won";
    }
}

function checkCorrect(tile){
    let solution;
    if(id("diff-easy").checked){
        solution=easy[1];
    }
    else if(id("diff-medium").checked){
        solution=medium[1];
    }
    else{
        solution=hard[1];
    }
    if(solution.charAt(tile.id)===tile.textContent) return true;
    return false;
}

function checkDone(){
    let tiles=qsa(".tile");
    for(let i=0;i<tiles.length;i++){
        if(tiles[i].textContent==="") return false;
    }
    return true;
}

function startTimer(){
    if(id("time-1").checked){
        timeRemaining=180;
    }
    else if(id("time-2").checked){
        timeRemaining=300;
    }
    else{
        timeRemaining=600;
    }
    id("timer").innerText=timeconversion(timeRemaining);
    timer=setInterval(function(){
        timeRemaining--;
        if(timeRemaining===0) endGame();
        id("timer").innerText=timeconversion(timeRemaining);
    },1000);
}

function timeconversion(time){
    let minutes=Math.floor(time/60);
    if(minutes<10) minutes="0" + minutes;
    let seconds=time%60;
    if(seconds<10) seconds="0"+seconds;
    return minutes+":"+seconds;
} 

function id(id){
    return document.getElementById(id);
}
function qsa(selector){
    return document.querySelectorAll(selector);
}