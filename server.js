var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
io.on('connection' , function (socket){

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
grassArr = [];
xotakerArr = [];
wolfArr = [];
hambalArr = [];
pterodaktelArr = [];


mtx = MatrixSarqel(w, h);
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
        }
    }
}

setInterval(ServerCnv, 3000);
function ServerCnv() {

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in starkArr) {
        starkArr[i].move();
        starkArr[i].mul();
        starkArr[i].eat();
        starkArr[i].die();
    }
    for (var i in tywin_LannisterArr) {
        tywin_LannisterArr[i].move();
        tywin_LannisterArr[i].mul();
        tywin_LannisterArr[i].eat();
        tywin_LannisterArr[i].die();
    }
    for (var i in jon_SnowArr) {
        jon_SnowArr[i].move();
        jon_SnowArr[i].mul();
        jon_SnowArr[i].eat();
        jon_SnowArr[i].die();
    }
    for (var i in daenerys_TargaryenArr) {
        daenerys_TargaryenArr[i].move();
        daenerys_TargaryenArr[i].mul();
        daenerys_TargaryenArr[i].eat();
        daenerys_TargaryenArr[i].die();
    }
    io.sockets.emit("matrix", mtx);
}










