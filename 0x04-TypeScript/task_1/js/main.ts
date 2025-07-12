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