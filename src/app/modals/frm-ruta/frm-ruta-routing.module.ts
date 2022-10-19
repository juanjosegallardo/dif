import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrmRutaPage } from './frm-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: FrmRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrmRutaPageRoutingModule {}
