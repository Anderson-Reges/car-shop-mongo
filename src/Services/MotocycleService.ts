import Motorcycle from '../Domains/Vehicle/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
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
}