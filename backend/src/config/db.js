import mongoose from "mongoose";

const connectDB = async (mongoUri) => { // recebe a URI como parâmetro
    try {
        if (!mongoUri) {
            throw new Error("❌ MONGO_URI não definido! Verifique seu .env");
        }
        await mongoose.connect(mongoUri);
        console.log("🆗 Conectado ao banco de dados MongoDB!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error.message);
        process.exit(1); // encerra o servidor se não conectar
    }
};

export default connectDB;