$(document).ready(readyNow);
// employee class
class Employees {
    // constructor
    constructor(firstName, lastName, idNum, title, annualSalary) {
    this.name = firstName;
    this.last = lastName;
    this.idNum = idNum;
    this.title = title;
    this.annual = annualSalary;
  } // end constructor
} // end employee class
// empty employees array
let employeeArr = [];
// readyNow function: submit & delete button click listeners
function readyNow() {
  $('#submit').on('click', submitEmployee);
//   $('#delete').on('click', deleteEmployee); // delete button click listener
}
// submit click handler
function submitEmployee() {
// creating new employees with input info
  let newEmployee = new Employees(
    $('#firstName').val(),
    $('#lastName').val(),
    $('#idNum').val(),
    $('#title').val(),
    $('#annualSalary').val(),
  ); // end newEmployee
// test in console log for new employees input info
  console.log('adding in', newEmployee);
// push newEmployee into employeeArr array
  employeeArr.push(newEmployee);
// display employee output tables on Dom
  displayEmployee();
}
// display Employee list on DOM
function displayEmployee() {
// empty out employee input array on DOM
  let employeeOutputEl = $('#employeesOutput');
  employeeOutputEl.empty();
// empty out total salary income on DOM
  let salaryOutputEl = $('#salaryOutput');
  salaryOutputEl.empty();
// calculate total salary, set salary to 0
  let totalSalary = 0;
// for loop of individual employees in employeeArr
  for(let one of employeeArr) {
    totalSalary += Number(one.annual);
    // employees output displayed on DOM
    $('#employeesOutput').append(`
    <table>
    <tr>
    <td>${one.name}</td>
    <td>${one.last}</td>
    <td>${one.idNum}</td>
    <td>${one.title}</td>
    <td>$${Number(one.annual).toFixed(2)}</td>
    </tr>
    </table>`);
}
// append total salary to dom
  $('#salaryOutput').append(totalSalary);
// log total salary test
  console.log('totalSalary', totalSalary); 
// clear input fields
  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNum').val('');
  $('#title').val('');
  $('#annualSalary').val('');
}
