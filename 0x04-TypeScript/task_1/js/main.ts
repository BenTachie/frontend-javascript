// This is a TypeScript interface for a teacher
interface Teacher {
  readonly firstName: string; //This attribute is read-only, meaning it cannot be changed after initialization
  readonly lastName: string; //Same as above
  fullTimeEmployee: boolean; // A required boolean. Must be defined.
  yearsOfExperience?: number; // "?" indicates that this property is optional.
  location: string; // A required string. Must be defined.
  [key: string]: any // This allows for additional properties of any type.
}
