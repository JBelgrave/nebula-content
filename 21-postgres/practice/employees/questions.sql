--Query 1: Get all employees in a certain city
SELECT employee_name, city FROM employees
JOIN city ON employees.city_id = city.city_id WHERE city = 'Chicago';

--Query 2: Get the salaried employees and their annual salaries
SELECT employee_name, annual_salary FROM employees
JOIN salaried_employees ON employees.id = salaried_employees.id;

--Query 3: Get the hourly employees and their hourly rates
SELECT employee_name, hourly_rate FROM employees
JOIN hourly_employees ON employees.id = hourly_employees.id;

--Query 4: Get the total number of employees in each city
SELECT city, COUNT(*) AS total_employees FROM employees
JOIN city ON employees.city_id = city.city_id GROUP BY city;

--Query 5: Get the average annual salary of all salaried employees 
SELECT AVG(annual_salary) AS average_annual_salary FROM salaried_employees;