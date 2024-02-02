import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
   let ave: Ave= new Ave(10, 'Calopsita', 11, 'Masculino');
   let reptil: Reptil= new Reptil ('placóides', 'Cobra', 15, 'Masculino');
   let mamifero: Mamifero= new Mamifero ('canguru', 'Julia', 12, 'Feminino');

    res.json([ave,reptil, mamifero]);
});

server.post('/ave', (req,res) => {
    const{ envergadura, nome, idade, genero} = req.body;
    let ave: Ave= new Ave(envergadura, nome, idade, genero);
    res.json(["A nova ave do zoologico é:", ave]);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
