const API = "http://localhost:3000";

const regForm = document.getElementById("registerForm");
if (regForm) {
    regForm.onsubmit = async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !email || !password) {
            alert("All fields are required");
            return;
        }

        if (password.length < 4) {
            alert("Password must be at least 4 characters");
            return;
        }

        await fetch(API + "/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        alert("Registered!");
        window.location = "login.html";
    };
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.onsubmit = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        const res = await fetch(API + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem("user", JSON.stringify(data.user));
            window.location = "index.html";
        } else {
            alert("Invalid login");
        }
    };
}

const itemForm = document.getElementById("itemForm");
if (itemForm) {
    itemForm.onsubmit = async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first");
            window.location = "login.html";
            return;
        }

        const title = document.getElementById("title").value.trim();
        const location = document.getElementById("location").value.trim();
        const type = document.getElementById("type").value;
        const description = document.getElementById("description").value.trim();

        if (!title || !location || !type) {
            alert("Please fill all required fields");
            return;
        }

        await fetch(API + "/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                location,
                type,
                description,
                user_id: user.id
            })
        });

        alert("Item Added!");
        window.location = "index.html";
    };
}

async function loadItems() {
    const res = await fetch(API + "/items");
    const data = await res.json();

    const container = document.getElementById("items");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
        container.innerHTML += `
            <div class="card ${item.type}">
                <h3>${item.title}</h3>
                <p><b>Location:</b> ${item.location || "Not specified"}</p>
                <p>${item.description || ""}</p>
            </div>
        `;
    });
}

const search = document.getElementById("search");
if (search) {
    search.oninput = async () => {
        const res = await fetch(API + "/items");
        const data = await res.json();

        const filtered = data.filter(i =>
            i.title.toLowerCase().includes(search.value.toLowerCase())
        );

        const container = document.getElementById("items");
        container.innerHTML = "";

        filtered.forEach(item => {
            container.innerHTML += `
                <div class="card ${item.type}">
                    <h3>${item.title}</h3>
                    <p><b>Location:</b> ${item.location || "Not specified"}</p>
                </div>
            `;
        });
    };
}
function showUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    const userInfo = document.getElementById("userInfo");

    if (!userInfo) return;

    if (user && user.name) {
        userInfo.innerHTML = `👤 Welcome, ${user.name}`;
    } else {
        userInfo.innerHTML = `<a href="login.html">Login</a>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showUser();
    loadItems();
});