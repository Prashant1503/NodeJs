const express = require('express');
const router = express.Router();



// controllers.
const {getTodos,createTodo,updateTodo,deleteTodo} = require('../controller/task.controller');


router.get('/task',getTodos);
router.post('/task/create',createTodo);
router.put('/task/update/:id',updateTodo);
router.delete('/task/del/:id',deleteTodo);

module.exports = router;