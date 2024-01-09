function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate email format for username
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address for the username.');
        return;
    }

    // Validate password format
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain an uppercase letter, a number, and only allow @ as a special character.');
        return;
    }

    // Check if password is correct
    if (password === 'SmartServTest@123') {
        alert('Login successful! Redirecting to the dashboard...');
        // You can redirect the user to the dashboard here
    } else {
        alert('Incorrect password. Please try again.');
    }
}
