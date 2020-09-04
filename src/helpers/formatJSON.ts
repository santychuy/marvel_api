import { ReduceColabs, ReduceCharacters } from '../ts/interfaces';
import ColabNames from './formatColabNamesByRole';
import CharactersWithComics from './formatCharactersWithComics';
import { latesDateCharacters, latesDateColab } from './latestDate';

export const formatJSONColaborators = (res: []) => {
  const reduceRes: ReduceColabs[] = res.map(comic => {
    const {
      modified,
      creators: { items },
    } = comic;

    return { modified, items };
  });

  const latestDate = latesDateColab(reduceRes);
  const editors = ColabNames(reduceRes, 'editor');
  const writers = ColabNames(reduceRes, 'writer');
  const colorists = ColabNames(reduceRes, 'colorist');

  return {
    last_sync: `Fecha de la última sincronización: ${latestDate}`,
    editors,
    writers,
    colorists,
  };
};

export const formatJSONCharacters = (res: []) => {
  const reduceRes: ReduceCharacters[] = res.map(comic => {
    const {
      modified,
      title,
      characters: { available, items },
    } = comic;

    return { modified, title, characters: { available, items } };
  });

  const latestDate = latesDateCharacters(reduceRes);
  const characters = CharactersWithComics(reduceRes);

  return {
    last_sync: `Fecha de la última sincronización: ${latestDate}`,
    characters,
  };
};
