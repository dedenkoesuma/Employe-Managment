export interface Employee {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: Date;
}

export const dataEmployee: Employee[] = [
  {
    id: 1,
    username: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    birthDate: new Date('1990-01-15'),
    basicSalary: 60000,
    status: 'Active',
    group: 'Engineering',
    description: new Date('2022-01-01'),
  },
  {
    id: 2,
    username: 'jane_smith',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    birthDate: new Date('1988-05-20'),
    basicSalary: 75000,
    status: 'Active',
    group: 'Sales',
    description: new Date('2022-01-05'),
  },
  {
    id: 3,
    username: 'bob_jones',
    firstName: 'Bob',
    lastName: 'Jones',
    email: 'bob.jones@example.com',
    birthDate: new Date('1995-09-10'),
    basicSalary: 50000,
    status: 'Inactive',
    group: 'Marketing',
    description: new Date('2022-02-10'),
  },

];
