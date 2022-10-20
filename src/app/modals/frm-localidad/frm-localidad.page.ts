import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';

@Component({
  selector: 'app-frm-localidad',
  templateUrl: './frm-localidad.page.html',
  styleUrls: ['./frm-localidad.page.scss'],
})
export class FrmLocalidadPage implements OnInit {

  public frmLocalidad: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private localidadService: LocalidadService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.frmLocalidad = this.formBuilder.group({
      id_interno: new FormControl("", Validators.required),
      clave: new FormControl("", Validators.required),
      nombre: new FormControl("", Validators.required),
    });
  }

  guardar(){
    this.localidadService.guardar(this.frmLocalidad.value).subscribe({
      next:()=>{
        this.toastController.create({
          message: "Guardado",
          duration: 2000
        }).then(toast=>toast.present());
      }
    });
  }

}
