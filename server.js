const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/search', (req, res) => {
    const query = req.query.q?.toLowerCase();
    if (!query) return res.status(400).send("Query required");

    const data = JSON.parse(fs.readFileSync('./backend/data.json', 'utf8'));
    const results = data.filter(item =>
        item.topic.toLowerCase().includes(query)
    );
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
