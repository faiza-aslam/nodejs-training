const router = require('express').Router();
const userRepo = require('../../users.repository');

router.get('/users', (req, res) => {
    const isEmpty = (obj) => Object.keys(obj).length <= 0;
    if(!isEmpty(req.query)) {
        res.status(200).send(userRepo.find(req.query));
        return;
    }
    res.status(200).send(userRepo.findAll());
});

router.get('/user/:id', (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params);        
        const user = userRepo.find({id});
        res.send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
});