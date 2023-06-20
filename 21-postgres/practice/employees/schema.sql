DROP TABLE IF EXISTS city CASCADE;
DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS salaried_employees CASCADE;
DROP TABLE IF EXISTS hourly_employees CASCADE;

CREATE TABLE city (
    city_id integer PRIMARY KEY,
    city varchar(30)
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  employee_name varchar(50),
  employee_id varchar(10),
  date_hired Date NOT NULL,
  city_id integer REFERENCES city
);
 
CREATE TABLE salaried_employees (
    id SERIAL PRIMARY KEY,
    annual_salary float,
    employee_id integer REFERENCES employees
);
 
CREATE TABLE hourly_employees (
    id SERIAL PRIMARY KEY,
    hourly_rate float,
    employee_id integer REFERENCES employees
);

INSERT INTO city VALUES (1, 'New York');
INSERT INTO city VALUES (2, 'Los Angeles');
INSERT INTO city VALUES (3, 'Chicago');
INSERT INTO city VALUES (4, 'Houston');
INSERT INTO city VALUES (5, 'Phoenix');
INSERT INTO city VALUES (6, 'Philadelphia');
INSERT INTO city VALUES (7, 'San Antonio');
INSERT INTO city VALUES (8, 'San Diego');
INSERT INTO city VALUES (9, 'Dallas');
INSERT INTO city VALUES (10, 'San Jose');
INSERT INTO city VALUES (11, 'Austin');
INSERT INTO city VALUES (12, 'Jacksonville');

INSERT INTO employees VALUES (DEFAULT, 'John Smith', '01015678', '2019-07-12', (SELECT city_id FROM city WHERE city = 'New York'));
INSERT INTO employees VALUES (DEFAULT, 'Mary Johnson', '02022344', '2019-02-19', (SELECT city_id FROM city WHERE city = 'New York'));
INSERT INTO employees VALUES (DEFAULT, 'Robert Williams', '03078192', '2018-09-05', (SELECT city_id FROM city WHERE city = 'New York'));
INSERT INTO employees VALUES (DEFAULT, 'Jennifer Jones', '04056321', '2020-10-21', (SELECT city_id FROM city WHERE city = 'New York'));
INSERT INTO employees VALUES (DEFAULT, 'Michael Brown', '05091234', '2021-06-30', (SELECT city_id FROM city WHERE city = 'New York'));
INSERT INTO employees VALUES (DEFAULT, 'Linda Davis', '06012345', '2018-04-15', (SELECT city_id FROM city WHERE city = 'Los Angeles'));
INSERT INTO employees VALUES (DEFAULT, 'William Miller', '07098765', '2019-11-27', (SELECT city_id FROM city WHERE city = 'Los Angeles'));
INSERT INTO employees VALUES (DEFAULT, 'Patricia Wilson', '08045678', '2021-02-08', (SELECT city_id FROM city WHERE city = 'Los Angeles'));
INSERT INTO employees VALUES (DEFAULT, 'James Taylor', '09087654', '2020-03-25', (SELECT city_id FROM city WHERE city = 'Los Angeles'));
INSERT INTO employees VALUES (DEFAULT, 'Jessica Anderson', '10090909', '2020-12-10', (SELECT city_id FROM city WHERE city = 'Los Angeles'));
INSERT INTO employees VALUES (DEFAULT, 'John Davis', '11022233', '2019-05-04', (SELECT city_id FROM city WHERE city = 'Chicago'));
INSERT INTO employees VALUES (DEFAULT, 'Susan Thompson', '12012345', '2021-09-18', (SELECT city_id FROM city WHERE city = 'Chicago'));
INSERT INTO employees VALUES (DEFAULT, 'David White', '13076543', '2019-08-09', (SELECT city_id FROM city WHERE city = 'Chicago'));
INSERT INTO employees VALUES (DEFAULT, 'Sarah Martinez', '14019876', '2019-03-17', (SELECT city_id FROM city WHERE city = 'Chicago'));
INSERT INTO employees VALUES (DEFAULT, 'Daniel Jackson', '15087654', '2021-11-05', (SELECT city_id FROM city WHERE city = 'Chicago'));
INSERT INTO employees VALUES (DEFAULT, 'Laura Adams', '16091234', '2018-12-22', (SELECT city_id FROM city WHERE city = 'Houston'));
INSERT INTO employees VALUES (DEFAULT, 'Christopher Thomas', '17056789', '2018-06-28', (SELECT city_id FROM city WHERE city = 'Houston'));
INSERT INTO employees VALUES (DEFAULT, 'Ashley Baker', '18012345', '2021-08-14', (SELECT city_id FROM city WHERE city = 'Houston'));
INSERT INTO employees VALUES (DEFAULT, 'Matthew Turner', '19043210', '2019-10-07', (SELECT city_id FROM city WHERE city = 'Houston'));
INSERT INTO employees VALUES (DEFAULT, 'Amanda Evans', '20045678', '2021-05-01', (SELECT city_id FROM city WHERE city = 'Houston'));
INSERT INTO employees VALUES (DEFAULT, 'Andrew Martinez', '21011223', '2020-01-14', (SELECT city_id FROM city WHERE city = 'Phoenix'));
INSERT INTO employees VALUES (DEFAULT, 'Emily Harris', '22067890', '2021-07-27', (SELECT city_id FROM city WHERE city = 'Phoenix'));
INSERT INTO employees VALUES (DEFAULT, 'Joshua Allen', '23090909', '2019-04-03', (SELECT city_id FROM city WHERE city = 'Phoenix'));
INSERT INTO employees VALUES (DEFAULT, 'Michelle Clark', '24065432', '2019-01-26', (SELECT city_id FROM city WHERE city = 'Phoenix'));
INSERT INTO employees VALUES (DEFAULT, 'Brian Young', '25098765', '2018-07-07', (SELECT city_id FROM city WHERE city = 'Phoenix'));
INSERT INTO employees VALUES (DEFAULT, 'Nicole Rodriguez', '26045678', '2020-11-12', (SELECT city_id FROM city WHERE city = 'Philadelphia'));
INSERT INTO employees VALUES (DEFAULT, 'Kevin Lewis', '27098765', '2020-04-29', (SELECT city_id FROM city WHERE city = 'Philadelphia'));
INSERT INTO employees VALUES (DEFAULT, 'Karen Lee', '28067890', '2019-09-03', (SELECT city_id FROM city WHERE city = 'Philadelphia'));
INSERT INTO employees VALUES (DEFAULT, 'Jason King', '29054321', '2018-02-23', (SELECT city_id FROM city WHERE city = 'Philadelphia'));
INSERT INTO employees VALUES (DEFAULT, 'Amy Turner', '30012345', '2020-06-07', (SELECT city_id FROM city WHERE city = 'Philadelphia'));
INSERT INTO employees VALUES (DEFAULT, 'Richard Hernandez', '31067890', '2019-12-16', (SELECT city_id FROM city WHERE city = 'San Antonio'));
INSERT INTO employees VALUES (DEFAULT, 'Christine Moore', '32019876', '2019-07-22', (SELECT city_id FROM city WHERE city = 'San Antonio'));
INSERT INTO employees VALUES (DEFAULT, 'Jeffrey Hill', '33023456', '2018-09-09', (SELECT city_id FROM city WHERE city = 'San Antonio'));
INSERT INTO employees VALUES (DEFAULT, 'Angela Scott', '34045678', '2021-03-30', (SELECT city_id FROM city WHERE city = 'San Antonio'));
INSERT INTO employees VALUES (DEFAULT, 'Timothy Green', '35098765', '2021-06-18', (SELECT city_id FROM city WHERE city = 'San Antonio'));
INSERT INTO employees VALUES (DEFAULT, 'Rebecca Adams', '36056789', '2018-05-11', (SELECT city_id FROM city WHERE city = 'San Diego'));
INSERT INTO employees VALUES (DEFAULT, 'Steven Ward', '37019876', '2019-10-02', (SELECT city_id FROM city WHERE city = 'San Diego'));
INSERT INTO employees VALUES (DEFAULT, 'Stephanie Campbell', '38012345', '2020-02-15', (SELECT city_id FROM city WHERE city = 'San Diego'));
INSERT INTO employees VALUES (DEFAULT, 'Kenneth Torres', '39087654', '2020-10-08', (SELECT city_id FROM city WHERE city = 'San Diego'));
INSERT INTO employees VALUES (DEFAULT, 'Cynthia Mitchell', '40043210', '2018-04-27', (SELECT city_id FROM city WHERE city = 'San Diego'));
INSERT INTO employees VALUES (DEFAULT, 'Jerry Carter', '41011223', '2018-07-14', (SELECT city_id FROM city WHERE city = 'Dallas'));
INSERT INTO employees VALUES (DEFAULT, 'Pamela Perez', '42054321', '2020-08-26', (SELECT city_id FROM city WHERE city = 'Dallas'));
INSERT INTO employees VALUES (DEFAULT, 'Nicholas Roberts', '43098765', '2019-11-01', (SELECT city_id FROM city WHERE city = 'Dallas'));
INSERT INTO employees VALUES (DEFAULT, 'Katherine Gonzalez', '44065432', '2021-12-03', (SELECT city_id FROM city WHERE city = 'Dallas'));
INSERT INTO employees VALUES (DEFAULT, 'Gregory Hughes', '45019876', '2018-03-07', (SELECT city_id FROM city WHERE city = 'Dallas'));
INSERT INTO employees VALUES (DEFAULT, 'Christina Murphy', '46012345', '2020-01-20', (SELECT city_id FROM city WHERE city = 'San Jose'));
INSERT INTO employees VALUES (DEFAULT, 'Dennis Rivera', '47067890', '2021-07-09', (SELECT city_id FROM city WHERE city = 'San Jose'));
INSERT INTO employees VALUES (DEFAULT, 'Tiffany Cook', '48098765', '2019-09-13', (SELECT city_id FROM city WHERE city = 'San Jose'));
INSERT INTO employees VALUES (DEFAULT, 'Scott Cooper', '49023456', '2021-05-26', (SELECT city_id FROM city WHERE city = 'San Jose'));
INSERT INTO employees VALUES (DEFAULT, 'Brenda Morgan', '50054321', '2019-03-10', (SELECT city_id FROM city WHERE city = 'San Jose'));
INSERT INTO employees VALUES (DEFAULT, 'Keith Bell', '51065432', '2018-08-17', (SELECT city_id FROM city WHERE city = 'Austin'));
INSERT INTO employees VALUES (DEFAULT, 'Melissa Murphy', '52019876', '2020-12-02', (SELECT city_id FROM city WHERE city = 'Austin'));
INSERT INTO employees VALUES (DEFAULT, 'Samuel Price', '53056789', '2018-11-14', (SELECT city_id FROM city WHERE city = 'Austin'));
INSERT INTO employees VALUES (DEFAULT, 'Christine Rivera', '54090909', '2019-06-25', (SELECT city_id FROM city WHERE city = 'Austin'));
INSERT INTO employees VALUES (DEFAULT, 'Nathan Ward', '55012345', '2020-03-04', (SELECT city_id FROM city WHERE city = 'Austin'));
INSERT INTO employees VALUES (DEFAULT, 'Angela Watson', '56043210', '2021-08-17', (SELECT city_id FROM city WHERE city = 'Jacksonville'));
INSERT INTO employees VALUES (DEFAULT, 'Jeremy Butler', '57087654', '2018-12-08', (SELECT city_id FROM city WHERE city = 'Jacksonville'));
INSERT INTO employees VALUES (DEFAULT, 'Rachel Cox', '58054321', '2020-09-19', (SELECT city_id FROM city WHERE city = 'Jacksonville'));
INSERT INTO employees VALUES (DEFAULT, 'Philip Reed', '59098765', '2019-04-25', (SELECT city_id FROM city WHERE city = 'Jacksonville'));
INSERT INTO employees VALUES (DEFAULT, 'Heather Bell', '60065432', '2021-01-07', (SELECT city_id FROM city WHERE city = 'Jacksonville'));

INSERT INTO salaried_employees VALUES (DEFAULT, 50768.90, (SELECT id FROM employees WHERE employee_id = '01015678'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63428.10, (SELECT id FROM employees WHERE employee_id = '02022344'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46921.20, (SELECT id FROM employees WHERE employee_id = '03078192'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54312.40, (SELECT id FROM employees WHERE employee_id = '04056321'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48391.80, (SELECT id FROM employees WHERE employee_id = '05091234'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62570.60, (SELECT id FROM employees WHERE employee_id = '06012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55132.90, (SELECT id FROM employees WHERE employee_id = '07098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50759.40, (SELECT id FROM employees WHERE employee_id = '08045678'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63425.10, (SELECT id FROM employees WHERE employee_id = '09087654'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46873.20, (SELECT id FROM employees WHERE employee_id = '10090909'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54264.40, (SELECT id FROM employees WHERE employee_id = '11022233'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48350.80, (SELECT id FROM employees WHERE employee_id = '12012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62525.60, (SELECT id FROM employees WHERE employee_id = '13076543'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55117.90, (SELECT id FROM employees WHERE employee_id = '14019876'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50747.40, (SELECT id FROM employees WHERE employee_id = '15087654'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63409.10, (SELECT id FROM employees WHERE employee_id = '16091234'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46829.20, (SELECT id FROM employees WHERE employee_id = '17056789'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54218.40, (SELECT id FROM employees WHERE employee_id = '18012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48313.80, (SELECT id FROM employees WHERE employee_id = '19043210'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62478.60, (SELECT id FROM employees WHERE employee_id = '20045678'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55072.70, (SELECT id FROM employees WHERE employee_id = '21011223'));
INSERT INTO salaried_employees VALUES (DEFAULT, 70850.40, (SELECT id FROM employees WHERE employee_id = '22067890'));
INSERT INTO salaried_employees VALUES (DEFAULT, 51730.60, (SELECT id FROM employees WHERE employee_id = '23090909'));
INSERT INTO salaried_employees VALUES (DEFAULT, 59885.90, (SELECT id FROM employees WHERE employee_id = '24065432'));
INSERT INTO salaried_employees VALUES (DEFAULT, 64189.10, (SELECT id FROM employees WHERE employee_id = '25098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50681.50, (SELECT id FROM employees WHERE employee_id = '26045678'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62431.80, (SELECT id FROM employees WHERE employee_id = '27098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46839.10, (SELECT id FROM employees WHERE employee_id = '28067890'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54230.30, (SELECT id FROM employees WHERE employee_id = '29054321'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48284.90, (SELECT id FROM employees WHERE employee_id = '30012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62516.80, (SELECT id FROM employees WHERE employee_id = '31067890'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55105.00, (SELECT id FROM employees WHERE employee_id = '32019876'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50738.50, (SELECT id FROM employees WHERE employee_id = '33023456'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63400.20, (SELECT id FROM employees WHERE employee_id = '34045678'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46820.30, (SELECT id FROM employees WHERE employee_id = '35098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54211.50, (SELECT id FROM employees WHERE employee_id = '36056789'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48266.10, (SELECT id FROM employees WHERE employee_id = '37019876'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62500.00, (SELECT id FROM employees WHERE employee_id = '38012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55088.20, (SELECT id FROM employees WHERE employee_id = '39087654'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50694.40, (SELECT id FROM employees WHERE employee_id = '40043210'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63470.60, (SELECT id FROM employees WHERE employee_id = '41011223'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46848.70, (SELECT id FROM employees WHERE employee_id = '42054321'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54243.10, (SELECT id FROM employees WHERE employee_id = '43098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48297.70, (SELECT id FROM employees WHERE employee_id = '44065432'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62489.60, (SELECT id FROM employees WHERE employee_id = '45019876'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55078.80, (SELECT id FROM employees WHERE employee_id = '46012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50701.30, (SELECT id FROM employees WHERE employee_id = '47067890'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63364.00, (SELECT id FROM employees WHERE employee_id = '48098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46804.10, (SELECT id FROM employees WHERE employee_id = '49023456'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54195.30, (SELECT id FROM employees WHERE employee_id = '50054321'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48150.90, (SELECT id FROM employees WHERE employee_id = '51065432'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62432.80, (SELECT id FROM employees WHERE employee_id = '52019876'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55121.00, (SELECT id FROM employees WHERE employee_id = '53056789'));
INSERT INTO salaried_employees VALUES (DEFAULT, 50744.50, (SELECT id FROM employees WHERE employee_id = '54090909'));
INSERT INTO salaried_employees VALUES (DEFAULT, 63406.20, (SELECT id FROM employees WHERE employee_id = '55012345'));
INSERT INTO salaried_employees VALUES (DEFAULT, 46884.30, (SELECT id FROM employees WHERE employee_id = '56043210'));
INSERT INTO salaried_employees VALUES (DEFAULT, 54279.70, (SELECT id FROM employees WHERE employee_id = '57087654'));
INSERT INTO salaried_employees VALUES (DEFAULT, 48334.30, (SELECT id FROM employees WHERE employee_id = '58054321'));
INSERT INTO salaried_employees VALUES (DEFAULT, 62526.20, (SELECT id FROM employees WHERE employee_id = '59098765'));
INSERT INTO salaried_employees VALUES (DEFAULT, 55115.40, (SELECT id FROM employees WHERE employee_id = '60065432'));

INSERT INTO hourly_employees VALUES (DEFAULT, 26.50, (SELECT id FROM employees WHERE employee_id = '01015678'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.75, (SELECT id FROM employees WHERE employee_id = '02022344'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.80, (SELECT id FROM employees WHERE employee_id = '03078192'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.50, (SELECT id FROM employees WHERE employee_id = '04056321'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.75, (SELECT id FROM employees WHERE employee_id = '05091234'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.60, (SELECT id FROM employees WHERE employee_id = '06012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.10, (SELECT id FROM employees WHERE employee_id = '07098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.80, (SELECT id FROM employees WHERE employee_id = '08045678'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.50, (SELECT id FROM employees WHERE employee_id = '09087654'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.30, (SELECT id FROM employees WHERE employee_id = '10090909'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.10, (SELECT id FROM employees WHERE employee_id = '11022233'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.40, (SELECT id FROM employees WHERE employee_id = '12012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.90, (SELECT id FROM employees WHERE employee_id = '13076543'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.90, (SELECT id FROM employees WHERE employee_id = '14019876'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.30, (SELECT id FROM employees WHERE employee_id = '15087654'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.70, (SELECT id FROM employees WHERE employee_id = '16091234'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.20, (SELECT id FROM employees WHERE employee_id = '17056789'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.90, (SELECT id FROM employees WHERE employee_id = '18012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.40, (SELECT id FROM employees WHERE employee_id = '19043210'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.50, (SELECT id FROM employees WHERE employee_id = '20045678'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.80, (SELECT id FROM employees WHERE employee_id = '21011223'));
INSERT INTO hourly_employees VALUES (DEFAULT, 26.10, (SELECT id FROM employees WHERE employee_id = '22067890'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.60, (SELECT id FROM employees WHERE employee_id = '23090909'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.50, (SELECT id FROM employees WHERE employee_id = '24065432'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.30, (SELECT id FROM employees WHERE employee_id = '25098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.70, (SELECT id FROM employees WHERE employee_id = '26045678'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.40, (SELECT id FROM employees WHERE employee_id = '27098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.90, (SELECT id FROM employees WHERE employee_id = '28067890'));
INSERT INTO hourly_employees VALUES (DEFAULT, 26.20, (SELECT id FROM employees WHERE employee_id = '29054321'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.90, (SELECT id FROM employees WHERE employee_id = '30012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.70, (SELECT id FROM employees WHERE employee_id = '31067890'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.50, (SELECT id FROM employees WHERE employee_id = '32019876'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.60, (SELECT id FROM employees WHERE employee_id = '33023456'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.70, (SELECT id FROM employees WHERE employee_id = '34045678'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.60, (SELECT id FROM employees WHERE employee_id = '35098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 26.30, (SELECT id FROM employees WHERE employee_id = '36056789'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.80, (SELECT id FROM employees WHERE employee_id = '37019876'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.80, (SELECT id FROM employees WHERE employee_id = '38012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.80, (SELECT id FROM employees WHERE employee_id = '39087654'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.50, (SELECT id FROM employees WHERE employee_id = '40043210'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.60, (SELECT id FROM employees WHERE employee_id = '41011223'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.70, (SELECT id FROM employees WHERE employee_id = '42054321'));
INSERT INTO hourly_employees VALUES (DEFAULT, 26.40, (SELECT id FROM employees WHERE employee_id = '43098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.80, (SELECT id FROM employees WHERE employee_id = '44065432'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.90, (SELECT id FROM employees WHERE employee_id = '45019876'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.70, (SELECT id FROM employees WHERE employee_id = '46012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.80, (SELECT id FROM employees WHERE employee_id = '47067890'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.90, (SELECT id FROM employees WHERE employee_id = '48098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.60, (SELECT id FROM employees WHERE employee_id = '49023456'));
INSERT INTO hourly_employees VALUES (DEFAULT, 26.50, (SELECT id FROM employees WHERE employee_id = '50054321'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.70, (SELECT id FROM employees WHERE employee_id = '51065432'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.80, (SELECT id FROM employees WHERE employee_id = '52019876'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.90, (SELECT id FROM employees WHERE employee_id = '53056789'));
INSERT INTO hourly_employees VALUES (DEFAULT, 24.50, (SELECT id FROM employees WHERE employee_id = '54090909'));
INSERT INTO hourly_employees VALUES (DEFAULT, 21.60, (SELECT id FROM employees WHERE employee_id = '55012345'));
INSERT INTO hourly_employees VALUES (DEFAULT, 23.70, (SELECT id FROM employees WHERE employee_id = '56043210'));
INSERT INTO hourly_employees VALUES (DEFAULT, 26.40, (SELECT id FROM employees WHERE employee_id = '57087654'));
INSERT INTO hourly_employees VALUES (DEFAULT, 20.80, (SELECT id FROM employees WHERE employee_id = '58054321'));
INSERT INTO hourly_employees VALUES (DEFAULT, 25.90, (SELECT id FROM employees WHERE employee_id = '59098765'));
INSERT INTO hourly_employees VALUES (DEFAULT, 22.80, (SELECT id FROM employees WHERE employee_id = '60065432'));