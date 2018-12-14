module.exports = class Pterodaktel extends LivingCreature{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 25;
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

    getNewDirections(){
       this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x , this.y - 2],
            [this.x +1, this.y - 2],
            [this.x +2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x -2, this.y +1],
            [this.x +2, this.y +1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x , this.y + 2],
            [this.x +1, this.y + 2],
            [this.x +2, this.y + 2],


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
        var empty = Array.prototype.randomElement = function () {
            return this[Math.floor(Math.random() * this.length)]
        }(this.chooseCell(0))
        if (empty && this.energy > 30) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var pt = new Pterodaktel(newX, newY)
            pterodaktelArr.push(pt)
        }
    }

    move(){
        var empty = Array.prototype.randomElement = function () {
            return this[Math.floor(Math.random() * this.length)]
        }(this.chooseCell(0))
        this.energy--;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var hambal = Array.prototype.randomElement = function () {
            return this[Math.floor(Math.random() * this.length)]
        }(this.chooseCell(4))
        if(hambal){
            var newX = hambal[0]
            var newY = hambal[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for(var i in hambalArr){
                if(hambalArr[i].x==newX && hambalArr[i].y==newY){
                    hambalArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=4
        }
    }
    eat2(){
         var xot = Array.prototype.randomElement = function () {
            return this[Math.floor(Math.random() * this.length)]
        }(this.chooseCell(1))
         if(xot){
            var newX = xot[0]
            var newY = xot[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for(var i in grassArr){
                if(grassArr[i].x==newX && grassArr[i].y==newY){
                    grassArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=2
        }
    }
    eat3(){
         var wolf = Array.prototype.randomElement = function () {
            return this[Math.floor(Math.random() * this.length)]
        }(this.chooseCell(3))
         if(wolf){
            var newX = wolf[0]
            var newY = wolf[1]
            matrix[newY][newX] = 5
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
      
    

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in pterodaktelArr){
                if(pterodaktelArr[i].x==this.x && pterodaktelArr[i].y==this.y){
                    pterodaktelArr.splice(i,1)
                }
            }
        }
    }
}



