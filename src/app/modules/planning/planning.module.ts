import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './components/planning/planning.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';

@NgModule({
  declarations: [PlanningComponent],
  imports: [CommonModule, SidebarModule],
})
export class PlanningModule {}
