// Validation for Name input
function validateformname() {
    const name = document.getElementById('Name')
    const value = name.value
    const errorMessage = document.getElementById('error')
    if (value === "" | value.length < 3) {
        errorMessage.innerHTML = "enter a valid name"
    }
    else {
        errorMessage.innerHTML = "Valid Name!"
    }
}

// Validation for Phone Input
function isValidPhonepattern(phone) {
    const phonepattern = /^(?:(?:\+|0{0,2}91)\s*[-.]?\s*)?(?:\d{2}\s*[-.]?\s*)?\d{10}$/
    return phonepattern.test(phone)
}

function validateformphone() {
    let Phone = document.getElementById('Phone')
    let PhoneValue = Phone.value.trim()
    const errorMessage1 = document.getElementById('error1')

    if (PhoneValue === "") {
        errorMessage1.innerHTML = "Phone Filed cannt be empty"
    } else if (!isValidPhonepattern(PhoneValue)) {
        errorMessage1.innerHTML = "Please Enter a Valid Number"
    } else {
        // document.createElement("h2") = <h2>Number is valid</h2>
        errorMessage1.innerHTML = "Number is Valid!"
    }
}

function isValidPhonepattern(phone) {
    const phonepattern = /^(?:(?:\+|0{0,2}91)\s*[-.]?\s*)?(?:\d{2}\s*[-.]?\s*)?\d{10}$/
    return phonepattern.test(phone)
}
// Validation for Email input
function isvalidemailpattern(email) {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailpattern.test(email)
}

function validateformemail() {
    let email = document.getElementById('email')
    const errorMessage2 = document.getElementById('error2')
    let emailValue = email.value.trim()

    if (emailValue === "") {
        errorMessage2.innerHTML = "Email field cannot be empty"
    }
    else if (!isvalidemailpattern(emailValue)) {
        errorMessage2.innerHTML = "Please Enter a Valid Email Address"
    }
    else {
        errorMessage2.innerHTML = "Email look Good!"
    }
}

// Submit button start validation!


// function validateformsubmit(event) {
//   // Validate form inputs or perform actions
//   const forms = document.getElementById('form');
//   if (forms.checkValidity(event)) {
//     alert("Form submitted successfully!");
//     // Perform form submission or other actions
//   } else {
//     alert("Please fill out the required fields.");
//   }
// }

