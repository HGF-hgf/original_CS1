const express = require('express')
const cors = require('cors')
const lib = require('./utils')
const app = express()
const port = 3000

app.use(cors())

app.get('/short/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const url = await lib.findOrigin(id);
        if (url == null) {
            res.status(404).send("<h1>404 - Not Found</h1>");
        } else {
            res.redirect(302, url); 
        }
    } catch (err) {
        res.status(500).send("<h1>500 - Internal Server Error</h1>");
    }
});

app.post('/create', async (req, res) => {
    try {
        const url = req.query.url;
        const newID = await lib.shortUrl(url);
        res.json({ id: newID }); // Trả về dạng JSON đúng
    } catch (err) {
        res.status(500).json({ error: err }); // Trả về lỗi dưới dạng JSON
    }
});
app.listen(port, () => {
    console.log(`CS1 app listening on port ${port}`);
})