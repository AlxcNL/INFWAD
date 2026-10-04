"use strict";
function logPoint(point) {
    console.log("x = " + point.x + ", y = " + point.y);
}
function logName(x) {
    console.log("Hello, " + x.name);
}
const obj = {
    x: 0.22,
    y: 1.9,
    name: "Origin",
};
logPoint(obj);
logName(obj);
