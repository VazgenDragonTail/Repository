var LivingCreature = require("./LivingCreature");

module.exports = class Wolf extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
        
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        let arr = this.chooseCell0(0);
        var empty = arr[Math.round(Math.random()* arr.length)]
        if (empty && this.energy > 15) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var wf = new Wolf(newX, newY)
            wolfArr.push(wf)
            var gishatich = wolf;
            console.log(gishatich);
        }
    }

    move(){
        let arr = this.chooseCell0(0);
        var empty = arr[Math.round(Math.random()* arr.length)]
        this.energy--;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        let arr = this.chooseCell0(2);
        var cow = arr[Math.round(Math.random()* arr.length)]
        if (cow){
            var newX = cow[0]
            var newY = cow[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for(var i in xotakerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=2.5
        }
    }

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in wolfArr){
                if(wolfArr[i].x==this.x && wolfArr[i].y==this.y){
                    wolfArr.splice(i,1)
                }
            }
        }
    }
}