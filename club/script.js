function submit(){
    window.location.replace('/events.html')
}

// JavaScript code for form validation
function validateForm() {
    const userId = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Define valid user credentials (replace with your own data)
    const validCredentials = [
        { userId: 'user1', password: 'password1' },
        { userId: 'user2', password: 'password2' },
    ];

    // Check if user credentials match
    const validUser = validCredentials.find(cred => cred.userId === userId && cred.password === password);

    if (!validUser) {
        errorMessage.textContent = 'Invalid User ID or Password.';
        return false;
    }
    else{
        alert("Success!")
        window.location.href = 'https://solid-tribble-4j7pp4xpwxxpfj95j-3000.app.github.dev/';
        // window.location.href = '/work.html';
    }
    return false;
}

// JavaScript function to handle photo upload (you can implement the actual functionality here)
function uploadPhoto() {
    const profilePhotoInput = document.getElementById('profilePhotoInput');
    const selectedFile = profilePhotoInput.files[0];

    if (selectedFile) {
        // You can implement photo upload logic here, e.g., sending the file to a server.
        alert('Photo uploaded: ' + selectedFile.name);
    }
}

function uploadPhoto() {
    const profilePhotoInput = document.getElementById('profilePhotoInput');
    const profilePhoto = document.getElementById('profilePhoto');
    const selectedFile = profilePhotoInput.files[0];

    if (selectedFile) {
        // You can implement photo upload logic here, e.g., sending the file to a server.
        // For demonstration purposes, we'll set the src attribute to a local file URL.
        profilePhoto.src = URL.createObjectURL(selectedFile);
        alert('Photo uploaded: ' + selectedFile.name);
    }
}