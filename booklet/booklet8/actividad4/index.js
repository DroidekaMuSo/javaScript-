const students = [];
class Student {
  constructor(literal) {
    this.id = students.length;
    this.name = literal.name;
    this.age = literal.age;
    this.course = literal.course;
  }
}

const formulario = document.createElement("form");
formulario.innerHTML = `
<label for = 'name'>Name</label>
<input type = 'text' id = 'name' name='name'>

<label for = 'number'>Age</label>
<input type = 'number' id = 'age' name='age'>

<label for = 'text'>Course</label>
<input type = 'text' id = 'course' name='course'>

<input type = 'submit' value = 'Submit'>
`;

formulario.onsubmit = (e) => {
  e.preventDefault();

  const inputs = e.target.children;
  students.push(
    new Student({
      name: inputs[0].value,
      age: inputs[1].value,
      course: inputs[2].value,
    })
  );
  showStudents(students);
  const btnStudents = document.getElementsByClassName("btnStudent");

  for (const iterator of btnStudents) {
    iterator.onclick = (e) => {
      const selected = students.find((obj) => obj.id == e.target.id);
      let notice = document.createElement("h6");
      notice.innerHTML = `Name ${selected.name} - Age ${selected.age}`;
      output.prepend(notice);
    };
  }
};

function showStudents(students) {
  output.innerHTML = "";
  for (const student of students) {
    let divStudent = document.createElement("div");
    divStudent.innerHTML = `<h2>${student.name}</h2>
    <p>${student.age} / ${student.course}</p>
    <button id = '${student.id}' class='btnStudent'>Select</button>`;
    output.appendChild(divStudent);
  }
}

const output = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(output);
