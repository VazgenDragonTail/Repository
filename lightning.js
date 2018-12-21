var LivingCreature = require("./LivingCreature");

module.exports = class Lightning extends LivingCreature {
    

    kill(){
        let arr = this.chooseCell0(1, 2, 3, 4, 5);
        var food = arr[Math.round(Math.random()* arr.length)]
        if (food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for(var i in xoatkerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1)
                }
            }
            for(var i in hambalArr){
                if(hambalArr[i].x==newX && hambalArr[i].y==newY){
                    hambalArr.splice(i,1)
                }
            }
            for(var i in wolfArr){
                if(wolfArr[i].x==newX && wolfArr[i].y==newY){
                    wolfArr.splice(i,1)
                }
            }
            for(var i in pterodaktelArr){
                if(pterodaktelArr[i].x==newX && pterodaktelArr[i].y==newY){
                    pterodaktelArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy = 0;
        }
    }
    die(){
       
            if(this.energy<=0){
                matrix[this.y][this.x] = 0
                for(var i in lightningArr){
                    if(lightningArr[i].x==this.x && lightningArr[i].y==this.y){
                        lightningArr.splice(i,1)
                    }
                }
            }
        }

}

