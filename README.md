````md id="clean1"
# 📚 ScholarSync

A modern **Student Management System** built using HTML, CSS, JavaScript, PHP, and MySQL.  
It provides an interactive dashboard to manage student records with authentication, CRUD operations, pagination, and analytics.

---

## 🚀 Features

- 🔐 Login authentication system  
- 📊 Dashboard with total student analytics  
- ➕ Add new students  
- ✏️ Edit student details (popup modal)  
- ❌ Delete students  
- 🔍 Live search functionality  
- 📄 Pagination support  
- 📈 Course-wise chart using Chart.js  
- 🌗 Light/Dark theme toggle  
- 🎨 Modern responsive UI with animations  

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: PHP  
- Database: MySQL  
- Visualization: Chart.js  
- Server: XAMPP (Apache + MySQL)  

---

## 📂 Project Structure

```plaintext
Scholarsync/
│── index.html          # Dashboard page
│── login.html          # Login page
│── style.css           # UI styling
│── script.js           # Frontend logic
│── login.php           # Authentication
│── fetch.php           # Fetch students
│── insert.php          # Add student
│── update.php          # Update student
│── delete.php          # Delete student
│── stats.php           # Dashboard stats
│── count.php           # Pagination count
│── db.php              # Database connection
│── assets/             # Images (login.svg etc.)
````

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/vampire-debug/Scholarsync.git
```

### 2. Move project to XAMPP

Place inside:

```plaintext
C:\xampp\htdocs\scholarsync
```

### 3. Start XAMPP

* Start Apache
* Start MySQL

### 4. Setup database

* Open phpMyAdmin
* Create database (e.g. `scholarsync`)
* Import SQL file (if available)

### 5. Run project

Open:

```url
http://localhost/scholarsync/login.html
```

---

## 🔐 Login Credentials

* Username: `admin`
* Password: `dhruv`

---

## 🌐 Deployment

* Local: XAMPP server
* Live hosting options:

  * InfinityFree
  * 000webhost
  * Hostinger

⚠️ GitHub Pages does NOT support PHP backend.

---

## 💡 Future Improvements

* JWT-based authentication
* Role-based access (Admin/User)
* Better UI animations
* Cloud database integration
* Mobile responsiveness improvements

---

## 📸 Screenshots

![Dashboard](https://github.com/user-attachments/assets/efb35a38-4552-4329-8552-1f89015e3d54)

![Feature View](https://github.com/user-attachments/assets/457e49ef-d968-43fe-8e67-fb3ca4587e58)

![UI](https://github.com/user-attachments/assets/2f5ede70-e464-47f0-ad7f-daaec5a62b67)

![Analytics](https://github.com/user-attachments/assets/55793824-4b63-44f5-a3df-4720aa651d01)

![Extra View](https://github.com/user-attachments/assets/8346eab3-02d6-4e81-a5b2-95c4f4dc514f)

```
```
