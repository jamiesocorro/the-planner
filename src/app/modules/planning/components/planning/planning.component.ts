import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getWeek() {
    const currentDate = new Date(); // get current date
    const firstDay = currentDate.getDate() - currentDate.getDay(); // First day is the day of the month - the day of the week
    const lastDay = firstDay + 6; // last day is the first day + 6

    return {
      firstDay: new Date(currentDate.setDate(firstDay + 1)).toUTCString(),
      lastday: new Date(currentDate.setDate(lastDay + 1)).toUTCString(),
    };
  }
}
