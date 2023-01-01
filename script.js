const main = document.querySelector("#main");
const boxStyle = document.querySelector("#box-style");
const clear = document.querySelector("#clear");

let grid = 16;

createGrid();

function createGrid() {           //creates initial 16x16 grid
let gridSize = `${800/grid}px`;

    for (i=1;i<=(grid*grid);i++){
        let box = document.createElement('div');     
        box.setAttribute('id','box-style');
        box.style.width = gridSize;
        box.style.height = gridSize;
        box.classList.add ('tracker');               
        box.addEventListener('mouseover',colorBlack); //adds mouse over event listner to the 
        main.appendChild(box);                        //newly created divs, adds class att. 
    }                                                 //for styling
}

function colorBlack(e) {
    e.target.classList.add ('black');  //changes the hovered pixels black
}

clear.addEventListener('click',clearAll);

function clearAll() {
    const tracker = document.getElementsByClassName("tracker");
    while (tracker[0]) {
        main.removeChild(tracker[0]);
    }
    newGridSize();     //resets and creates new grid
    createGrid();

}

function newGridSize(){   //prompts user to enter custom grid size
    grid = parseInt(prompt("Enter your canvas size","16"));
    for (i=0;i<Infinity;i++) {
        if (grid > 100){
            grid = parseInt(prompt("please enter a smaller number","100"));
        }
        else {
            return;
        }
    }
    
}