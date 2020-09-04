import dotenv from 'dotenv';

dotenv.config();

export default {
  APP: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 4000,
  },
};
