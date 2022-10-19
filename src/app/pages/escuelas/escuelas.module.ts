import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuelasPageRoutingModule } from './escuelas-routing.module';

import { EscuelasPage } from './escuelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelasPageRoutingModule
  ],
  declarations: [EscuelasPage]
})
export class EscuelasPageModule {}
