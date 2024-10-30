console.log ('check check 1-2');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
   

    let firstName= document.querySelector('#firstNameInput').value;
    let lastName= document.querySelector('#lastNameInput').value;
    let idNumber= document.querySelector('#idNumberInput').value;
    let title= document.querySelector('#titleInput').value;
    let annualSalary= document.querySelector('#annualSalaryInput').value;

    let employeeTable = document.querySelector('#employeeData');

    employeeTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
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