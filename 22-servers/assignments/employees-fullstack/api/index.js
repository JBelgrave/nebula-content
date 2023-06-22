const db = require('./queries.js');
const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 3030;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => { 
    response.json({ info: 'Node.js, Express and Postgres API'}) 
})

app.get('/employees', db.getEmployees);
app.get('/employees/:employee_number', db.getEmployee);
app.post('/employees', db.addEmployees);
app.put('/employees', db.updateEmployees);
app.delete("/employees/:employee_number", db.deleteEmployees);

app.listen(port, () => { 
    console.log(`App running on port ${port}.`) 
})