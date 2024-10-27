console.log ('check check 1-2');

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    let firstNameVal = document.querySelector('#firstName-input').value;
    console.log(firstNameVal);
}