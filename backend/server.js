import dotenv from 'dotenv';
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

await connectDB(process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log(`🚀 Servidor está rodando na porta ${PORT}!`);
});