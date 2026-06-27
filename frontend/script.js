function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if(email === adminEmail && password === adminPassword) {

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }
}