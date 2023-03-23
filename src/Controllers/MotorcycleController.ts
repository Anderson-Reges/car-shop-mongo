import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotocycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const bike = await this.service.create(this.req.body);
      return this.res.status(201).json(bike);
    } catch (error) {
      this.next(error);
    }
  }
}