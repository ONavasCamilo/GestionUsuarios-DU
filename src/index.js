import connectDB from '#Config/db.js';
import { MONGODB_URL, PORT } from '#Config/env.js';
import httpServer from "#Config/http.js";

const bootstrap = async () => {
    await connectDB(MONGODB_URL)
        httpServer.listen(PORT, () => {
            console.log(`Servidor escuchando puerto ${PORT}`);
        })
};

bootstrap();