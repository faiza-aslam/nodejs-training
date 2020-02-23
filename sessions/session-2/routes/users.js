const router = require('express').Router();
const fs = require('fs');

const raw = fs.readFileSync('./responses/users.json');
const usersData = JSON.parse(raw);

function findAll() {
    return usersData;
}

function find (name) {
    const u = usersData.filter(e => e.name ===name);
    if(!u.length > 0) {
        throw new Error('Not Found');
    }
    return u;
}

router.get('', (req, res) => {
    try {
        const u = find('John');
        res.send(u);
    } catch (e) {
        res.status(404).send(e.message);
    }
    //res.send(findAll());
});

module.exports = router;