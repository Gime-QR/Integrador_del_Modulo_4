import { addCharacter, showAllCharacters, modifyCharacter, createMission, listAllMissions, assignMissionToCharacter} from './controllers/gameControllers';
import { MissionType } from './models/Mission';

const gandalf = addCharacter('Mage', 'Gandalf', 1, 100);
const aragorn = addCharacter('Warrior', 'Aragorn', 2, 150);

console.log('\nLista de personajes después de la creación:');
showAllCharacters();

const mission1 = createMission('Salvar el pueblo', MissionType.Main, 100);
const mission2 = createMission('Explorar la cueva', MissionType.Side, 150);


console.log('\nLista de personajes después de completar misiones:');
showAllCharacters();
