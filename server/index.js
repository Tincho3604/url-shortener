const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.post('/short-url', (req, _) => {
    const { body } = req;
    

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
