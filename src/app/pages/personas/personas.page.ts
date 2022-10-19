import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPersona } from 'src/app/interfaces/IPersona';
import { FrmPersonaPage } from 'src/app/modals/frm-persona/frm-persona.page';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {

  public personas:IPersona[];   

  constructor(
    private personaService: PersonaService,
    private modalController: ModalController,
  
    ) { }

  cargarPersonas()
  {
    this.personaService.obtener().subscribe({
      next: (data: IPersona[])=>{
        this.personas = data;
      }
    })
  } 

  ngOnInit() {

  }

  ionViewWillEnter()
  {
    this.cargarPersonas();
    
  }

  abrirModalPersona()
  {
    this.modalController.create({
      component: FrmPersonaPage
    }).then(modal=>modal.present());
    
  }

}
