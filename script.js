function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'eye-closed.jpg';
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'eye-open.jpg';
    }
}



const checkbox = document.getElementById('myCheckbox');

checkbox.checked = localStorage.getItem('checkboxState') === 'true';

checkbox.addEventListener('change', () => {
localStorage.setItem('checkboxState', checkbox.checked);
});





document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const respMessage = document.getElementById('respMessage');
    const spinner = document.getElementById('spinner');

    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    respMessage.textContent = '';


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

let isValid = true;

    
    if (!username) {
        usernameError.textContent = 'Email is required';
        usernameError.style.display = 'block';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
        usernameError.textContent = 'Please enter a valid email format.';
        usernameError.style.display = 'block';
        
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
        document.getElementById('spinner').style.display = 'none';

        isValid = false;
    }

    if (!isValid) return;


    spinner.style.display = 'block';

            


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    
    .then(response => {
        spinner.style.display = 'none';
        if (response.ok) {
            respMessage.textContent = 'Login successful✅';
            respMessage.style.color = 'green';
        } else {
            respMessage.textContent = 'Login failed❌';
            respMessage.style.color = 'red';
        }
        return response.json();
    })
    .catch(error => {
        spinner.style.display = 'none';
        respMessage.textContent = 'Login failed❌';
        respMessage.style.color = 'red';
    });


   
});


