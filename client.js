$(document).ready(readyNow);
// employee class
class Employees {
    // constructor
    constructor(firstName, lastName, idNum, title, annualSalary) {
    this.name = firstName;
    this.last = lastName;
    this.idNum = idNum;
    this.title = title;
    this.annualSalary = annualSalary;
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
  );
// test in console log for new employees input info
console.log('adding in', newEmployee);
}

