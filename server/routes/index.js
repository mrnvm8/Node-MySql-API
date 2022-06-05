//Import Files
const express = require('express')
const db = require('../MySql')
/** Routing refers to determining how an application responds to a client request to a particular endpoint,
* which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
*/

//creating a router
const router = express.Router();

//HTTP request GET method that uses Async and will return all Student
router.get('/', async(req, res) => {
    try{
        res.json(await db.getAllStudent());
    }catch(err){
        console.log(err);
        res.sendStatus(500);

    }
});

//HTTP request GET method that uses Async and will return all Student
router.get('/student/:id', async(req, res) => {
    try{
        res.json(await db.getStudent(req.params.id));
    }catch(err){
        console.log(err);
        res.sendStatus(500);

    }
});

router.delete('/delete/:id', async(req, res) => {
    try{
        res.json(await db.deleteStudent(req.params.id));
    }catch(err){
        console.log(err);
        res.sendStatus(500);

    }
});

router.post('/create', async(req, res) => {
    try{
        res.json(await db.CreateStudent(req.query));
    }catch(err){
        console.log(err);
        res.sendStatus(500);

    }
});



//exporting router
module.exports = router;

