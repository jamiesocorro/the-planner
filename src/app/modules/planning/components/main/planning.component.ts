import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
// import { GenericModalComponent } from 'src/app/shared/components/modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IModal } from 'src/app/shared/models/modal';
import { ModalSchedulerComponent } from '../modal-scheduler/modal-scheduler.component';
import { IShiftTemplates } from 'src/app/shared/models/shift-templates';
import { ICalendarEvent } from 'src/app/shared/models/calendar-event';
import { PlanningService } from 'src/app/shared/services/planning/planning.service';
import { Subject } from 'rxjs';
import { EmployeesService } from 'src/app/shared/services/employees/employees.service';
import { IEmployee } from 'src/app/shared/models/employees';
@Component({
  selector: 'tp-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningComponent implements OnInit {
  modalRef?: BsModalRef;
  // schedules: Array<ICalendarEvent> = [];
  employees: Array<string> = [];
  refresh = new Subject<void>();
  shifts: IShiftTemplates = {
    shiftTemplates: [
      {
        id: 1,
        name: 'Morning',
        startTime: new Date().setHours(8, 0, 0, 0),
        endTime: new Date().setHours(16, 0, 0, 0),
      },
      {
        id: 2,
        name: 'Mid shift',
        startTime: new Date().setHours(16, 0, 0, 0),
        endTime: new Date().setHours(23, 59, 0, 0),
      },
    ],
  };
  @ViewChild(ModalSchedulerComponent) modalComponent?: ModalSchedulerComponent;

  constructor(
    public modalService: BsModalService,
    private planningService: PlanningService,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    // this.schedules = this.planningService.getSchedule();
    this.employees = this.employeesService
      .getEmployees()
      .map((e) => `${e.lastName}, ${e.firstName} ${e.middleName}`);
    this.refresh.next();
  }

  get schedules(): Array<ICalendarEvent> {
    return this.planningService.getSchedule();
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

  closeModal() {
    this.modalRef?.hide();
  }

  saveSchedule(event: ICalendarEvent) {
    this.planningService.save(event);

    this.closeModal();

    this.planningService.getSchedule();

    this.refresh.next();
  }
}
