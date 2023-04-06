import { Triangle } from "./triangle";
import { Point } from "./point";

let point1 = new Point (9,9)
let point2 = new Point (-4,2)
let point3 = new Point(3,3)

let myTriangle = new Triangle(point1,point2,point3)

console.log(myTriangle.calculateLengthSides())