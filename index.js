class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        return this.array.reduce((accumulator,element)=>{
            return element+accumulator
        },0)
    }
}
class Triangle extends Polygon{
    get isValid(){
        
    }
    
}
class Square extends Polygon{
    get isValid(){
        return this.array
    }

    get area(){
        return this.array[0]*this.array[1]
    }
}