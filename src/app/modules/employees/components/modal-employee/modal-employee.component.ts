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
  item: FormGroup = new FormGroup({});
  constructor(private employeesService: EmployeesService) {
    super();
  }

  initializeForm() {
    this.item = new FormGroup({
      id: new FormControl<number | null>(0),
      firstName: new FormControl<string | null>(''),
      lastName: new FormControl<string | null>(''),
      middleName: new FormControl<string | null>(''),
    });

    if (this.employee.id > 0) {
      this.item.controls['id'].setValue(this.employee.id);
      this.item.controls['firstName'].setValue(this.employee.firstName);
      this.item.controls['lastName'].setValue(this.employee.lastName);
      this.item.controls['middleName'].setValue(this.employee.middleName);
    }
  }

  transformData() {
    return {
      id: this.employeeCount + 1,
      firstName: this.item.value['firstName'],
      lastName: this.item.value['lastName'],
      middleName: this.item.value['middleName'],
    };
  }

  close() {
    this.onFormClose.emit();
  }

  saveItem() {
    this.onFormSave.emit(this.transformData());
  }

  emitItem() {
    this.employeesService.emitEmployee(this.item.value);
  }
}
