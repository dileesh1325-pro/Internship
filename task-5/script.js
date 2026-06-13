const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const search = document.getElementById("search");

let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

form.addEventListener("submit", function(e){
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    form.reset();

    displayStudents();
});

function displayStudents(filtered = students){

    studentList.innerHTML = "";

    filtered.forEach((student,index)=>{

        studentList.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>

            <td>
                <button class="edit" onclick="editStudent(${index})">Edit</button>

                <button class="delete" onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteStudent(index){

    students.splice(index,1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function editStudent(index){

    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("course").value = student.course;

    deleteStudent(index);
}

search.addEventListener("keyup", ()=>{

    let value = search.value.toLowerCase();

    let filtered = students.filter(student =>
        student.name.toLowerCase().includes(value)
    );

    displayStudents(filtered);
});