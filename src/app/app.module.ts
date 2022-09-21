import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { PlanningModule } from './modules/planning/planning.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { ShiftTemplatesModule } from './modules/shift-templates/shift-templates.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TopbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlanningModule,
    EmployeesModule,
    ShiftTemplatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
