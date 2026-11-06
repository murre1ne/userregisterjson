const form = document.querySelector("#userForm");
const usersList = document.querySelector("#usersList");

let users = JSON.parse(localStorage.getItem("users")) || [];


function renderUsers() {
    usersList.innerHTML = "";

    users.forEach(user => {
        const div = document.createElement("div");

        div.classList.add("user");

        div.innerHTML = `
            <h3>${user.username}</h3>
            <p>${user.email}</p>
        `;

        usersList.append(div);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    const newUser = {
        id: Date.now(),
        username: username,
        email: email,
        password: password
    };

    users.push(newUser);


    localStorage.setItem("users", JSON.stringify(users));

    form.reset();

    renderUsers();
});

renderUsers();
