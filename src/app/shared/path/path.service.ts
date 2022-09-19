import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  appRoot = '/app';

  planning = `${this.appRoot}/planning`;
  employees = `${this.appRoot}/employees`;
  shiftTemplates = `${this.appRoot}/shift-templates`;
}
