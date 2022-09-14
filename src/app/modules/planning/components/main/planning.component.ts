import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalSchedulerComponent } from '../modal-scheduler/modal-scheduler.component';
import { IShiftTemplate } from 'src/app/shared/models/shift-templates';
import {
  ICalendarEvent,
  ICalendarEventInput,
} from 'src/app/shared/models/calendar-event';
import { PlanningService } from 'src/app/shared/services/planning/planning.service';
import { Subject } from 'rxjs';
import { EmployeesService } from 'src/app/shared/services/employees/employees.service';
import { ShiftTemplatesService } from 'src/app/shared/services/shift-templates/shift-templates.service';
import { Router } from '@angular/router';
@Component({
  selector: 'tp-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningComponent implements OnInit {
  modalRef?: BsModalRef;
  employees: Array<string> = [];
  refresh = new Subject<void>();
  shiftTemplates: Array<IShiftTemplate> = [];
  @ViewChild(ModalSchedulerComponent) modalComponent?: ModalSchedulerComponent;

  constructor(
    public modalService: BsModalService,
    private planningService: PlanningService,
    private employeesService: EmployeesService,
    private shiftTemplatesService: ShiftTemplatesService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.employees = this.employeesService
      .getEmployees()
      .map((e) => `${e.lastName}, ${e.firstName} ${e.middleName}`);

    this.shiftTemplates = this.shiftTemplatesService.getShiftTemplates();
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

  saveSchedule(event: ICalendarEventInput) {
    this.planningService.save(event);

    this.closeModal();

    this.planningService.getSchedule();

    this.router
      .navigateByUrl('/employees', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['planning']);
      });
  }
}
