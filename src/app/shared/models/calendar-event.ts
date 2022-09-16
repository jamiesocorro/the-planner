export interface ICalendarEvent {
  date?: string;
  startTime: Date;
  endTime: Date;
  employee: string;
  draggable?: boolean;
}

export interface ICalendarEventInput {
  date?: string;
  startTime: number;
  endTime: number;
  employee: string;
}
