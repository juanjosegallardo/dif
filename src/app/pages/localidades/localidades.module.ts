import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalidadesPageRoutingModule } from './localidades-routing.module';

import { LocalidadesPage } from './localidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalidadesPageRoutingModule
  ],
  declarations: [LocalidadesPage]
})
export class LocalidadesPageModule {}
