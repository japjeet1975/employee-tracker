## employee-tracker

## Description
This app can be used to track and manage employees information. This CLI based application can be utilized to perform different sorts of inquiries on representative information base. Inquiries can be utilized to view, refresh and erase representatives, view and update divisions, view and update jobs. It utilizes 'inquirer' to get client information and afterward play out the essential inquiry to get the necessary data in a plain organization utilizing 'console.table'.


## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Walkthough Video

## Usage 
This app can be started using npm start in the terminal . Once it is started , user will be prompted with various options to perform various tasks. Walkthrough video has been linked . 

## License 
This app is covered under MIT License

## Screenshots
Screenshots of the app can be found in the publc/images folder. 