import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrmLocalidadPageRoutingModule } from './frm-localidad-routing.module';

import { FrmLocalidadPage } from './frm-localidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrmLocalidadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FrmLocalidadPage]
})
export class FrmLocalidadPageModule {}
