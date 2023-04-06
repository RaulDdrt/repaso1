import { Point } from "./point";

let myPoint = new Point(4,4)
let newPoint = new Point (2,2)
let myPoint1 = new Point(-2,1)
let myPoint2 = new Point(3,1)

let points = [newPoint, myPoint1, myPoint2]

console.log(myPoint.getX())
console.log(myPoint.getY())
myPoint.setX(5)
myPoint.setY(5)
console.log(myPoint.toString())

console.log(myPoint.distanceTolOrigin())
console.log(myPoint.calculateDistance(newPoint))

console.log(myPoint.calcularQuadrant())

console.log(myPoint.calculateNearest(points))