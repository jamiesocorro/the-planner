import { Injectable } from '@angular/core';
import {
  ICalendarEvent,
  ICalendarEventInput,
} from '../../models/calendar-event';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  schedules: Array<ICalendarEvent> = [];
  constructor() {}

  save(data: ICalendarEventInput) {
    if (data) {
      const date = new Date(data.date!);
      const item: ICalendarEvent = {
        startTime:
          new Date(date.setHours(data.startTime, 0, 0, 0)) || new Date(),
        endTime: new Date(date.setHours(data.endTime, 0, 0, 0)) || new Date(),
        employee: data.employee || '',
      };

      this.schedules.push(item);

      localStorage.setItem('schedules', JSON.stringify(this.schedules));
    }
  }

  getSchedule() {
    let obj = JSON.parse(localStorage.getItem('schedules')!);
    return (this.schedules = obj || []);
  }
}
