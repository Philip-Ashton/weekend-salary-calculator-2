console.log ('check check 1-2');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
   

    let firstName= document.querySelector('#firstNameInput');
    console.log(firstName);
    let lastName= document.querySelector('#lastNameInput');
    let idNumber= document.querySelector('#idNumberInput');
    let title= document.querySelector('#titleInput');
    let annualSalary= document.querySelector('#annualSalaryInput');



let totalSalary = 0;
    let salarySum = totalSalary += annualSalary;
    for (let i = 0; i < totalSalary.length; i++) {
        totalSalary += annualSalary[i];
    }
    console.log(salarySum);

    let monthlySalary = (salarySum / 12);
    console.log (monthlySalary);
}