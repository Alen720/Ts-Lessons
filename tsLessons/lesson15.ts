class Product {
    constructor (
        public name: string,
        public price: number,
        public inStock: boolean
    ) {}
}

type ProductParams = ConstructorParameters<typeof Product>

const params: ProductParams = ["Chocko Pie", 4000, true]

const product: Product = new Product(...params)

console.log(product);
