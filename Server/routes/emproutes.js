module.exports = (app) => {
    const empDetails = require('../controllers/employeeCrud.js');

    app.post('/postDetails',empDetails.create);

    app.get('/getDetails',empDetails.findAll);

    app.put('/empDetails/:id',empDetails.update);

    app.delete('/empDetails/:id',empDetails.delete);
}