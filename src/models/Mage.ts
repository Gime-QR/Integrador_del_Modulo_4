import { Character } from './Characters';

export class Mage extends Character {
magicPower: number;
mana: number;

constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = [], magicPower: number = 15, mana: number = 50) {
    super(name, level, health, experience, inventory); // Llamada al constructor de la clase base (Character)
    this.magicPower = magicPower;
    this.mana = mana;
}

// Método para lanzar un hechizo, consumiendo mana
castSpell(): void {
    if (this.mana >= 10) { // Requiere al menos 10 mana para lanzar un hechizo
      this.mana -= 10; // Reduce el mana
      const spellDamage = this.magicPower + (Math.random() * 10); // Poder mágico + valor aleatorio
    console.log(`${this.name} ha lanzado un hechizo causando ${spellDamage.toFixed(2)} de daño mágico. Mana restante: ${this.mana}`);
    } else {
    console.log(`${this.name} no tiene suficiente mana para lanzar un hechizo.`);
    }
}

// Método para regenerar mana (p. ej., tras descansar o durante una misión)
regenerateMana(amount: number): void {
    this.mana += amount;
    console.log(`${this.name} ha regenerado ${amount} de mana. Mana actual: ${this.mana}`);
}
}
