# FUTURE_FS_02
# FUTURE_FS_02 - Client Lead Management System (Mini CRM)

## 📌 Project Overview

The **Client Lead Management System (Mini CRM)** is a Full Stack Web Application developed as part of the **Future Interns Full Stack Web Development Internship – Task 2**.

This application helps businesses manage customer leads efficiently by allowing administrators to add, view, update, and organize lead information in a centralized dashboard.

---

## 🚀 Features

* ➕ Add New Leads
* 📋 View All Leads
* 🔄 Update Lead Status (New, Contacted, Converted)
* 📝 Add Follow-up Notes
* 📊 Dashboard with Lead Statistics
* 🗄️ MySQL Database Integration
* 🌐 REST API using Node.js and Express.js
* 📅 Automatic Timestamp for Lead Creation

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js

### Database

* MySQL
* MySQL Workbench

### Development Tools

* Visual Studio Code
*  GitHub

---

## 📁 Project Structure

```
FUTURE_FS_02/

├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── lead.html
│   ├── style.css
│   ├── script.js
│   ├── dashboard.js
│   └── lead.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FUTURE_FS_02.git
```

### 2. Navigate to Backend

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure MySQL

Create a database named:

```sql
mini_crm
```

Create the `leads` table:

```sql
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    source VARCHAR(100),
    status VARCHAR(50) DEFAULT 'New',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Update the MySQL credentials in `db.js`.

---

### 5. Start the Backend Server

```bash
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 6. Run the Frontend

Open the `frontend` folder using **VS Code Live Server** and launch:

* `dashboard.html`

---

## 📡 API Endpoints

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| GET    | /api/leads     | Get all leads      |
| POST   | /api/leads     | Add a new lead     |
| PUT    | /api/leads/:id | Update lead status |
| DELETE | /api/leads/:id | Delete a lead      |

---

## 📷 Screenshots

Add screenshots of:

* Login Page
* Dashboard
* Add Lead Form
* Lead List
* MySQL Database

---

## 🎯 Learning Outcomes

* Built a Full Stack Web Application
* Connected Frontend with Backend APIs
* Integrated MySQL Database
* Performed CRUD Operations
* Learned REST API Development
* Improved JavaScript and Express.js skills

---

## 🔮 Future Enhancements

* User Authentication (JWT)
* Search and Filter Leads
* Export Leads to Excel/PDF
* Email Notifications
* Pagination
* Responsive Dashboard
* Charts and Analytics

---

## 👩‍💻 Author

**Likitha**

B.Tech – Artificial Intelligence & Data Science

Shri Vishnu Engineering College for Women

Future Interns – Full Stack Web Development Internship

---

## 📄 License

This project was developed for educational and internship purposes as part of the **Future Interns Full Stack Web Development Internship**.
