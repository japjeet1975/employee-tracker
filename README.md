## employee-tracker

## Description
This software may be applied to comply with and oversee employees records. 
This CLI primarily based utility can be used to perform various types of requests on agent statistics base. 
Requests may be used to look, revive and delete sellers, view and replace divisions, view and update occupations. 
It makes use of 'inquirer' to get patron facts and thereafter play out the fundamental request to get the crucial records in a simple affiliation the use of 'console.Table'.


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