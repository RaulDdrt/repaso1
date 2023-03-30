export class Point {

    private x : number
    private y : number

    constructor(x:number,y:number){

        this.x = x
        this.y = y

    }

    setX(x:number):void{

        this.x = x

    }

    setY(y:number):void{

        this.y = y
    }

    getX():number{

        return this.x
    }

    getY():number{

        return this.y
    }

    toString():string{

        return "(" + this.x + "," + this.y +")"

    }

}

