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


interface User {
    name: string
    age: number
    isDeveloper: boolean
}

function getUserValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
    name: "Alen",
    age: 14,
    isDeveloper: true
}

console.log(getUserValue(user, "name"))
console.log(getUserValue(user, "age"))
console.log(getUserValue(user, "isDeveloper"))