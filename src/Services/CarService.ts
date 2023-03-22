import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      const newCar = {
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
        status: car.status,
      };
      return new Car(newCar);
    }
    return null;
  }

  public async create(car: ICar) {
    const carOdm = new CarODM();
    const newCar = await carOdm.create(car);
    return this.createCarDomain(newCar);
  }
}