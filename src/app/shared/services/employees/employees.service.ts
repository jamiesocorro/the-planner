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

  deleteEmployee(employeeId: number) {
    if (employeeId >= 0) {
      const employees = this.getEmployees();
      employees.splice(
        employees.findIndex((e) => e.id == employeeId),
        1
      );
      localStorage.setItem('employees', JSON.stringify(employees));

      this.getEmployees();
    }
  }

  emitEmployee(employee: IEmployee) {
    this.employeeInformation.next(employee);
  }

  getEmployees(): Array<IEmployee> {
    let obj = JSON.parse(localStorage.getItem('employees')!);
    return (this.employees = obj || []);
  }

  saveEmployee(employee: IEmployee) {
    if (employee) {
      const item: IEmployee = {
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        middleName: employee.middleName,
      };
      this.employees.push(item);
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }

  updateEmployee(employee: IEmployee) {
    if (employee) {
      const employees = this.getEmployees();
      employees[employees.findIndex((e) => e.id === employee.id)] = employee;

      localStorage.setItem('employees', JSON.stringify(this.employees));

      this.getEmployees();
    }
  }
}
