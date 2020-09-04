/* eslint-disable comma-dangle */
import { ReduceCharacters, Characters } from '../ts/interfaces';

export default (reduceRes: ReduceCharacters[]) => {
  const tempCharacters: Characters[] = [];

  reduceRes.forEach(({ title, characters: { available, items } }) => {
    if (available > 1) {
      items.forEach(({ name }) => {
        if (name !== 'Iron Man' && name !== 'Captain America') {
          const existCharacter = tempCharacters.find(
            existing => existing.character === name
          );

          if (existCharacter) {
            const indexCharacter = tempCharacters.findIndex(c => c.character === name);
            tempCharacters[indexCharacter].comics.push(title);
          } else {
            tempCharacters.push({ character: name, comics: [title] });
          }
        }
      });
    }
  });

  return tempCharacters;
};
