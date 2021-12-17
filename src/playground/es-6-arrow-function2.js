const multiplier = {
    number : [1 , 2 , 3 , 4 , 5],
    multiplyBy: 2,
    multiply(){
        return this.number.map((num)=> num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())