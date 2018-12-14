
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


var Grass = require("./grass");
var Xotaker = require("./xotaker");
var Wolf = require("./wolf");
var Hambal = require("./hambal");
grassArr = [];
xotakerArr = [];
wolfArr = [];
hambalArr = [];
pterodaktelArr = [];


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var wf = new Wolf(x, y)
            wolfArr.push(wf)
        }
        else if (matrix[y][x] == 4) {
            var hb = new Hambal(x, y)
            hambalArr.push(hb)

        } else if (matrix[y][x] == 5) {
            var pt = new Pterodaktel(x, y)
            pterodaktelArr.push(pt)
        }
    }


}

setInterval(drawServerayin, 1000);

function drawServerayin() {
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

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in xotakerArr) {
        xotakerArr[i].move()
        xotakerArr[i].eat()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in wolfArr) {
        wolfArr[i].move()
        wolfArr[i].eat()
        wolfArr[i].mult()
        wolfArr[i].die()
    }
    for (var i in hambalArr) {
        hambalArr[i].move()
        hambalArr[i].eat()
        hambalArr[i].eat2()
        hambalArr[i].mult()
        hambalArr[i].die()
    }
    for (var i in pterodaktelArr) {
        pterodaktelArr[i].move()
        pterodaktelArr[i].eat()
        pterodaktelArr[i].eat2()
        pterodaktelArr[i].eat3()
        pterodaktelArr[i].mult()
        pterodaktelArr[i].die()
    }

}



