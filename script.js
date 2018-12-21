var side = 20;
var socket =io();
var m = 20;
var n = 20;
var xot = grass;
var xotiutox = xotaker;
var gishatich = wolf;
var hambal1 = hambal;
var pter = pterodaktel;
var x1 = document.getElementById("grassCount");
var x2 = document.getElementById("xotakerCount");
var x3 = document.getElementById("wolfCount");
var x4 = document.getElementById("hambalCount");
var x5 = document.getElementById("pterodaktelCount");

x1.innerHTML += xot;
x2.innerHTML += xotiutox;
x3.innerHTMl += gishatich;
x4.innerHTML += hambal1;
x5.innerHTML += pter;

console.log(xot, xotiutox, gishatich, hambal1, pter);

function setup() {
    frameRate(5);
   // createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(m * side, n * side);
    background('#33FFFF');
}
function drawServerayin(w, h){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("#52be80");
            }
            else if (matrix[y][x] == 2) {
                fill("#f4d03f");
            }
            else if (matrix[y][x] == 3) {
                fill("#e74c3c");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 4) {
                fill("#FF8C42");
            }
            else if (matrix[y][x] == 5) {
                fill("#6C8EAD");
            }
            else if(matri[y][x] == 6){
                fill("cyan");
                
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }   
}
   




