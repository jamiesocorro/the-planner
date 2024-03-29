import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftTemplatesComponent } from './components/main/shift-templates.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShiftTemplatesComponent,
    TemplateListComponent,
    ModalTemplateComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
})
export class ShiftTemplatesModule {}
