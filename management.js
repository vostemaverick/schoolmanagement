// Student Form Handler
const studentForm = document.getElementById('studentForm');
if (studentForm) {
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const email = document.getElementById('studentEmail').value;
        const roll = document.getElementById('studentRoll').value;
        const grade = document.getElementById('studentGrade').value;

        addStudentRow(name, email, roll, grade);
        studentForm.reset();
    });
}

function addStudentRow(name, email, roll, grade) {
    const tableBody = document.getElementById('studentTableBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${roll}</td>
        <td>Grade ${grade}</td>
        <td><button class="btn-delete" onclick="deleteRow(this)">Delete</button></td>
    `;
    tableBody.appendChild(row);
}

// Teacher Form Handler
const teacherForm = document.getElementById('teacherForm');
if (teacherForm) {
    teacherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('teacherName').value;
        const email = document.getElementById('teacherEmail').value;
        const subject = document.getElementById('teacherSubject').value;
        const phone = document.getElementById('teacherPhone').value;

        addTeacherRow(name, email, subject, phone);
        teacherForm.reset();
    });
}

function addTeacherRow(name, email, subject, phone) {
    const tableBody = document.getElementById('teacherTableBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${subject}</td>
        <td>${phone}</td>
        <td><button class="btn-delete" onclick="deleteRow(this)">Delete</button></td>
    `;
    tableBody.appendChild(row);
}

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
}