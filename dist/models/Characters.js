"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
// Characters
class Character {
    constructor(name, level = 1, health = 100, experience = 0, inventory = []) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = experience;
        this.inventory = inventory;
    }
    getStatus() {
        return `Nombre: ${this.name}, Nivel: ${this.level}, Salud: ${this.health}, Experiencia: ${this.experience}, Inventario: [${this.inventory.join(", ")}]`;
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    getHealth() {
        return this.health;
    }
    getExperience() {
        return this.experience;
    }
    getInventory() {
        return this.inventory;
    }
    setName(name) {
        this.name = name;
    }
    setLevel(level) {
        if (level > 0)
            this.level = level;
    }
    setHealth(health) {
        if (health >= 0)
            this.health = health;
    }
    setExperience(experience) {
        if (experience >= 0)
            this.experience = experience;
    }
    setInventory(inventory) {
        this.inventory = inventory;
    }
    // Métodos adicionales
    addItemToInventory(item) {
        this.inventory.push(item);
    }
    removeItemFromInventory(item) {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }
    gainExperience(amount) {
        if (amount > 0) {
            this.experience += amount;
        }
    }
    levelUp() {
        if (this.experience >= 100) {
            this.level++;
            this.experience = 0;
            console.log(`${this.name} ha subido al nivel ${this.level}!`);
        }
    }
}
exports.Character = Character;
