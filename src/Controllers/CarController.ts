import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    try {
      const car = await this.service.create(this.req.body);
      return this.res.status(201).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    try {
      const updateCar = await this.service.update(id, this.req.body);
      return this.res.status(201).json(updateCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const cars = await this.service.findAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findOne() {
    const { id } = this.req.params;
    try {
      const car = await this.service.findOne(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}