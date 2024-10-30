console.log ('check check 1-2');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();
   

    let firstNameVal= document.querySelector('#firstName-input').value;
    let lastNameVal= document.querySelector('#lastName-input').value;
    let idNumberVal= document.querySelector('#idNumber-input').value;
    let titleVal= document.querySelector('#title-input').value;
    let annualSalaryVal= document.querySelector('#annualSalary-input').value;

    let employeeTable = document.querySelector('#employeeData');

    employeeTable.innerHTML += `
    <tr>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${idNumberVal}</td>
        <td>${titleVal}</td>
        <td>${annualSalaryVal}</td>
        <td><button onClick="removeData(event)">Delete</button></td>
    </tr>`;
}



// let totalSalary = 0;

//     let salarySum = totalSalary += annualSalary;
//     for (let i = 0; i < totalSalary.length; i++) {
//         totalSalary += annualSalary[i];
//     }
//     console.log(salarySum);

//     let monthlySalary = (salarySum / 12);
//     console.log (monthlySalary);