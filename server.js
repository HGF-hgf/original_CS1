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
            res.send("<h1>404</h1>");
        }
        else {
            res.send(url);
        }
    } catch (err) {
        res.send(err)
    }
})

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