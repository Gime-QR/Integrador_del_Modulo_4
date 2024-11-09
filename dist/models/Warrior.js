"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
// Warrior (sub clase)
const Characters_1 = require("./Characters");
class Warrior extends Characters_1.Character {
    constructor(name, level = 1, health = 100, experience = 0, inventory = [], attack = 10, defense = 5) {
        super(name, level, health, experience, inventory);
        this.attack = attack;
        this.defense = defense;
    }
    getAttack() {
        return this.attack;
    }
    getDefense() {
        return this.defense;
    }
    setAttack(attack) {
        this.attack = attack;
    }
    setDefense(defense) {
        this.defense = defense;
    }
    // Método específico para Warrior
    increaseDefense(amount) {
        this.defense += amount;
        console.log(`${this.name} ha aumentado su defensa a ${this.defense}`);
    }
    // Método de combate específico para el Warrior
    engageInCombat(enemy) {
        const damage = this.attack; // Daño causado al enemigo
        const newHealth = enemy.getHealth() - damage; // Reduce la salud del enemigo
        enemy.setHealth(newHealth > 0 ? newHealth : 0); // Aseguramos que la salud no sea negativa
        if (enemy.getHealth() <= 0) {
            return `${this.name} ha derrotado a ${enemy.getName()} en combate.`;
        }
        else {
            return `${this.name} ha atacado a ${enemy.getName()} y le ha reducido la salud a ${enemy.getHealth()}.`;
        }
    }
}
exports.Warrior = Warrior;
