DROP TABLE IF EXISTS city CASCADE;
DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS salaried_employees CASCADE;
DROP TABLE IF EXISTS hourly_employees CASCADE;

CREATE TABLE city (
    city varchar(30)
);

CREATE TABLE employees (
  employee_name varchar(50),
  employee_number varchar(3),
  date_hired Date,
  city_id integer
);
 
CREATE TABLE salaried_employees (
    annual_salary integer,
    employee_id integer
);
 
CREATE TABLE hourly_employees (
    hourly_rate integer,
    employee_id integer
);

-- Inserts for the 'city' table
INSERT INTO city (city) VALUES ('New York');
INSERT INTO city (city) VALUES ('Los Angeles');
INSERT INTO city (city) VALUES ('Chicago');
INSERT INTO city (city) VALUES ('Houston');
INSERT INTO city (city) VALUES ('Philadelphia');
INSERT INTO city (city) VALUES ('Phoenix');
INSERT INTO city (city) VALUES ('San Antonio');
INSERT INTO city (city) VALUES ('San Diego');
INSERT INTO city (city) VALUES ('Dallas');
INSERT INTO city (city) VALUES ('San Jose');
INSERT INTO city (city) VALUES ('Austin');
INSERT INTO city (city) VALUES ('Jacksonville');
INSERT INTO city (city) VALUES ('San Francisco');
INSERT INTO city (city) VALUES ('Indianapolis');
INSERT INTO city (city) VALUES ('Columbus');
INSERT INTO city (city) VALUES ('Seattle');
INSERT INTO city (city) VALUES ('Denver');
INSERT INTO city (city) VALUES ('Charlotte');
INSERT INTO city (city) VALUES ('Detroit');
INSERT INTO city (city) VALUES ('Boston');

-- Inserts for the 'employees' table
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Alex', '111', '2020-08-01', 8);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Olivia', '222', '2021-09-01', 9);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Ben', '333', '2022-10-01', 10);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Emma', '444', '2023-11-01', 11);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Daniel', '555', '2024-12-01', 12);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Sophia', '666', '2025-01-01', 13);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('William', '777', '2026-02-01', 14);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Ava', '888', '2027-03-01', 15);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Ethan', '999', '2028-04-01', 16);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Mia', '000', '2029-05-01', 17);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Oliver', '123', '2030-06-01', 1);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Sophie', '456', '2031-07-01', 2);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Lucas', '789', '2032-08-01', 3);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Isabella', '321', '2033-09-01', 4);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Henry', '654', '2034-10-01', 5);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Charlotte', '987', '2035-11-01', 6);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Liam', '135', '2036-12-01', 7);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Amelia', '468', '2037-01-01', 8);
INSERT INTO employees (employee_name, employee_number, date_hired, city_id) VALUES ('Michael', '791', '2038-02-01', 9);

-- Inserts for the 'salaried_employees' table
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (72000, 1);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (84000, 2);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (69000, 3);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (81000, 4);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (93000, 5);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (66000, 6);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (78000, 7);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (90000, 8);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (63000, 9);
INSERT INTO salaried_employees (annual_salary, employee_id) VALUES (75000, 10);

-- Inserts for the 'hourly_employees' table
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (21, 11);
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (27, 12);
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (15, 13);
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (18, 14);
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (24, 15);
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (12, 16);
INSERT INTO hourly_employees (hourly_rate, employee_id) VALUES (17, 17);