//This is an interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// These are two students created using the Student interface
const student1: Student = {
  firstName: "Benedict",
  lastName: "Tachie",
  age: 25,
  location: "South Africa",
};

const student2: Student = {
  firstName: "Ada",
  lastName: "Obeng",
  age: 22,
  location: "Ghana",
};

//This array holds the two students
const studentsList: Student[] = [student1, student2];

// This is will create a table with the first name and location of each student in the studentsList array
const table = document.createElement("table");
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
}); 
document.body.appendChild(table);
