import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrmPersonaPage } from './frm-persona.page';

const routes: Routes = [
  {
    path: '',
    component: FrmPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrmPersonaPageRoutingModule {}
