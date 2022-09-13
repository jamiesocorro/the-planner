import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, SidebarModule],
})
export class EmployeesModule {}
