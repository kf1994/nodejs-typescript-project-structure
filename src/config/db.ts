import mongoose from 'mongoose';

import { mongodbURI } from './';
import createLogger from '../core/Logger';

const logger = createLogger('config/db');

mongoose.set('strictQuery', false);

mongoose
  .connect(mongodbURI)
  .then(() => logger.info('MongoDB :: connected'))
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`MongoDB :: connection ${err}`));
