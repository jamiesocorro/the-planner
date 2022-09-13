import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftTemplatesComponent } from './components/shift-templates/shift-templates.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';

@NgModule({
  declarations: [ShiftTemplatesComponent],
  imports: [CommonModule, SidebarModule],
})
export class ShiftTemplatesModule {}
