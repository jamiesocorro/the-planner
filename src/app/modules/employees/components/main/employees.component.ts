import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IEmployee } from 'src/app/shared/models/employees';
import { EmployeesService } from 'src/app/shared/services/employees/employees.service';

@Component({
  selector: 'tp-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    public modalService: BsModalService,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.employeesService.currentInformation.subscribe(
      (employee: IEmployee) => {
        this.updateEmployee(employee);
      }
    );
  }

  get employees(): Array<IEmployee> {
    return this.employeesService.getEmployees();
  }

  closeModal() {
    this.modalRef?.hide();
  }

  openModal(
    template: TemplateRef<any>,
    className = 'w-393px modal-dialog-centered'
  ) {
    if (this.modalRef) this.modalRef.hide();
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: className })
    );
  }

  saveEmployee(event: IEmployee) {
    this.employeesService.save(event);

    this.closeModal();
  }

  updateEmployee(employee: IEmployee) {
    this.employeesService.updateEmployee(employee);
    this.closeModal();
  }

  delete(employeeId: number) {
    this.employeesService.deleteEmployee(employeeId);
  }
}
