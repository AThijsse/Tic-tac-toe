var grid = document.querySelectorAll(".square");
const message = document.getElementById('message');
var EmptySquares = new Array;
var count = 0;

for (i = 0; i < 9; i++){
    grid[i].addEventListener("click", selectSquare)
}

function selectSquare(){
    count++;

        if (count % 2 ===0 ){
            this.classList.add("x");
            var rowType = this.classList.item(1);
            var columnType = this.classList.item(2);
            aWinnerX(rowType, columnType);
            this.removeEventListener("click", selectSquare)
            //AI();
            } else {
            this.classList.add("o");
            var rowType = this.classList.item(1);
            var columnType = this.classList.item(2);
            aWinnerO(rowType, columnType);
            this.removeEventListener("click", selectSquare)
            }
       
    
}

function aWinnerX(rowType, columnType){
    
    var row = document.querySelectorAll("."+rowType);
    var column = document.querySelectorAll("."+columnType);
  
    if (row[0].classList.contains("x") && row[1].classList.contains("x") && row[2].classList.contains("x")){
        endGame() 
    }

    if (column[0].classList.contains("x") && column[1].classList.contains("x") && column[2].classList.contains("x")){
        endGame() 
    }   

    if (grid[0].classList.contains("x") && grid[4].classList.contains("x") && grid[8].classList.contains("x")){ 
        endGame() 
    }   

    if (grid[2].classList.contains("x") && grid[4].classList.contains("x") && grid[6].classList.contains("x")){
        endGame() 
    }   
}

function aWinnerO(rowType, columnType){

    var row = document.querySelectorAll("."+rowType);
    var column = document.querySelectorAll("."+columnType);
  
    if (row[0].classList.contains("o") && row[1].classList.contains("o") && row[2].classList.contains("o")){
        endGame() 
    }

    if (column[0].classList.contains("o") && column[1].classList.contains("o") && column[2].classList.contains("o")){
        endGame() 
    }   
 
    if (grid[0].classList.contains("o") && grid[4].classList.contains("o") && grid[8].classList.contains("o")){
        endGame() 
    }   

    if (grid[2].classList.contains("o") && grid[4].classList.contains("o") && grid[6].classList.contains("o")){ 
        endGame() 
    }
}

function AI(){

    if (!grid[4].classList.contains("x") && !grid[4].classList.contains("o")) {
        grid[4].classList.add("o");  
        grid[4].removeEventListener("click", selectSquare)  
    } else {    
        
        for (i = 0; i < 9; i++){
            
            if(!grid[i].classList.contains("x") && !grid[i].classList.contains("o")){
                EmptySquares.push(grid[i]);
            }
        }

        var n = Math.floor((Math.random() * (EmptySquares.length)) + 1);
        EmptySquares[n].classList.add("o")
        EmptySquares[n].removeEventListener("click", selectSquare)
        var rowType = EmptySquares[n].classList.item(1);
        var columnType = EmptySquares[n].classList.item(2);
        aWinnerO(rowType, columnType);}      
}

function endGame(){
    message.innerText = "We have a winner!" 

    for (i = 0; i < 9; i++){
    grid[i].removeEventListener("click", selectSquare)
    }
}
