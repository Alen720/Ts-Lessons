interface hasName {
    name: string
}

function getName<T extends hasName>(obj: T): string {
    return obj.name
}

const user = {
    name: "Alen",
    age: 14
};

const product = {
    name: "Choco Pie",
    price: 3400
};

console.log(getName(user));
console.log(getName(product));

interface HasId {
    id: number
}

function getId<T extends HasId> (obj: T) {
    return obj.id
}

const user2 = {
    id: 123,
    name: "Alen"
}

const product2 = {
    id: 456,
    name: "Choco Pie",
    price: 3400
}

const post2 = {
    id: 789,
    title: "Hello TypeScript"
}

console.log(getId(user2))
console.log(getId(product2))
console.log(getId(post2))