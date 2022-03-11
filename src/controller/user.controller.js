const { response } = require('express');

const usersGet = (req, res = response) => {
    const { q, nombre } = req.query;
    res.json({
        msn: 'petición get',
        q,
        nombre
    });
}

const usersGetById = (req, res = response) => {
    const id = req.params.id;
    res.json({
        id,
        msn: 'petición get'
    });
}

const userPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        id,
        msn: 'petición Put'
    })
}

const usersPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msn: 'petición Post',
        body,
    })
}

const userDelete = (req, res = response) => {
    const id = req.params.id;
    res.json({
        id,
        msn: 'petición Delete'
    })
}

module.exports = {
    usersGet,
    usersGetById,
    usersPost,
    userDelete,
    userPut
}