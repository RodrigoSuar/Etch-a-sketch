const div = document.querySelector(".buttonContainer");
const gridSize = 50;

function makeBoard(){
    for(let i = 0;i<gridSize;i++){
        let divRow = document.createElement('div');
        divRow.className = "row";
        for(let j = 0; j<gridSize;j++){
            let divs = document.createElement('div');
            divs.className = "box";
            //divs.textContent = (i+1) + (j*4);
            divs.addEventListener("mouseover", () => colorBox(divs));
            divRow.appendChild(divs)
        }

        div.appendChild(divRow);
    }
}
function colorBox(divs) {
    divs.style.backgroundColor = "black";  // Corrected here
}

function clearBoard(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div,index) => {
        div.style.backgroundColor = "white";
    });
}
makeBoard();
const body = document.body;
let button = document.createElement('button');
button.addEventListener("click",() => clearBoard());
body.appendChild(button);