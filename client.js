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
  $('#submit').on('click', submitEmployee); // submit button click listener
} // end readyNow
// submit click  handler
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
  displayOutputs();
} // end submitEmployee
// display employee outputs on DOM & calculating total salary
function displayOutputs() {
// empty out employee input array on DOM
  let employeeOutputEl = $('#employeesOutput');
  employeeOutputEl.empty();
// calculate total salary, set salary to 0
  let totalSalary = 0;
// for loop of individual employees in employeeArr
  for(let one of employeeArr) {
    totalSalary += Number(one.annual);
    // employees output displayed on DOM
    $('#employeesOutput').append(`
    <table>
    <tr id="${one.idNum}">
    <td>${one.name}</td>
    <td>${one.last}</td>
    <td>${one.idNum}</td>
    <td>${one.title}</td>
    <td>$${Number(one.annual).toFixed(2)}</td>
    <td><button id="${one.idNum}">Delete Employee</button></td>
    </tr>
    </table>`);
    // delete click listener & handler
    $(`#${one.idNum}`).on('click', function () {
      $(`#${one.idNum}`).remove();
      console.log(one.idNum);
    })
}
// calling calculate function 
  calculateDisplay(totalSalary);
// clear input fields
  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNum').val('');
  $('#title').val('');
  $('#annualSalary').val('');
} // end displayOutputs
// calculate total monthly and displays it on DOM
function calculateDisplay(allSalary) {
// empty out total salary income on DOM
  let salaryOutputEl = $('#salaryOutput');
  salaryOutputEl.empty();
// calculate total monthly costs
  let totalMonthly = allSalary / 12;
  if (totalMonthly > 20000) {
    $('#salaryOutput').css('color', 'red')
  }
// append total salary to dom
  $('#salaryOutput').append(`
  <table>
  <tr>
  <td>${totalMonthly.toFixed(2)}</td>
  </tr>
  </table>`);
} // end calculateDisplay