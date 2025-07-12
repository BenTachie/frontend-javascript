
// Define the Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Test cases
console.log(createEmployee(200));      // Teacher
console.log(createEmployee(1000));     // Director
console.log(createEmployee('$500'));   // Director


// Type predicate function to check if employee is Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute appropriate work method
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Test cases
console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

// Define a string literal type
export type Subjects = 'Math' | 'History';

// Define the teachClass function
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Test cases
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
