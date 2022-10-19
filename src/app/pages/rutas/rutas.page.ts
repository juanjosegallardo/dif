import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IRuta } from 'src/app/interfaces/IRuta';
import { FrmRutaPage } from 'src/app/modals/frm-ruta/frm-ruta.page';
import { RutaService } from 'src/app/services/ruta/ruta.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  public rutas: IRuta[]; 
  constructor(
    private rutaService: RutaService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.cargarRutas();
  }

  cargarRutas(){
    this.rutaService.obtener().subscribe({
      next:(data: IRuta[])=>{
        this.rutas = data;
      }
    });
  }

  abrirModalRuta(){
    this.modalController.create({
      component: FrmRutaPage
    }).then(modal=>modal.present());
  }


}
