const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "employees",
    password: "Conaman1",
    port: 5432,
});

const getEmployees = (req, res) => {
    pool.query('SELECT * FROM employees', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getEmployee = (req, res) => {
    const { employee_number } = req.params;

    pool.query('SELECT * FROM employees WHERE employee_number = $1', [employee_number], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    }
    );
};

const addEmployees = (req, res) => {
    try {
        const { employee_name, employee_number, date_hired, city_id } = req.body;

        pool.query(
            'INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ($1, $2, $3, $4)',
            [employee_name, employee_number, date_hired, city_id],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows)
            }
        );
    } catch (error) {
        throw error;
    }
};

const updateEmployees = (req, res) => {
    const { employee_name, employee_number, date_hired, city_id } = req.body;

    pool.query(
        'UPDATE employees SET employee_name = $1, date_hired = $2, city_id = $3 WHERE employee_number = $4',
        [employee_name, date_hired, city_id, employee_number],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows)
        }
    );
};

const deleteEmployees = (req, res) => {
    const { employee_number } = req.params;

    pool.query('DELETE FROM employees WHERE employee_number = $1', [employee_number], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows)
    });
};

module.exports = {
    getEmployees,
    getEmployee,
    addEmployees,
    updateEmployees,
    deleteEmployees
};