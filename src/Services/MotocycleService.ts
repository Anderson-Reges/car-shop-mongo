import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ErrorHandler from '../Middlewares/ErrorHandle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotocycleDomain(motocycle: IMotorcycle | null): Motorcycle | null {
    if (motocycle) {
      return new Motorcycle({
        id: motocycle.id,
        model: motocycle.model,
        year: motocycle.year,
        color: motocycle.color,
        status: motocycle.status,
        buyValue: motocycle.buyValue,
        category: motocycle.category,
        engineCapacity: motocycle.engineCapacity,
      });
    }
    return null;
  }

  public async create(obj: IMotorcycle) {
    const bikeODM = new MotorcycleODM();
    const newBike = await bikeODM.create(obj);
    return this.createMotocycleDomain(newBike);
  }

  public async findAll() {
    const carOdm = new MotorcycleODM();
    const carsList = await carOdm.find();
    const allCars = carsList.map((car) => this.createMotocycleDomain(car));
    return allCars;
  }

  public async findOne(id: string) {
    if (!isValidObjectId(id)) ErrorHandler.throwErro('UNPROCESSABLE_ENTITY', 'Invalid mongo id');
    const carOdm = new MotorcycleODM();
    const car = await carOdm.findOne(id);
    if (!car) ErrorHandler.throwErro('NOT_FOUND', 'Motorcycle not found');
    return this.createMotocycleDomain(car);
  }
}