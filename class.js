class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }



}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move(){
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food = random(this.chooseCell(1))
        if (food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
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

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in xotakerArr){
                if(xotakerArr[i].x==this.x && xotakerArr[i].y==this.y){
                    xotakerArr.splice(i,1)
                }
            }
        }
    }
}

class Wolf {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 15) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var wf = new Wolf(newX, newY)
            wolfArr.push(wf)
        }
    }

    move(){
        var empty = random(this.chooseCell(0))
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
        var cow = random(this.chooseCell(2))
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

//hambal

class Hambal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var hb = new Hambal(newX, newY)
            hambalArr.push(hb)
        }
    }

    move(){
        var empty = random(this.chooseCell(0))
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
        var wolf = random(this.chooseCell(3))
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
            var cow = random(this.chooseCell(2))
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

//pterodaktel

class Pterodaktel {
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 30) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var pt = new Pterodaktel(newX, newY)
            pterodaktelArr.push(pt)
        }
    }

    move(){
        var empty = random(this.chooseCell(0))
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
        var hambal = random(this.chooseCell(4))
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
         var xot = random(this.chooseCell(1))
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
         var wolf = random(this.chooseCell(3))
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



