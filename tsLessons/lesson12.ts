interface Product {
    id: number
    name: string
    price: number
}

const product: Readonly<Product> = {
    id: 123,
    name: "Chock Pie",
    price: 4000
}

console.log(product.price);

// ERROR product.price = 5000
