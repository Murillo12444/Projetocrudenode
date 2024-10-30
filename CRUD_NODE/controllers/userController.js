const User = require('../models/userModel');

expor.getALLUsers = (res, res) => {
    User.getALLUsers((users) => {
        res.render('index' , { users });
    });

};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    })
}

exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updateUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.updateUser(userId, updateUser, () => {
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};