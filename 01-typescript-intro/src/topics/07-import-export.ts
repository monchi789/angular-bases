import {Product, taxCalculation} from './06-function-destructuring'

const producto: Product[] = [
  {
    descripcion: 'Nokia',
    price: 100
  }, 
  {
    descripcion: 'iPad', 
    price: 200
  }
];

const [total, tax] = taxCalculation({
  products: producto,
  tax: 0.15
})

console.log(total, tax);
