import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrmLocalidadPage } from './frm-localidad.page';

const routes: Routes = [
  {
    path: '',
    component: FrmLocalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrmLocalidadPageRoutingModule {}
