/*
2. Misiones:
o Define una función assignMission que permita asignar una misión a un personaje. La 
misión tendrá description, difficulty, y reward
o Crea una función completeMission que determine si el personaje tiene éxito en la misión, 
basándose en su nivel y la dificultad.
o Añade una función listMissions para ver todas las misiones asignadas a un personaje.
3. Simulación de Juego: En el archivo principal (index.ts), usa estas funciones para crear personajes 
y asignar misiones, probando el flujo de creación, actualización y eliminación.*/

 import { Character } from '../models/Characters';

type Personaje = [string, number,number];
let Characters: Personaje[] = [];

function createCharacter(name:string, level:number, health:number) {
    const newCharacter: Personaje = [name,level,health];
    Characters.push(newCharacter)
    console.log(`Personaje: ${name} agregado con exito!`);
}

function listCharacters(){
    console.log("Lista de Personajes: ");
    Characters.forEach((Character) => {
        const [name,level,health] = Character
        console.log(` Personaje: ${name}, Level: ${level}, Health: ${health}`);
    })
}

function updateCharacter(indice:number,name?: string, level?: number, health?: number) {
    if (Characters[indice]) {
        if(name !== undefined) Characters[indice][0] = name
        if(level !== undefined) Characters[indice][1] = level
        if(health !== undefined) Characters[indice][2] = health
        console.log(`Personaje: ${name} modificado con exito!`);
    } else {
        console.log(`Personaje no encontrado`);
    }
    
}

function removeCharacter(characterName: string):void {
    const index = Characters.findIndex(Character => Character.getName() === characterName);
    if (index !== -1) {
        this.characters.splice(index, 1);
        console.log(`El personaje ${characterName} ha sido eliminado.`);
    } else {
        console.log(`El personaje ${characterName} no se encontró.`);
  }
  
 }




