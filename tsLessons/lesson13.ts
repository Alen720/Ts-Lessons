function createUser() {
    return {
        name: "Alen",
        age: 14,
        isDev: true
    }
}

type User = ReturnType<typeof createUser>

const user: User = {
    name: "Al",
    age: 15,
    // ERROR age: "15"
    isDev: true
}

// ----------------------------------------------

function getUser() {
    return {
        id: 1,
        name: "Alen",
        age: 14
    }
}

function getProducts() {
    return [
        {
            id: 1,
            name: "Choco Pie",
            price: 4000
        },
        {
            id: 2,
            name: "Coca-Cola",
            price: 700
        }
    ]
}

function getSettings() {
    return {
        theme: "dark",
        notifications: true
    }
}

type returnUser = ReturnType<typeof getUser>
type returnProducts = ReturnType<typeof getProducts>
type returnSettings = ReturnType<typeof getSettings>

const newUser: returnUser = {
    id: 123,
    name: "Al",
    age: 15
}

const newProducts: returnProducts = [
    {
        id: 321,
        name: "Chips",
        price: 3000
    },
    {
        id: 231,
        name: "Pepsi",
        price: 600
    }
]

const settings: returnSettings = {
    theme: "dark",
    notifications: true
}

function printUser(user: returnUser) {
    return user
}

function printProducts(product: returnProducts) {
    return product
}


console.log(printUser(newUser));
console.log(printProducts(newProducts));
