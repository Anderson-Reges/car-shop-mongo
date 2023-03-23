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

  public async update() {
    const { id } = this.req.params;
    try {
      const updateBike = await this.service.update(id, this.req.body);
      return this.res.status(200).json(updateBike);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motorcycles = await this.service.findAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findOne() {
    const { id } = this.req.params;
    try {
      const motocycle = await this.service.findOne(id);
      return this.res.status(200).json(motocycle);
    } catch (error) {
      this.next(error);
    }
  }
}