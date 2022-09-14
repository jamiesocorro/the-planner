import { Component, OnInit, TemplateRef } from '@angular/core';
import { IShiftTemplate } from 'src/app/shared/models/shift-templates';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ShiftTemplatesService } from 'src/app/shared/services/shift-templates/shift-templates.service';

@Component({
  selector: 'tp-shift-templates',
  templateUrl: './shift-templates.component.html',
  styleUrls: ['./shift-templates.component.scss'],
})
export class ShiftTemplatesComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(
    public modalService: BsModalService,
    private shiftTemplatesService: ShiftTemplatesService
  ) {}

  ngOnInit(): void {
    this.shiftTemplatesService.currentInformation.subscribe(
      (shiftTemplate: IShiftTemplate) => {
        this.update(shiftTemplate);
      }
    );
  }

  get shiftTemplates(): Array<IShiftTemplate> {
    return this.shiftTemplatesService.getShiftTemplates();
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

  update(shiftTemplate: IShiftTemplate) {
    this.shiftTemplatesService.updateShiftTemplate(shiftTemplate);
    this.closeModal();
  }

  delete(templateId: number) {
    this.shiftTemplatesService.deleteShiftTemplates(templateId);
  }

  saveShiftTemplate(event: IShiftTemplate) {
    this.shiftTemplatesService.save(event);

    this.closeModal();
  }
}
