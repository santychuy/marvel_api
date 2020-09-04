import chalk from 'chalk';

import config from './config';
import app from './app';

const {
  APP: { PORT },
} = config;

(() => {
  app.listen(PORT);
  console.log(chalk.hex('#008DC8')(`>> ⚙️  Server on: http://localhost:${PORT}`));
})();
