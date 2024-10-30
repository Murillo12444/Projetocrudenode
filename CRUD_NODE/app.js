const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const { console } = require('inspector');
const app = express();

app.set('viw engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', userController.getAllUsers);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userController.addUser);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.UpdateUser);
app.get('/delete/:id', userController.deleteUser);

app.listen(3000,() => {
  console.log('Servidor rodando na porta 3000');
});