var LivingCreature = require("./LivingCreature");

module.exports = class Hambal extends LivingCreature{
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
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var hb = new Hambal(newX, newY)
            hambalArr.push(hb)
            var hambal1 = hambal;
            console.log(hambal1);
        }
    }

    move(){
        let arr = this.chooseCell0(0);
        var empty = arr[Math.round(Math.random()* arr.length)]
        this.energy--;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        let arr = this.chooseCell0(3);
        var empty = arr[Math.round(Math.random()* arr.length)]
        if(wolf){
            var newX = wolf[0]
            var newY = wolf[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for(var i in wolfArr){
                if(wolfArr[i].x==newX && wolfArr[i].y==newY){
                    wolfArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=3
        }
    }
        eat2(){
            let arr = this.chooseCell0(2);
        var empty = arr[Math.round(Math.random()* arr.length)]
        if(cow){
            var newX = cow[0]
            var newY = cow[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for(var i in xotakerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=2
        }
        }
       
    

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in hambalArr){
                if(hambalArr[i].x==this.x && hambalArr[i].y==this.y){
                    hambalArr.splice(i,1)
                }
            }
        }
    }
}