import { Point } from "./point";

let myPoint = new Point(4,4)
let newPoint = new Point (2,2)

console.log(myPoint.getX())
console.log(myPoint.getY())
myPoint.setX(5)
myPoint.setY(5)
console.log(myPoint.toString())

console.log(myPoint.distanceTolOrigin())
console.log(myPoint.calculateDistance(newPoint))
