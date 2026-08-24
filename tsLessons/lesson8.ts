interface Product {
    id: number
    name: string
    price: number
    inStock: boolean
    description: string
}

type ProductPrewiew = Pick<Product, "name" | "price" | "description">

const product: ProductPrewiew = {
    name: "Choco Pie",
    price: 4000,
    description: "Very sweety"
    // ERROR "id": 123,
}

console.log(product);
