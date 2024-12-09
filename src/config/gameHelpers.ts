import { Character } from '../models/Characters';
import { Mission } from '../models/Mission';

// Función para calcular la experiencia ganada al completar una misión
export function calculateExperience(character: Character, missionReward: number): number {
    const baseExperience = missionReward;
    const levelMultiplier = character.getLevel() * 0.1;  // El nivel del personaje afecta la experiencia ganada
    const totalExperience = baseExperience + (baseExperience * levelMultiplier);

    console.log(`${character.getName()} ha ganado ${totalExperience} puntos de experiencia.`);
    return totalExperience;
}

// Función para calcular la probabilidad de éxito en una misión, dependiendo del nivel del personaje y la dificultad de la misión
export function calculateMissionSuccessProbability(character: Character, missionDifficulty: number): number {
    const successProbability = (character.getLevel() / missionDifficulty) * 100;
    const finalProbability = Math.min(successProbability, 100);  // La probabilidad de éxito no puede ser mayor al 100%
  
console.log(`Probabilidad de éxito de ${character.getName()} en la misión: ${finalProbability}%`)
return finalProbability;
}

// Función para determinar si un personaje tiene éxito en una misión
export function checkMissionSuccess(character: Character, mission: Mission): boolean {
    const successProbability = calculateMissionSuccessProbability(character, mission.getDifficulty());
    const randomChance = Math.random() * 100;  // Generamos un valor aleatorio entre 0 y 100

    if (randomChance <= successProbability) {
        console.log(`${character.getName()} ha tenido éxito en la misión: "${mission.getDescription()}"`);
        return true;
    } else {
        console.log(`${character.getName()} ha fallado en la misión: "${mission.getDescription()}"`);
        return false;
    }
}

// Función para calcular la cantidad de vida que pierde un personaje al sufrir daño, basado en su nivel y estadísticas
export function calculateDamageTaken(character: Character, damage: number): number {
    const defense = character.getLevel() * 0.5;  // La defensa es un factor que depende del nivel
    const damageTaken = Math.max(damage - defense, 0);  // El daño no puede ser negativo

    console.log(`${character.getName()} ha recibido ${damageTaken} puntos de daño.`);
    return damageTaken;
}

// Función para calcular el daño de un hechizo de un mago, tomando en cuenta su poder mágico y nivel
export function calculateMagicDamage(character: Character): number {
    const magicPower = character.getLevel() * 2;  // El poder mágico aumenta con el nivel
    const magicDamage = Math.floor(Math.random() * magicPower) + magicPower;  // Daño aleatorio basado en el poder mágico

    console.log(`${character.getName()} lanza un hechizo causando ${magicDamage} puntos de daño mágico.`);
    return magicDamage;
}

// Función para calcular la probabilidad de obtener una recompensa en un evento aleatorio
export function calculateEventReward(character: Character): number {
    const baseChance = 50;  // Probabilidad base de recibir una recompensa (50%)
    const levelBonus = character.getLevel() * 2;  // A mayor nivel, mayor posibilidad de recibir una recompensa
    const totalChance = Math.min(baseChance + levelBonus, 100);  // La probabilidad no puede superar el 100%

    console.log(`Probabilidad de recompensa para ${character.getName()}: ${totalChance}%`);
    return totalChance;
}
