import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

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
  .put(
    '/cars/:id',
    (req, res, next) => new CarController(req, res, next).update(),
  )
  .get(
    '/motorcycles',
    (req, res, next) => new MotorcycleController(req, res, next).findAll(),
  )
  .get(
    '/motorcycles/:id',
    (req, res, next) => new MotorcycleController(req, res, next).findOne(),
  )
  .post(
    '/motorcycles',
    (req, res, next) => new MotorcycleController(req, res, next).create(),
  )
  .put(
    '/motorcycles/:id',
    (req, res, next) => new MotorcycleController(req, res, next).update(),
  );

export default routes;