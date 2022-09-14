import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
} from '@angular/core';
import { IShiftTemplate } from 'src/app/shared/models/shift-templates';

@Component({
  selector: 'tp-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent implements OnInit {
  @Input() shiftTemplates: Array<IShiftTemplate> = [];
  @Output() onFormDelete = new EventEmitter();
  @Output() onFormSave = new EventEmitter();
  @Output() onFormCancel = new EventEmitter();
  @Output() onFormShow = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteShiftTemplate(employeeId: number) {
    this.onFormDelete.emit(employeeId.toString());
  }

  closeModal() {
    this.onFormCancel.emit();
  }

  showModal(template: TemplateRef<any>) {
    this.onFormShow.emit(template);
  }
}
