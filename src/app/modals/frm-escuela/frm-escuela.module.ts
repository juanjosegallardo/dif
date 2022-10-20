import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrmEscuelaPageRoutingModule } from './frm-escuela-routing.module';

import { FrmEscuelaPage } from './frm-escuela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrmEscuelaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FrmEscuelaPage]
})
export class FrmEscuelaPageModule {}
