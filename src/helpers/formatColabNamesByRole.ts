import { ReduceColabs } from '../ts/interfaces';

export default (reduceResponse: ReduceColabs[], roleColab: string): string[] => {
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
