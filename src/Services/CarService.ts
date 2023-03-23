import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ErrorHandler from '../Middlewares/ErrorHandle';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
        status: car.status,
      });
    }
    return null;
  }

  public async create(car: ICar) {
    const carOdm = new CarODM();
    const newCar = await carOdm.create(car);
    return this.createCarDomain(newCar);
  }
  
  public async update(id: string, obj: ICar) {
    await this.findOne(id);
    const carOdm = new CarODM();
    const updatedCar = await carOdm.update(id, obj);
    return this.createCarDomain(updatedCar);
  }

  public async findAll() {
    const carOdm = new CarODM();
    const carsList = await carOdm.find();
    const allCars = carsList.map((car) => this.createCarDomain(car));
    return allCars;
  }

  public async findOne(id: string) {
    if (!isValidObjectId(id)) ErrorHandler.throwErro('UNPROCESSABLE_ENTITY', 'Invalid mongo id');
    const carOdm = new CarODM();
    const car = await carOdm.findOne(id);
    if (!car) ErrorHandler.throwErro('NOT_FOUND', 'Car not found');
    return this.createCarDomain(car);
  }
}