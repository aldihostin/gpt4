const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/openai', async (req, res) => {
  const { text } = req.query;
  
    const response = await fetch(`https://aemt.me/openai?text=${encodeURIComponent(text)}`);
    const json = await response.json();
    res.json(json.result)
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
