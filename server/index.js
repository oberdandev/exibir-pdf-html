import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

app.use('/pdf', express.static(path.resolve('./src/assets/')));
app.use(express.urlencoded({extended: true}));



app.get('/teste', (req, res) =>{
  return res.sendFile(path.resolve(`./src/assets/MAPA_ESF-306.pdf`))
})

app.get('/', (req, res) => {
  return res.sendFile(path.resolve("./frontend/index.html"));
})

app.get('/showMaps.js',  (req,res) => {
  return res.sendFile(path.resolve("./frontend/showMaps.js"));
})

app.get('/mapas', async(req,res)=> {
  fs.readdir(path.resolve('./src/assets/'), async(err, files)=> {
    if(err) return res.sendStatus(500).send(err);
    return res.json(files);
  });
});


app.listen(3333, ()=> console.log('listening on http://localhost:3333'));