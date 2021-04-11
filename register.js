function registerSubmit(event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let passwordRepeat = document.getElementById("password-repeat").value;
    let address = document.getElementById("address").value;
    
    if (password === passwordRepeat) {
        event.preventDefault();

        console.log(`Form Submitted! 
        username: ${username}
        email: ${email}
        password: ${password} 
        password repeat: ${passwordRepeat}
        dirección: ${address}
        `);

        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("password-repeat").value="";
        document.getElementById("email").value="";
        document.getElementById("address").value="";

        window.location = "./card.html"
    } else {
        alert("contraseñas no coinciden");
    }
    
}
  
const form = document.getElementById('register-form');
  
form.addEventListener('submit', registerSubmit);