import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/main/employees.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ModalEmployeeComponent } from './components/modal-employee/modal-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees.routes.module';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    ModalEmployeeComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    EmployeesRoutingModule,
  ],
})
export class EmployeesModule {}
