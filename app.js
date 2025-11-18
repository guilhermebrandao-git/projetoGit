const express = require('express');
const app = express();
const cors = require('cors');


app .use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada` });
});



module.exports = app;




