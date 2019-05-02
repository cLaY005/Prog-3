// var matrix = [
//     [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 2, 1],
//     [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 1, 1, 1, 1, 2, 1, 1],
//     [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//     [0, 1, 0, 0, 0, 1, 4, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 1, 4, 4, 3, 1, 4, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 4, 3, 1, 4, 0, 1, 3, 0, 1, 1, 1, 1, 0, 1],
//     [0, 0, 4, 4, 4, 1, 3, 5, 1, 3, 3, 1, 1, 1, 1, 0, 1],
//     [0, 0, 0, 4, 0, 1, 3, 3, 1, 0, 0, 1, 1, 1, 1, 0, 1],
//     [0, 0, 0, 3, 3, 1, 4, 4, 1, 4, 0, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 3, 3, 1, 5, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [2, 0, 0, 3, 3, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 2, 1],
// ]

var side = 20;

let  grassArr = [];
let  GrassEatersArr = [];
let  PredatorArr = [];
let  PredatorEatersArr = [];
let  ShadowArr = [];
let DimonArr = [];
let FlimeArr = [];

var bardz = 30;  
var layn = 30;

let matrix = [];
 
function setup() {
   //MAtrix Random
   
    for(let y = 0; y < bardz; y++)
    {
        matrix[y] = [];
        for(let x = 0;x < layn; x++)
        {
           let randomMatrix = random(0,145);
           if(0 < randomMatrix && randomMatrix < 30)
           {
             matrix[y][x] = 1;
           }
           else if(30 < randomMatrix && randomMatrix < 50)
           {
             matrix[y][x] = 2;
           }
           else if(50 < randomMatrix && randomMatrix < 70)
           {
             matrix[y][x] = 3;
           }
           else if(70 < randomMatrix && randomMatrix < 90)
           {
             matrix[y][x] = 4;
           }
           else if(75 < randomMatrix && randomMatrix < 130)
           {
             matrix[y][x] = 5;
             
           }
           else if(130 < randomMatrix && randomMatrix < 131)
           {
             matrix[y][x] = 6;
             
           }
      
           else 
           {
             matrix[y][x] = 0;
           }
        }
    }
  
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
               
                let gr1 = new GrassEater(x, y);
                GrassEatersArr.push(gr1);
                
            }
              else if (matrix[y][x] == 3) {
                let gr2 = new Predator(x, y);
                PredatorArr.push(gr2);
            }
            else if (matrix[y][x] == 4) {
                let gr3 = new PredatorEater(x, y);
                PredatorEatersArr.push(gr3);
            }
            else if (matrix[y][x] == 5) {
                let gr4 = new Shadow(x, y);
                ShadowArr.push(gr4);
            }
            else if (matrix[y][x] == 6) {
                let gr5 = new Dimon(x, y);
                DimonArr.push(gr5);
            }
            else if (matrix[y][x] == 7) {
                let gr6 = new Flime(x, y);
                FlimeArr.push(gr6);
            }

        }
    }
}



function draw() {
    console.log(matrix)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#00ff00");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 2)
            {
                fill("#ffff99");
                rect(x * side, y * side, side, side);   
            }
             else if(matrix[y][x] == 3)
            {
                // #bf4646
                fill("#bf4646");
                rect(x * side, y * side, side, side);   
            }
            else if(matrix[y][x] == 4)
            {
                fill("#ffffff");
                rect(x * side, y * side, side, side);   
            }
            else if(matrix[y][x] == 5)
            {
                fill("pink");
                rect(x * side, y * side, side, side);   
            }
            else if(matrix[y][x] == 6)
            {
                fill("#000066");
                rect(x * side, y * side, side, side);   
            }
            else if(matrix[y][x] == 7)
            {
                fill("red");
                rect(x * side, y * side, side, side);   
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in GrassEatersArr) {
        GrassEatersArr[i].eat();
    }
    for (var i in PredatorArr) {
        PredatorArr[i].eat ();
    }
    for (var i in PredatorEatersArr) {
        PredatorEatersArr[i].eat();
    }
    for (var i in ShadowArr) {
        ShadowArr[i].eat();
    } 
    for (var i in DimonArr) {
        DimonArr[i].eat();
    } 
    for (var i in FlimeArr) {
        FlimeArr[i].eat();
    } 

}

