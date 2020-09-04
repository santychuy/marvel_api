/* eslint-disable implicit-arrow-linebreak */
import config from '../config';

const {
  MARVEL_CONFIG: { MARVEL_API_KEY_PUBLIC, MARVEL_API_URL, MARVEL_API_HASH },
} = config;

export default (path: string): string =>
  `${MARVEL_API_URL}${path}?ts=1&apikey=${MARVEL_API_KEY_PUBLIC}&hash=${MARVEL_API_HASH}`;
