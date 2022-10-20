import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrmEscuelaPage } from './frm-escuela.page';

const routes: Routes = [
  {
    path: '',
    component: FrmEscuelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrmEscuelaPageRoutingModule {}
