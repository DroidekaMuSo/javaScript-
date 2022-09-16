const students = [];

class Student {
  constructor(literal) {
    this.id = students.length;
    this.name = literal.name;
    this.age = literal.age;
    this.course = literal.course;
  }
}

let formulario = document.createElement("form");
formulario.innerHTML = `
<label>Name</label>
<input type='text'>

<label>Number</label>
<input type='number'>

<label>Course</label>
<input type='text'>

<input type='submit' value = 'Submit'>

`;
document.body.appendChild(formulario);

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
  document.body.append("Alumno Registrado");
};
