const showBtn1 = document.getElementById("showBtn1");
const showBtn2 = document.getElementById("showBtn2");
const showBtn3 = document.getElementById("showBtn3");
const showBtn4 = document.getElementById("showBtn4");

showBtn1.addEventListener('click', function() {
    showMore(showBtn1, "details1");
});
showBtn2.addEventListener('click', function() {
    showMore(showBtn2, "details2");
});
showBtn3.addEventListener('click', function() {
    showMore(showBtn3, "details3");
});
showBtn4.addEventListener('click', function() {
    showMore(showBtn4, "details4");
});

function showMore(button, detailsId){
    const details = document.getElementById(detailsId);

    if (details.style.display === "none") {
        details.style.display = "inline";
        button.textContent = "Hide Details"; 
    } 
    
    else {
        details.style.display = "none";
        button.textContent = "Show Details"; 
    }
}

// Contact Form Validation

const form = document.getElementById('contactForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const successMessage = document.getElementById('successMessage');



form.addEventListener('submit', function(event) {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = ''; 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } 
    else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message';
        isValid = false;
    } 

    if (isValid) {
        console.log("isValid:", isValid);
        successMessage.textContent = 'Message submitted successfully! Will try to reach you in 7-14 business days. ';
    }
});

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
return re.test(String(email).toLowerCase());
}

//scroll up button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

