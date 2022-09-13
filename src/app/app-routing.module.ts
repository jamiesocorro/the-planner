import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './modules/planning/components/planning/planning.component';
import { EmployeesComponent } from './modules/employees/components/employees/employees.component';
import { ShiftTemplatesComponent } from './modules/shift-templates/components/shift-templates/shift-templates.component';

const routes: Routes = [
  { path: '', redirectTo: 'planning', pathMatch: 'full' },
  { path: 'planning', component: PlanningComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'shift-templates', component: ShiftTemplatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
