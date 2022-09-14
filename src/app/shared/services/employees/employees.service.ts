import { Injectable } from '@angular/core';
import { IEmployee } from '../../models/employees';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private employeeInformation = new BehaviorSubject<any>(null);
  currentInformation = this.employeeInformation.asObservable();
  employees: Array<IEmployee> = [];
  constructor() {}

  save(data: IEmployee) {
    if (data) {
      const item: IEmployee = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
      };
      this.employees.push(item);
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }

  emitEmployee(employee: IEmployee) {
    this.employeeInformation.next(employee);
  }

  updateEmployee(employee: IEmployee) {
    const employees = this.getEmployees();
    employees[employees.findIndex((e) => e.id === employee.id)] = employee;

    localStorage.setItem('employees', JSON.stringify(this.employees));

    this.getEmployees();
  }

  deleteEmployee(id: number) {
    const employees = this.getEmployees();
    employees.splice(
      employees.findIndex((e) => e.id == id),
      1
    );
    localStorage.setItem('employees', JSON.stringify(employees));

    this.getEmployees();
  }

  getEmployees(): Array<IEmployee> {
    let obj = JSON.parse(localStorage.getItem('employees')!);
    return (this.employees = obj || []);
  }
}
