import express, { Application, NextFunction, Request, Response } from 'express';
import moment from 'moment';

import routes from './routes';
import createLogger from './core/Logger';

const logger = createLogger('route-handler');

const app: Application = express();

/**
 * Adding middleware on all routes to print call time
 */
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  req.startTime = new Date();
  logger.info(`${moment(req.startTime).format('DD-MM-YYYY hh:mm:ss')} | ${req.method} | ${req.url}`);

  next();
});

/**
 * Adding middleware on all routes end to print route name, request name, time taken
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.on('finish', () => {
    try {
      const endTime = new Date();
      const responseTime = endTime.getTime() - req.startTime.getTime();
      const startTime = moment(req.startTime).format('DD-MM-YYYY hh:mm:ss');
      logger.info(`${startTime} | ${req.method} | ${req.originalUrl} ${res.statusCode} ${responseTime}ms`);
    } catch (e) {
      logger.error(e);
    }
  });

  next();
});

/**
 * attaching all routes
 */
app.use('/', routes);

export default app;
