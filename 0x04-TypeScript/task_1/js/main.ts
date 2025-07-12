// This is a TypeScript interface for a teacher
interface Teacher {
  readonly firstName: string; //This attribute is read-only, meaning it cannot be changed after initialization
  readonly lastName: string; //Same as above
  fullTimeEmployee: boolean; // A required boolean. Must be defined.
  yearsOfExperience?: number; // "?" indicates that this property is optional.
  location: string; // A required string. Must be defined.
  [key: string]: any // This allows for additional properties of any type.
}

// This is a Teacher object
const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, 
};

console.log(teacher1);

// This interface is for a director, which extends the Teacher interface
interface Director extends Teacher {
  numberOfReports: number; // A required number indicating how many teachers reports the director has
}

// This is a Director object
const director1: Director = {
  firstName: 'Jane',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  numberOfReports: 5,
};

console.log(director1);



// This is the interface for the function named printTeacherFunction.
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


// This function takes a first name and a last name, and returns a formatted string
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;  // Returns the first letter of firstName and the full lastName
};

console.log(printTeacher("John", "Doe"));// Example usage of the printTeacher function



// Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test
const student = new StudentClass('Benedict', 'Tachie');
console.log(student.workOnHomework());  // Output: "Currently working"
console.log(student.displayName());     // Output: "Benedict"
