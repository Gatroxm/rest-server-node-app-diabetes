const { Router } = require('express');
const {
    usersGet,
    usersPost,
    userDelete,
    userPut,
    usersGetById
} = require('../controller/user.controller');

const routes = Router();

routes.get('/', usersGet);
routes.get('/:id', usersGetById);
routes.put('/:id', userPut);
routes.post('/', usersPost);
routes.delete('/:id', userDelete);

module.exports = routes;