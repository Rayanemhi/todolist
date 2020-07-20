const router = require('express').Router();
const mongoose = require('mongoose');
const List = require('../models/list.model');
const { render } = require('ejs');

const connectionDB = mongoose.connect('mongodb://rayane:mehabli@localhost:27017/todolistdb?authSource=test&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err => console.log(err))
//List of todolists


router.get('/', (req, res) => {
    connectionDB.then(async () => {
        // const list = new List();
        // const todo = {
        //     label : 'Faire ma chambre',
        //     done: false
        // };
        // const todo2 = {
        //     label : 'Faire mes devoirs',
        //     done: false
        // };
        // list.todo.push(todo,todo2);
        // list.title ='youhou une nouvelle list';
        // list.save();
        List.find().exec().then(lists => res.render('home', { lists }));
    });
});

//Detail of one list
//TODO AJAX REQUEST
router.get('/list/:id', (req, res) => {
    let id = req.params.id;

    connectionDB.then(async () => {
        List.find().exec().then(lists => {
            List.findById(id).exec().then(list => {
                res.render('list', { list, lists });
            })
        })
    });
});


module.exports = router;