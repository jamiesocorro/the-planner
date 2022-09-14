import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  IShiftTemplates,
  IShiftTemplate,
} from 'src/app/shared/models/shift-templates';
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
  item: FormGroup = new FormGroup({});
  constructor() {
    super();
  }

  initializeForm() {
    this.item = new FormGroup({
      date: new FormControl<Date | null>(new Date()),
      shift: new FormControl<any | null>(null),
      employee: new FormControl<string | null>(''),
    });
  }

  transformData(): ICalendarEvent {
    return {
      date: this.item.value['date'],
      startTime: this.item.value['shift']['startTime'],
      endTime: this.item.value['shift']['endTime'],
      employee: this.item.value['employee'],
    };
  }

  close() {
    this.onFormClose.emit();
  }

  saveItem() {
    this.onFormSave.emit(this.transformData());
  }
}
