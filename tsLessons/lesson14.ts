function sendMessage(
    username: string,
    message: string,
    priority: number
) {
    console.log(username, message, priority)
}

type MessageParameters = Parameters<typeof sendMessage>

const params: MessageParameters = ["Alen", "Hello World", 1]

console.log(params);

console.log(params[0], params[2]);
