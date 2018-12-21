var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
io.on('connection', function (socket) {

});

function MatrixSarqel(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 100);
            if (r < 20) r = 0;
            else if (r < 65) r = 1;
            else if (r < 90) r = 2;
            else if (r < 100) r = 3;
            matrix[y][x] = r;
        }

    }
    return matrix;
}
var w = 30;
var h = 30;
var Grass = require("./grass");
var Xotaker = require("./xotaker");
var Wolf = require("./wolf");
var Hambal = require("./hambal");
var Lightning = require("./lightning")
grassArr = [];
xotakerArr = [];
wolfArr = [];
hambalArr = [];
pterodaktelArr = [];
lightningArr = [];


matrix = MatrixSarqel(w, h);
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y, 1));
        }
        else if (matrix[y][x] == 2) {
            xotakerArr.push(new Xotaker(x, y, 2));
        }
        else if (matrix[y][x] == 3) {
            wolfArr.push(new Wolf(x, y, 3));
        }
        else if (matrix[y][x] == 4) {
            hambalArr.push(new Hambal(x, y, 4));
        }
        else if (matrix[y][x] == 5) {
            pterodatkelArr.push(new Pterodaktel(x, y, 5));
        } else if (matrix[y][x] == 6) {
            lightningArr.push(new Lightning(x, y, 6));
        }
    }
}





    setInterval(drawServerayin, 1000);
    function drawServerayin() {
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
        for (var i in lightningArr) {
            lightningArr[i].kill()
            lightningArr[i].die()

        }

    }

socket.on("matrix", drawServerayin);








