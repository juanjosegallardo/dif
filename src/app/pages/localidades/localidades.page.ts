import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ILocalidad } from 'src/app/interfaces/ILocalidad';
import { FrmLocalidadPage } from 'src/app/modals/frm-localidad/frm-localidad.page';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.page.html',
  styleUrls: ['./localidades.page.scss'],
})
export class LocalidadesPage implements OnInit {

  public localidades: ILocalidad[];

  constructor(
    private localidadService: LocalidadService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.cargarLocalidades();
  }


  cargarLocalidades(){
    this.localidadService.obtener().subscribe({
      next:(data: ILocalidad[])=>{
        this.localidades = data;
      }
    });
  }

  abrirModalLocalidad(){
    this.modalController.create({
      component: FrmLocalidadPage
    }).then(modal=>modal.present());
  }

}
