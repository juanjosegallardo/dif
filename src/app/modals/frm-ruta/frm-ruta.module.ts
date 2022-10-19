import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrmRutaPageRoutingModule } from './frm-ruta-routing.module';

import { FrmRutaPage } from './frm-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrmRutaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FrmRutaPage]
})
export class FrmRutaPageModule {}
