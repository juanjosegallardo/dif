import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IEscuela } from 'src/app/interfaces/IEscuela';
import { FrmEscuelaPage } from 'src/app/modals/frm-escuela/frm-escuela.page';
import { EscuelaService } from 'src/app/services/escuela/escuela.service';

@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.page.html',
  styleUrls: ['./escuelas.page.scss'],
})
export class EscuelasPage implements OnInit {

  public escuelas: IEscuela[];

  constructor(
    private escuelaService: EscuelaService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.cargarEscuelas();
  }

  cargarEscuelas(){
    this.escuelaService.obtener().subscribe({
      next:(data: IEscuela[])=>{
        this.escuelas = data;
      }
    });
  }

  abrirModalEscuela(){
    this.modalController.create({
      component: FrmEscuelaPage
    }).then((modal)=>{
      modal.onDidDismiss().then(()=>{
        this.cargarEscuelas();
      });
      modal.present();
    });
  }

}
