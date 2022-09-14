export interface ICalendarEvent {
  date?: string;
  startTime: Date;
  endTime: Date;
  employee: string;
}

export interface ICalendarEventInput {
  date?: string;
  startTime: number;
  endTime: number;
  employee: string;
}
