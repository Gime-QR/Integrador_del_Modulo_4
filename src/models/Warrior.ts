import { Character } from './Characters';

export class Warrior extends Character {
attack: number;
defense: number;

constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = [], attack: number = 10, defense: number = 5) {
    super(name, level, health, experience, inventory); // Llamada al constructor de la clase base (Character)
    this.attack = attack;
    this.defense = defense;
}

// Método específico para aumentar la defensa temporalmente
boostDefense(amount: number): void {
    this.defense += amount;
    console.log(`${this.name} ha aumentado su defensa en ${amount}. Defensa actual: ${this.defense}`);
}

// Método para atacar en combate
attackEnemy(): number {
    const damage = this.attack + (Math.random() * 5); // Ataque base + un valor aleatorio
    console.log(`${this.name} ha atacado al enemigo causando ${damage.toFixed(2)} de daño.`);
    return damage;
}

// Método para resistir daño en combate, basado en la defensa
defend(damage: number): void {
    const reducedDamage = damage - this.defense > 0 ? damage - this.defense : 0; // Reducir el daño según la defensa
    this.health -= reducedDamage;
    if (this.health < 0) this.health = 0;
    console.log(`${this.name} ha recibido ${reducedDamage.toFixed(2)} de daño tras defenderse. Salud restante: ${this.health}`);
}
}
