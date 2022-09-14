import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IShiftTemplate } from 'src/app/shared/models/shift-templates';
import { ModalFormComponent } from 'src/app/shared/components/modal/modal-form.component';
import { ICalendarEvent } from 'src/app/shared/models/calendar-event';

@Component({
  selector: 'tp-modal-scheduler',
  templateUrl: './modal-scheduler.component.html',
  styleUrls: ['./modal-scheduler.component.scss'],
})
export class ModalSchedulerComponent
  extends ModalFormComponent
  implements OnInit {
  @Input() shiftTemplates: Array<IShiftTemplate> = [];
  @Input() employees: Array<string> = [];
  @Input() title = '';
  constructor() {
    super();
  }

  initializeForm() {
    this.form = new FormGroup({
      date: new FormControl<Date | null>(null),
      shift: new FormControl<any | null>(''),
      employee: new FormControl<string | null>(''),
    });
  }

  transformData(): ICalendarEvent {
    return {
      date: this.form.value['date'],
      startTime: this.form.value['shift']['startTime'],
      endTime: this.form.value['shift']['endTime'],
      employee: this.form.value['employee'],
    };
  }

  close() {
    this.onFormClose.emit();
  }

  saveItem() {
    this.onFormSave.emit(this.transformData());
  }
}
