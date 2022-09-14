import { Injectable } from '@angular/core';
import { IShiftTemplate } from '../../models/shift-templates';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShiftTemplatesService {
  private templateInformation = new BehaviorSubject<any>(null);
  currentInformation = this.templateInformation.asObservable();
  shiftTemplates: Array<IShiftTemplate> = [];
  constructor() {}

  emitShiftTemplate(shiftTemplate: IShiftTemplate) {
    this.templateInformation.next(shiftTemplate);
  }

  updateShiftTemplate(shiftTemplate: IShiftTemplate) {
    const shiftTemplates = this.getShiftTemplates();
    shiftTemplates[
      shiftTemplates.findIndex((e) => e.id === shiftTemplate.id)
    ] = shiftTemplate;

    localStorage.setItem('shiftTemplates', JSON.stringify(this.shiftTemplates));

    this.getShiftTemplates();
  }

  deleteShiftTemplates(id: number) {
    const shiftTemplates = this.getShiftTemplates();
    shiftTemplates.splice(
      shiftTemplates.findIndex((e) => e.id == id),
      1
    );
    localStorage.setItem('shiftTemplates', JSON.stringify(shiftTemplates));

    this.getShiftTemplates();
  }

  save(data: IShiftTemplate) {
    if (data) {
      const item: IShiftTemplate = {
        id: data.id,
        startTime: data.startTime,
        endTime: data.endTime,
        name: data.name,
      };
      this.shiftTemplates.push(item);
      localStorage.setItem(
        'shiftTemplates',
        JSON.stringify(this.shiftTemplates)
      );
    }
  }

  getShiftTemplates(): Array<IShiftTemplate> {
    let obj = JSON.parse(localStorage.getItem('shiftTemplates')!);
    return (this.shiftTemplates = obj || []);
  }
}
