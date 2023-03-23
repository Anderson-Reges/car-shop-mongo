import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes
  .get(
    '/cars',
    (req, res, next) => new CarController(req, res, next).findAll(),
  )
  .get(
    '/cars/:id',
    (req, res, next) => new CarController(req, res, next).findOne(),
  )
  .post(
    '/cars',
    (req, res, next) => new CarController(req, res, next).create(),
  )
  .post(
    '/cars/:id',
    (req, res, next) => new CarController(req, res, next).update(),
  );

export default routes;