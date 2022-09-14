import { Component, OnInit, Input } from '@angular/core';
import { IShiftTemplate } from 'src/app/shared/models/shift-templates';
import { ModalFormComponent } from 'src/app/shared/components/modal/modal-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ShiftTemplatesService } from 'src/app/shared/services/shift-templates/shift-templates.service';

@Component({
  selector: 'tp-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class ModalTemplateComponent
  extends ModalFormComponent
  implements OnInit {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() shiftTemplatesCount: number = 0;
  @Input() shiftTemplate: IShiftTemplate = {
    id: 0,
    startTime: 0,
    endTime: 0,
    name: '',
  };
  constructor(private shiftTemplatesService: ShiftTemplatesService) {
    super();
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl<number | null>(0),
      name: new FormControl<string | null>(''),
      startTime: new FormControl<string | null>(''),
      endTime: new FormControl<string | null>(''),
    });

    if (this.shiftTemplate.id > 0) {
      this.form.controls['id'].setValue(this.shiftTemplate.id);
      this.form.controls['name'].setValue(this.shiftTemplate.name);
      this.form.controls['startTime'].setValue(this.shiftTemplate.startTime);
      this.form.controls['endTime'].setValue(this.shiftTemplate.endTime);
    }
  }

  transformData() {
    return {
      id: this.shiftTemplatesCount + 1,
      name: this.form.value['name'],
      startTime: this.form.value['startTime'],
      endTime: this.form.value['endTime'],
    };
  }

  close() {
    this.onFormClose.emit();
  }

  saveItem() {
    this.onFormSave.emit(this.transformData());
  }

  emitItem() {
    this.shiftTemplatesService.emitShiftTemplate(this.form.value);
  }
}
