📚 ScholarSync

A modern Student Management System built using HTML, CSS, JavaScript, PHP, and MySQL.
It provides an interactive dashboard to manage student records with authentication, CRUD operations, pagination, and analytics.

🚀 Features
🔐 Login authentication system
📊 Dashboard with total students analytics
➕ Add new students
✏️ Edit student details (popup modal)
❌ Delete students
🔍 Live search functionality
📄 Pagination support
📈 Course-wise chart using Chart.js
🌗 Light/Dark theme toggle
🎨 Modern responsive UI with animations
🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: PHP
Database: MySQL
Visualization: Chart.js
Server: XAMPP (Apache + MySQL)
📂 Project Structure
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
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/vampire-debug/Scholarsync.git
2. Move project to XAMPP

Place inside:

C:\xampp\htdocs\scholarsync
3. Start XAMPP
Start Apache
Start MySQL
4. Setup database
Open phpMyAdmin
Create database (e.g. scholarsync)
Import your SQL file (if available)
5. Run project

Open browser:

http://localhost/scholarsync/login.html
🔐 Login Credentials
Username: admin
Password: dhruv
🌐 Deployment
Local: XAMPP server
Live: Can be deployed using PHP hosting like:
InfinityFree
000webhost
Hostinger

⚠️ Note: GitHub Pages does NOT support PHP backend.

💡 Future Improvements
JWT-based authentication
Role-based access (Admin/User)
Better UI animations
Cloud database integration
Mobile responsive optimization
