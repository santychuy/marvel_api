/* eslint-disable import/prefer-default-export */
import { Reduce } from '../ts/interfaces';
import ColabNames from './colabNamesByRole';
import LatestDate from './latestDate';

export const formatJSONColaborators = (res: []) => {
  const reduceRes: Reduce[] = res.map(comic => {
    const {
      modified,
      creators: { items },
    } = comic;

    return { modified, items };
  });

  const latestDate = LatestDate(reduceRes);
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

/* export const formatJSONCharacters = (res: []) => {}; */
