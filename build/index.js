"use strict";
let sketch = function (p) {
    let boton = new Boton(p);
    p.setup = function () {
        p.createCanvas(500, 450);
    };
    p.draw = function () {
        p.background(0);
        boton.mostrar();
    };
};
let myp5 = new p5(sketch);
