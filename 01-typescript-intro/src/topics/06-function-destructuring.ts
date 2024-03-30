export interface Product {
  descripcion: string;
  price: number;
}

const phone: Product = {
  descripcion: 'Nokia',
  price: 150
}

const tablet: Product = {
  descripcion: 'iPad Air',
  price: 250
}

const shoppingCart = [phone, tablet]
const tax = 0.15

interface taxCalculationOptions {
  tax: number
  products: Product[]
}

export function taxCalculation(options: taxCalculationOptions): [number, number] {
  let total = 0;

  options.products.forEach(({price}) => {
    total += price
  })

  return [total, total*options.tax]
}

const result = taxCalculation({
  products: shoppingCart,
  tax
})

console.log('Total', result);
