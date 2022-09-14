import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { ICalendarEvent } from 'src/app/shared/models/calendar-event';
import { Subject } from 'rxjs';
@Component({
  selector: 'tp-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulerComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  @Input() sched: Array<ICalendarEvent> = [];
  refresh = new Subject<void>();
  schedules: CalendarEvent[] = [];
  constructor() {}

  ngOnInit(): void {
    this.formatSchedule();
  }

  formatSchedule() {
    if (this.sched)
      this.sched.map((sch: ICalendarEvent) => {
        const item = {
          start: new Date(sch.startTime),
          end: new Date(sch.endTime),
          title: sch.employee,
        };

        this.schedules.push(item);
      });

    this.refresh.next();
  }
}
