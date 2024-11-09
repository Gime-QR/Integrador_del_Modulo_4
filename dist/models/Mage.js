"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
// Mage (sub clase)
const Characters_1 = require("./Characters");
class Mage extends Characters_1.Character {
    constructor(name, level = 1, health = 100, experience = 0, inventory = [], magicPower = 15, mana = 100) {
        super(name, level, health, experience, inventory);
        this.magicPower = magicPower;
        this.mana = mana;
    }
    getMagicPower() {
        return this.magicPower;
    }
    getMana() {
        return this.mana;
    }
    setMagicPower(magicPower) {
        this.magicPower = magicPower;
    }
    setMana(mana) {
        this.mana = mana;
    }
    // Método específico para Mage
    castSpell() {
        if (this.mana >= 10) {
            this.mana -= 10;
            console.log(`${this.name} ha lanzado un hechizo con poder mágico de ${this.magicPower}`);
            return this.magicPower; // Retornamos el daño causado
        }
        else {
            console.log(`${this.name} no tiene suficiente mana para lanzar un hechizo.`);
            return `${this.name} no tiene suficiente mana para lanzar un hechizo.`;
        }
    }
    // Método de recuperación de maná
    recoverMana(amount) {
        this.mana += amount;
        console.log(`${this.name} ha recuperado ${amount} de mana. Mana actual: ${this.mana}`);
    }
}
exports.Mage = Mage;
