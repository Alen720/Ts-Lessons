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
