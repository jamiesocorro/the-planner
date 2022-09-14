import { Injectable } from '@angular/core';
import { ICalendarEvent } from '../../models/calendar-event';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  schedules: Array<ICalendarEvent> = [];
  constructor() {}

  save(data: ICalendarEvent) {
    if (data) {
      const date = new Date(data.date!);
      const getStartTime = new Date(data.startTime).getHours();
      const getEndTime = new Date(data.endTime).getHours();

      const item: ICalendarEvent = {
        startTime: new Date(date.setHours(getStartTime)) || new Date(),
        endTime: new Date(date.setHours(getEndTime)) || new Date(),
        employee: data.employee || '',
      };

      this.schedules.push(item);

      localStorage.setItem('schedules', JSON.stringify(this.schedules));

      // return Observable.of(this.schedules);

      // return this.schedules;
    }
  }

  getSchedule() {
    let obj = JSON.parse(localStorage.getItem('schedules')!);
    return (this.schedules = obj || []);
  }
}
