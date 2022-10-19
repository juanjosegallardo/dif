import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrmPersonaPageRoutingModule } from './frm-persona-routing.module';

import { FrmPersonaPage } from './frm-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrmPersonaPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FrmPersonaPage]
})
export class FrmPersonaPageModule {}
