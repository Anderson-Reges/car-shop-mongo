import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotocycleService';

describe('Test motorcycles service', function () {
  it('test if list all motorcycles', async function () {
    const bikeOutput: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 700f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];
    sinon.stub(Model, 'find').resolves(bikeOutput);

    const bikeService = new MotorcycleService();
    const result = await bikeService.findAll();

    expect(result).to.be.deep.equal(bikeOutput);
  });

  it('Test if list one motorcycle by id', async function () {
    const bikeOutput: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'findOne').resolves(bikeOutput);

    const bikeService = new MotorcycleService();
    const result = await bikeService.findOne('634852326b35b59438fbea2f');
    
    expect(result).to.be.deep.equal(bikeOutput);
  });

  it('Test if list one motorcycle with id invalid', async function () {
    sinon.stub(Model, 'findOne').resolves();

    try {
      const bikeService = new MotorcycleService();
      await bikeService.findOne('cccccccccccxxxxxxxxxxxx0');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Test if list one motorcycle if the id not found', async function () {
    sinon.stub(Model, 'findOne').resolves();

    try {
      const bikeService = new MotorcycleService();
      await bikeService.findOne('641bb321c3d1060651e4b050');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Test if create a new motorcycle', async function () {
    const bikeInput: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    };
    const bikeOutput: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(bikeOutput);

    const bikeService = new MotorcycleService();
    const result = await bikeService.create(bikeInput);

    expect(result).to.be.deep.equal(bikeOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});