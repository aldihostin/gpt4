const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/gpt4', async (req, res) => {
  const { text } = req.query;
  
  try {
    const response = await fetch(`https://aemt.me/gpt4?text=${encodeURIComponent(text)}`);
    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mencari jawaban.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
