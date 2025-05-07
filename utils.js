const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/app.db');

db.run(`
    CREATE TABLE IF NOT EXISTS data(
        id TEXT,
        url TEXT
    ) STRICT
`);

function makeID(length = 7) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function findOrigin(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM data WHERE id = ?`, [id], (err, res) => {
            if (err) return reject(err.message);
            return resolve(res ? res.url : null);
        });
    });
}

function create(id, url) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO data VALUES (?, ?)`, [id, url], function (err) {
            if (err) return reject(err.message);
            return resolve(id);
        });
    });
}

async function shortUrl(url) {
    while (true) {
        let newID = makeID(7); // tạo ID dài 7 ký tự
        let originUrl = await findOrigin(newID);
        if (originUrl == null) {
            await create(newID, url);
            return newID;
        }
        // Nếu ID đã tồn tại thì thử lại
    }
}

module.exports = {
    findOrigin,
    shortUrl
}
