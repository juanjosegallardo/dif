import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RutaService } from 'src/app/services/ruta/ruta.service';

@Component({
  selector: 'app-frm-ruta',
  templateUrl: './frm-ruta.page.html',
  styleUrls: ['./frm-ruta.page.scss'],
})
export class FrmRutaPage implements OnInit {

  public frmRuta: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rutaService: RutaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.iniciarFormulario();

  }


  iniciarFormulario(){
    this.frmRuta = this.formBuilder.group({
      nombre: new FormControl("", Validators.required),
      tipo: new FormControl("", Validators.required)
    });
  }

  guardar(){
    this.rutaService.guardar(this.frmRuta.value).subscribe({
      next: ()=>{
        this.toastController.create({
          message: "Guardada",
          duration:2000
        }).then(toast=>toast.present());
      }
    });
  }

}
