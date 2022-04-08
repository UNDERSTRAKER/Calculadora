"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boton {
    constructor(p) {
        this.p = p;
        this.pos = 100;
        this.tamano = 80;
    }
    mostrar() {
        for (let fila = 0; fila < 4; fila++) {
            for (let col = 0; col < 5; col++) {
                this.p.fill('orange');
                this.p.rect(80 * fila, 80 * col, this.tamano, this.tamano);
            }
        }
    }
}
exports.default = Boton;
