CREATE TABLE IF NOT EXISTS customer (
	customer_id INT(11) NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(45) NOT NULL,
	lastName VARCHAR(45) NOT NULL,
	Phone VARCHAR(20) DEFAULT NULL,
	outstandingBalance DECIMAL(19, 4) DEFAULT NULL,
	lastAppointmentDate DATE DEFAULT NULL,
	nextAppointmentDate DATE DEFAULT NULL,
	customerSince DATE NOT NULL,
	
	PRIMARY KEY (customer_id)
) ENGINE=InnoDB

CREATE TABLE IF NOT EXISTS appointment (
	appointment_id INT(11) NOT NULL AUTO_INCREMENT,
	reasonDescription VARCHAR(255) NOT NULL,
	appointmentDateTime DATE NOT NULL,
	estimatedDuration INT(11) NOT NULL,
	customer_id INT(11) NOT NULL,
	
	FOREIGN KEY (customer_id)
	REFERENCES customer(customer_id)
	ON UPDATE CASCADE,
	
	PRIMARY KEY (appointment_id)
) ENGINE=InnoDB

CREATE TABLE IF NOT EXISTS employee (
	employee_id INT(11) NOT NULL AUTO_INCREMENT,
	firstNamelastName VARCHAR(45) NOT NULL,
	officePhone VARCHAR(20) DEFAULT NULL,
	cellPhone VARCHAR(20) NOT NULL,
	employeeType INT(11) NOT NULL,
	hireDate DATE NOT NULL,
	
	PRIMARY KEY (employee_id)
) ENGINE=InnoDB

CREATE TABLE IF NOT EXISTS participant (
	appointment_id INT(11) NOT NULL,
	employee_id INT(11) NOT NULL,
	role INT(11) NOT NULL,
	description VARCHAR(255),
	estimatedDuration INT(11) NOT NULL,
	actualDuration INT(11) DEFAULT NULL,
	
	FOREIGN KEY (appointment_id)
	REFERENCES appointment(appointment_id)
	ON UPDATE CASCADE,
	
	PRIMARY KEY (appointment_id, employee_id)
) ENGINE=InnoDB