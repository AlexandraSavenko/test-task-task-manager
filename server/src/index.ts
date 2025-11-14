import { initMongoConnection } from "./db/initMongoDB"
import { setupServer } from "./server"

console.log("Hello world")

const bootstrap = async () => {
    await initMongoConnection()
 setupServer()
}

bootstrap();