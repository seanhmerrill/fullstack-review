
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

function login (e) {
    e.preventDefault();

    const body = {
        username: username.value,
        password: password.value
    };
    axios.post("http://localhost:4040/login", body).then(result => {
        console.log(result.data);
        alert(result.data)
    }).catch(err => console.log(err));
}

form.addEventListener("submit", login)