export interface IShiftTemplates {
  shiftTemplates: Array<IShiftTemplate>;
}

export interface IShiftTemplate {
  id: number;
  startTime: number;
  endTime: number;
  name: string;
}
