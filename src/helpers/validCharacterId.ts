import { ValidationCharacterId } from '../ts/interfaces';

export default (character: string): ValidationCharacterId => {
  if (character === 'ironman') {
    return { characterId: '1009368', valid: true };
  }

  if (character === 'capamerica') {
    return { characterId: '1009220', valid: true };
  }

  return { characterId: null, valid: false };
};
