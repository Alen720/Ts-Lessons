// Task:
// Create a retryRequest function that accepts exactly the same parameters as sendRequest.
// Use Parameters and the spread operator (...).
// Do not manually duplicate the parameter types.
// retryRequest must call sendRequest internally.

function createOrder(
    product: string,
    quantity: number,
    paid: boolean
) {
    return {
        product,
        quantity,
        paid
    }
}

type orderParameters = Parameters<typeof createOrder>

function repeatOrder(...params: orderParameters) {
    return createOrder(...params)
}

console.log(repeatOrder("Choco Pie", 12, true));
