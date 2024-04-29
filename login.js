
document.getElementById('signupContainer').style.display = 'none';

document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
});
