import { OnInit, Output, EventEmitter, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  template: '',
})
export abstract class ModalFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  @Output() onFormSave = new EventEmitter();
  @Output() onFormClose = new EventEmitter();
  ngOnInit() {
    this.initializeForm();
  }

  abstract initializeForm(): any;
  abstract transformData(): any;
}
