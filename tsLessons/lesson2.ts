type User = {
    name: string
    age: number
    email?: string
    id: number | string
}

const user1: User = {
    name: "Alen",
    age: 14,
    id: 123
};

const user2: User = {
    name: "Bob",
    age: 20,
    email: "bob@gmail.com",
    id: "abc123"
};

function getUserId(user: User): number | string {
    return user.id
}

console.log(getUserId(user1));

console.log(getUserId(user2));



interface Product {
    name: string
    price: number
    inStock: boolean
    description?: string
    id: number | string
}

const product1: Product = {
    name: "Choco Pie",
    price: 3400,
    inStock: true,
    description: "Sweet chocolate snack",
    id: 101
};

const product2: Product = {
    name: "Coca-Cola",
    price: 700,
    inStock: true,
    id: "cola-2026"
};

const product3: Product = {
    name: "Keyboard",
    price: 25000,
    inStock: false,
    description: "Mechanical gaming keyboard",
    id: 303
};

const product4: Product = {
    name: "Headphones",
    price: 45000,
    inStock: true,
    id: "headphones-01"
};

function getProductName(product: Product): string {
    return product.name
}

console.log(getProductName(product1));
console.log(getProductName(product2));
console.log(getProductName(product3));
console.log(getProductName(product4));