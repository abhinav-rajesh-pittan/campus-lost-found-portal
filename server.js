const express = require("express");
const db = require("./db");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

// ---------- REGISTER ----------
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        (err) => {
            if (err) return res.send("User exists");
            res.send("Registered");
        }
    );
});

// ---------- LOGIN ----------
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password],
        (err, result) => {
            if (result.length > 0) {
                res.json({ success: true, user: result[0] });
            } else {
                res.json({ success: false });
            }
        }
    );
});

// ---------- ADD ITEM ----------
app.post("/items", (req, res) => {
    const { title, location, type, description, user_id } = req.body;

    db.query(
        "INSERT INTO items (title, location, type, description, user_id) VALUES (?, ?, ?, ?, ?)",
        [title, location, type, description, user_id],
        (err) => {
            if (err) return res.send(err);
            res.send("Item added");
        }
    );
});

// ---------- GET ITEMS ----------
app.get("/items", (req, res) => {
    db.query("SELECT * FROM items ORDER BY created_at DESC", (err, result) => {
        res.json(result);
    });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));