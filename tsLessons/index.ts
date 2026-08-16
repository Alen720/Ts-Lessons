const username: string = "Alen";
const age: number = 14;
const isDev: boolean = true;
const languages: string[] = ["Russian", "English", "Armenian"]

function sum( num1: number, num2: number) {
    return num1 + num2
}

console.log(username, age, isDev, languages, sum(2, 4));

type User = {
    name: string
    age: number
    isDev: boolean
    languages: string[]
}

const user: User = {
    name: "Alen",
    age: 14,
    isDev: true,
    languages: ["Russian", "English", "Armenian"]
}

function getUserInfo(user: User) {
    console.log(user.name, user.age, user.isDev, user.languages.join(", "))
}

getUserInfo(user)

type Products = {
    name: string
    price: number
    inStock: boolean
    categories: string[]
}

const product: Products = {
    name: "Choco Pie",
    price: 3400,
    inStock: true,
    categories: ["Eat", "Sweetness"]
}

function getProductPrice(product: Products): number {
    return product.price
}

console.log(getProductPrice(product));

function getProductAvailable(product: Products): boolean {
    return product.inStock
}

console.log(getProductAvailable(product));
