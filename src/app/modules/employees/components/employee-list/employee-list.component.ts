import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { IEmployee } from 'src/app/shared/models/employees';

@Component({
  selector: 'tp-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  @Output() onFormDelete = new EventEmitter();
  @Output() onFormSave = new EventEmitter();
  @Output() onFormCancel = new EventEmitter();
  @Output() onFormShow = new EventEmitter();
  @Input() employees: Array<IEmployee> = [];

  constructor() {}

  ngOnInit(): void {}

  deleteEmployee(employeeId: number) {
    this.onFormDelete.emit(employeeId.toString());
  }

  saveEmployee(event: IEmployee) {
    this.onFormSave.emit(event);
  }

  closeModal() {
    this.onFormCancel.emit();
  }

  showModal(template: TemplateRef<any>) {
    this.onFormShow.emit(template);
  }
}
