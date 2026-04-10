const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Apoos@123$",  
    database: "lost_found"
});

db.connect((err) => {
    if (err) {
        console.log("❌ Error connecting:", err);
    } else {
        console.log("✅ MySQL Connected");
    }
});

module.exports = db;