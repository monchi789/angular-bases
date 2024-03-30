export interface Passenger {
  name: string;
  children?: string[];
}

const passenger: Passenger = {
  name: 'Cristian',
}

const passenger2: Passenger = {
  name: 'Cristian',
  children: ['Tarzan', 'Tarzan Chiquito']
}

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);
}

printChildren(passenger2)