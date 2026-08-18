function printValue(value: unknown) {
  if (typeof value === "string") {
    console.log("STRING:", value);
  } else if (typeof value === "number") {
    console.log("NUMBER:", value);
  }
}

function getLength(value: unknown): number {
  if (typeof value === "string") {
    return value.length
  } else {
    return 0
  }
}

function getError(message: string): never {
  throw new Error(message)
}

printValue(123);
console.log(getLength("asd"));
getError("Error")