import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftTemplatesComponent } from './components/main/shift-templates.component';

const routes: Routes = [{ path: '', component: ShiftTemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftTemplatesRoutingModule {}
