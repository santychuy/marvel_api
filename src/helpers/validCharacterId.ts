import { ValidationCharacterId } from '../ts/interfaces';

// Si se quiere agregar un nuevo personaje, se valida el nombre del personaje,
// y se regresa un objeto con el id y un booleano en verdadero

export default (character: string): ValidationCharacterId => {
  if (character === 'ironman') {
    return { characterId: '1009368', valid: true };
  }

  if (character === 'capamerica') {
    return { characterId: '1009220', valid: true };
  }

  return { characterId: null, valid: false };
};
