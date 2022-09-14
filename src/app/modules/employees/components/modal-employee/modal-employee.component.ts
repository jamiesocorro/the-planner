import { Component, OnInit, Input } from '@angular/core';
import { ModalFormComponent } from 'src/app/shared/components/modal/modal-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { IEmployee } from 'src/app/shared/models/employees';
import { EmployeesService } from 'src/app/shared/services/employees/employees.service';

@Component({
  selector: 'tp-modal-employee',
  templateUrl: './modal-employee.component.html',
  styleUrls: ['./modal-employee.component.scss'],
})
export class ModalEmployeeComponent
  extends ModalFormComponent
  implements OnInit {
  @Input() employee: IEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    middleName: '',
  };
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() employeeCount: number = 0;

  constructor(private employeesService: EmployeesService) {
    super();
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl<number | null>(0),
      firstName: new FormControl<string | null>(''),
      lastName: new FormControl<string | null>(''),
      middleName: new FormControl<string | null>(''),
    });

    if (this.employee.id > 0) {
      this.form.controls['id'].setValue(this.employee.id);
      this.form.controls['firstName'].setValue(this.employee.firstName);
      this.form.controls['lastName'].setValue(this.employee.lastName);
      this.form.controls['middleName'].setValue(this.employee.middleName);
    }
  }

  transformData() {
    return {
      id: this.employeeCount + 1,
      firstName: this.form.value['firstName'],
      lastName: this.form.value['lastName'],
      middleName: this.form.value['middleName'],
    };
  }

  close() {
    this.onFormClose.emit();
  }

  saveItem() {
    this.onFormSave.emit(this.transformData());
  }

  emitItem() {
    this.employeesService.emitEmployee(this.form.value);
  }
}
