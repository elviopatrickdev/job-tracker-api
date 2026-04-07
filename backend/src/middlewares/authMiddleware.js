import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Verifica se o header existe
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Token não fornecido."
      });
    }

    // Verifica formato Bearer
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(401).json({
        success: false,
        message: "Token mal formatado."
      });
    }

    const token = parts[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Ajuste dependendo de como o token foi criado
    req.user = decoded.user || decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token inválido ou expirado."
    });
  }
};

export default authMiddleware;