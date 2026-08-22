interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

const product: Product = {
  name: "Choco Pie",
  price: 3400,
  inStock: true,
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getProperty(product, "name"));
console.log(getProperty(product, "price"));
console.log(getProperty(product, "inStock"));

// ERROR
// console.log(getProperty(product, "banana"));
