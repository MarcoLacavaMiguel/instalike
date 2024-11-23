// Importa o framework Express para criar o servidor
import express from "express";

// Importa o Multer, uma biblioteca para upload de arquivos
import multer from "multer";

// Importa as funções do controlador de posts
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

import cors from "cors";

const corsOptions = {
    origin:"http://localhost:8000", 
    optionsSuccessStatus: 200
}
// Configura o Multer para salvar arquivos enviados na pasta "./uploads"
const upload = multer({ dest: "./uploads" });

// Define as rotas da aplicação
const routes = (app) => {
    // Permite que o servidor entenda dados no formato JSON
    app.use(express.json());
    app.use(cors(corsOptions))
    // Rota para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);

    // Rota para enviar (fazer upload) de uma imagem
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", )
};

// Exporta as rotas para serem usadas em outras partes do projeto
export default routes;
