import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'app',
    redirectTo: '/app/planning',
    pathMatch: 'full',
  },
  {
    path: 'app',
    children: [
      {
        path: '',
        redirectTo: 'planning',
        pathMatch: 'full',
      },
      {
        path: 'planning',
        loadChildren: () =>
          import('./modules/planning/planning.module').then(
            (planning: any) => planning.PlanningModule
          ),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./modules/employees/employees.module').then(
            (employee) => employee.EmployeesModule
          ),
      },
      {
        path: 'shift-templates',
        loadChildren: () =>
          import('./modules/shift-templates/shift-templates.module').then(
            (shift) => shift.ShiftTemplatesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
