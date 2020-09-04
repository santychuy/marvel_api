import { Reduce } from '../ts/interfaces';

export default (reduceResponse: Reduce[]): string => {
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
