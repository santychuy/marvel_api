import dotenv from 'dotenv';

dotenv.config();

export default {
  APP: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 4000,
  },
  MARVEL_CONFIG: {
    MARVEL_API_URL: process.env.MARVEL_API_URL,
    MARVEL_API_KEY_PUBLIC: process.env.MARVEL_API_KEY_PUBLIC,
    MARVEL_API_KEY_SECRET: process.env.MARVEL_API_KEY_SECRET,
    MARVEL_API_HASH: process.env.MARVEL_API_HASH,
  },
};
