const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees',
        (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});
//Obtenemos el empleado con el id que nos interesa
router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM employees WHERE id= ?', [id],
        (err, rows, fields) => {
            if (!err) {
                //Así eliminamos los corchetes
                res.json(rows[0]);
            } else {
                console.log(err);
            }
        });
});

module.exports = router;