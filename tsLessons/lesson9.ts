interface Product {
    id: number
    name: string
    price: number
    inStock: boolean
    description: string
}

type createProduct = Omit<Product, "id" | "inStock">

const product: createProduct = {
    name: "Choco Pie",
    price: 4000,
    description: "Very sweety",
    // ERROR id: 132314
}

console.log(product);
