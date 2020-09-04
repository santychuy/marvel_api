import { Reduce } from '../ts/interfaces';

export default (reduceResponse: Reduce[], roleColab: string): string[] => {
  const tempRole: string[] = [];

  reduceResponse.forEach(({ items }) => {
    items.forEach(({ role, name }) => {
      if (role === roleColab) {
        tempRole.push(name);
      }
    });
  });

  return tempRole.filter((a, b) => tempRole.indexOf(a) === b);
};
