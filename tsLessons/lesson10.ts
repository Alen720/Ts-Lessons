// Task:
// 1. Create a RegisterUser type without id and isAdmin.
// 2. Create an updateUser function that allows updating any fields except id and isAdmin.
// 3. Create a generic getProperty function using keyof.

interface User {
    id: number
    name: string
    age: number
    email: string
    password: string
    isAdmin: boolean
}

const user: User = {
    id: 123,
    name: "Alen",
    age: 14,
    email: "qwerty123@gmail.com",
    password: "1234",
    isAdmin: true
}

type RegisterUser = Omit<User, "id" | "isAdmin">

function updateUser(user: User, changes: Partial<RegisterUser>) {
    return Object.assign(user, changes)
}

updateUser(user, { name: "Al"})

function getProperty<T, k extends keyof T> (obj: T, key: k) {
    return obj[key]
}

console.log(getProperty(user, "id"));

console.log(user);
