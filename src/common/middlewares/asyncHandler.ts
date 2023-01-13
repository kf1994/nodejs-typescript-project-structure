import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { DataValidationFailed } from '../../core/Exceptions';

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

export default (execution: AsyncFunction) =>
  (req: Request, res: Response, next: NextFunction): any => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new DataValidationFailed('Data validation failed', errors);

    execution(req, res, next).catch(next);
  };
