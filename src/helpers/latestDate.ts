import { ReduceColabs, ReduceCharacters } from '../ts/interfaces';

export const latesDateColab = (reduceResponse: ReduceColabs[]): string => {
  const dates = reduceResponse.map(({ modified }) => modified);
  const timestamps = dates.map(date => {
    const timestamp = Date.parse(date);
    if (!Number.isNaN(timestamp)) {
      return timestamp;
    }
    return 0;
  });
  const latest = Math.max(...timestamps);
  const date = new Date(latest);

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const latesDateCharacters = (reduceResponse: ReduceCharacters[]): string => {
  const dates = reduceResponse.map(({ modified }) => modified);
  const timestamps = dates.map(date => {
    const timestamp = Date.parse(date);
    if (!Number.isNaN(timestamp)) {
      return timestamp;
    }
    return 0;
  });
  const latest = Math.max(...timestamps);
  const date = new Date(latest);

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
