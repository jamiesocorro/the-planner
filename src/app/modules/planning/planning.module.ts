import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './components/main/planning.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalSchedulerComponent } from './components/modal-scheduler/modal-scheduler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PlanningRoutingModule } from './planning.routes.module';
@NgModule({
  declarations: [
    PlanningComponent,
    SchedulerComponent,
    ModalSchedulerComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    PlanningRoutingModule,
  ],
  providers: [BsModalService],
})
export class PlanningModule {}
