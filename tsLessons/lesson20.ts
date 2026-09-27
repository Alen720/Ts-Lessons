// Create a TypeScript User Manager using the types and utility types you have learned.
//
// Requirements:
// 1. Create a User interface with id, name, age, email, and isAdmin.
// 2. Create a createUser function that automatically generates an incrementing id.
// 3. Use ReturnType to get the return type of createUser.
// 4. Use Parameters to get the parameter types of createUser.
// 5. Create createAnotherUser using those parameter types.
// 6. Create an UpdateUser type using Partial and Pick for name, age, and email.
// 7. Create a function that accepts UpdateUser.
// 8. Create a generic getProperty function using keyof.
// 9. Create a PublicUser type using Omit to hide private fields.
// 10. Create a readonly user where its properties cannot be changed.

interface User {
    id: number
    name: string
    age: number
    email: string
    isAdmin: boolean
}

// -------------------------------------------

let id = 1

function createUser(name: string, age: number, email: string, isAdmin: boolean): User {
    return {
        id: id++,
        name,
        age,
        email,
        isAdmin
    }
}

const user = createUser("Alen", 14, "aaa@gmail.com", true)

console.log(user);

// -------------------------------------------

type UserFromFunction = ReturnType<typeof createUser>

// -------------------------------------------

type CreateUserParams = Parameters<typeof createUser>

function createAnotherUser(...params: CreateUserParams) {
    return createUser(...params)
}

// -------------------------------------------

type UpdateUser = Partial<Pick<User, "name" | "age" | "email">>

function UserUpdate(user: UpdateUser) {
    console.log(user)
}

UserUpdate({
    age: 15,
    email: "Alen@gmail.com"
})

// -------------------------------------------

function getProperty<T, K extends keyof T> (obj: T, key: K) {
    return obj[key]
}

console.log(getProperty(user, "isAdmin"));

// -------------------------------------------

type PublicUser = Omit<User, "id" | "email" | "isAdmin">

const userPublic: PublicUser = {
    name: "Alen",
    age: 14
}

console.log(userPublic);

// -------------------------------------------

interface ReadonlyUser {
    readonly id: number
    readonly name: string
    readonly age: number
    readonly email: string
    readonly isAdmin: boolean
}

const readOnlyUser: ReadonlyUser = {
    id: 12,
    name: "user12",
    age: 12,
    email: "12@gmail.com",
    isAdmin: false
}
