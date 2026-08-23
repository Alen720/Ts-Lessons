interface Product {
    name: string
    price: number
    inStock: boolean
}

const product: Product = {
    name: "kruassan",
    price: 2000,
    inStock: false
}

const priceUpdate: Partial<Product> = {
    price: 4000
}

const elseUpdate: Partial<Product> = {
    name: "Choco Pie",
    inStock: true
}

product.name = elseUpdate.name!
product.price = priceUpdate.price!
product.inStock = elseUpdate.inStock!

console.log(product);
