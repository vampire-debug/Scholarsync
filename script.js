
let chartInstance = null;
let currentPage = 1;
let limit = 5;

// ================= THEME =================
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// apply saved theme
window.onload = function () {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    loadStudents(1);
    loadDashboard();
};

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}

// ================= ADD STUDENT =================
function addStudent() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    fetch("insert.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `name=${name}&email=${email}&course=${course}`
    })
    .then(() => {
        loadStudents(currentPage);
        loadDashboard();
        clearInputs();
    });
}

// ================= LOAD STUDENTS (PAGINATION) =================
function loadStudents(page = 1) {

    currentPage = page;

    fetch(`fetch.php?page=${page}&limit=${limit}`)
    .then(res => res.json())
    .then(data => {
        render(data);
        loadPagination();
    });
}

// ================= SEARCH =================
function searchStudents() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    fetch(`fetch.php?page=1&limit=1000`)
    .then(res => res.json())
    .then(data => {

        let filtered = data.filter(s =>
            s.name.toLowerCase().includes(input) ||
            s.email.toLowerCase().includes(input) ||
            s.course.toLowerCase().includes(input)
        );

        render(filtered);
    });
}

function render(data) {

    let html = "";

    data.forEach(s => {
        html += `
        <div class="card">
            <div>
                <h3>${s.name}</h3>
                <p>${s.email}</p>
                <p>${s.course}</p>
            </div>

            <div>
                <button onclick="openEdit(${s.id}, '${s.name}', '${s.email}', '${s.course}')">
                    Edit
                </button>

                <button onclick="deleteStudent(${s.id})">
                    Delete
                </button>
            </div>
        </div>
        `;
    });

    document.getElementById("studentList").innerHTML = html;
}


// OPEN POPUP
function openEdit(id, name, email, course) {

    document.getElementById("editId").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;
    document.getElementById("editCourse").value = course;

    document.getElementById("editModal").style.display = "flex";
}

// CLOSE POPUP
function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

// UPDATE DATA
function updateStudent() {

    let id = document.getElementById("editId").value;
    let name = document.getElementById("editName").value;
    let email = document.getElementById("editEmail").value;
    let course = document.getElementById("editCourse").value;

    fetch("update.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `id=${id}&name=${name}&email=${email}&course=${course}`
    })
    .then(() => {
        closeModal();
        loadStudents(currentPage);
        loadDashboard();
    });
}
// ================= DELETE =================
function deleteStudent(id) {

    fetch("delete.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "id=" + id
    })
    .then(() => {
        loadStudents(currentPage);
        loadDashboard();
    });
}

// ================= DASHBOARD =================
function loadDashboard() {

    fetch("stats.php")
    .then(res => res.json())
    .then(data => {

        document.getElementById("totalStudents").innerText = data.totalStudents;

        let labels = [];
        let values = [];

        data.courses.forEach(c => {
            labels.push(c.course);
            values.push(c.count);
        });

        if (chartInstance) chartInstance.destroy();

        chartInstance = new Chart(document.getElementById("courseChart"), {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Students",
                    data: values
                }]
            }
        });
    });
}

// ================= PAGINATION =================
function loadPagination() {

    fetch("count.php")
    .then(res => res.json())
    .then(data => {

        let totalPages = Math.ceil(data.total / limit);

        let html = "";

        for (let i = 1; i <= totalPages; i++) {

            html += `
                <button onclick="loadStudents(${i})"
                style="
                    margin:5px;
                    padding:8px 12px;
                    border-radius:8px;
                    border:none;
                    cursor:pointer;
                    ${i === currentPage
                        ? 'background:#111;color:white;'
                        : 'background:#6366f1;color:white;'}
                ">
                    ${i}
                </button>
            `;
        }

        document.getElementById("pagination").innerHTML = html;
    });
}

// ================= CLEAR INPUTS =================
function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
}