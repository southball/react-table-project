import * as faker from 'faker';

export interface GeneratedData {
  name: string;
  gender: string;
  address: string;
}

function generateData(rows: number): GeneratedData[] {
  return new Array(rows).fill(null).map(() => ({
    name: faker.name.firstName() + " " + faker.name.lastName(),
    gender: faker.random.arrayElement(['M', 'F']),
    address: faker.address.streetAddress(),
  }));
}

export default generateData;
