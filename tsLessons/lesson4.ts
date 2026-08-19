function getFirst<T>(array: T[]) {
    return array[0]
}

const numbers = getFirst([10, 20, 30]);
const names = getFirst(["Alen", "Bob", "John"]);
const booleans = getFirst([true, false]);

console.log(numbers, names, booleans);

function getLast<T>(array: T[]) {
    return array[array.length -1]
}

const numbers2 = getLast([10, 20, 30]);
const names2 = getLast(["Alen", "Bob", "John"]);
const booleans2 = getLast([true, false]);

console.log(numbers2, names2, booleans2);
