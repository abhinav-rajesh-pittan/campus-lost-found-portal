# Campus Lost & Found Portal

## Overview

The **Campus Lost & Found Portal** is a full-stack web application designed to help students and staff efficiently report, search, and recover lost items within a campus environment.

This system replaces traditional manual methods with a **centralized digital platform**, improving accessibility, organization, and recovery success.

---

## Features

* User Registration & Login
* Report Lost or Found Items
* Search Items by Title
* Display Logged-in User
* Organized Item Listings
* Fast and Responsive UI

---

## Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MySQL

---

## Project Structure

```
📁 campus-lost-found-portal
│── 📁 public
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── report.html
│   ├── styles.css
│   └── script.js
│
│── server.js
│── db.js
│── package.json
│── README.md
```

---

## Installation & Setup

### 1️Clone the Repository

```bash
git clone https://github.com/yourusername/campus-lost-found-portal.git
cd campus-lost-found-portal
```

### 2️Install Dependencies

```bash
npm install
```

### Setup MySQL Database

Create a database:

```sql
CREATE DATABASE lost_found;
```

Create tables:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  location VARCHAR(255),
  type ENUM('lost','found'),
  description TEXT,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### Run the Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📷 Screenshots

### Home Page

<img width="1880" height="821" alt="image" src="https://github.com/user-attachments/assets/e56ba5fb-872d-4736-9724-aef5799626e3" />
<img width="1914" height="423" alt="image" src="https://github.com/user-attachments/assets/a7ae22e4-0918-48e3-b87a-8d4219de6e27" />

### Login Page
<img width="1898" height="640" alt="image" src="https://github.com/user-attachments/assets/9895378c-380a-4fda-bd82-bc1f13a997a8" />


### Register Page

<img width="1895" height="695" alt="image" src="https://github.com/user-attachments/assets/d426b931-9868-4481-854b-03d4279024d6" />


### Report Item Page

<img width="1906" height="681" alt="image" src="https://github.com/user-attachments/assets/2a4ea0a2-a7a7-4ef4-ba7f-b7ce34330788" />


---

## API Endpoints

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | /register | Register new user |
| POST   | /login    | User login        |
| POST   | /items    | Add item          |
| GET    | /items    | Fetch all items   |

---

## Future Enhancements

* 📧 Email notifications
* 🖼 Image upload for items
* 📍 Location-based filtering
* 📱 Mobile responsiveness

---

## Author

**Abhinav Rajesh Pittan**
B.Tech CSE (AI & ML)

---

## Acknowledgements

* Node.js Documentation
* Express.js Documentation
* MySQL Documentation
* MDN Web Docs

---

## License

This project is for academic purposes.
