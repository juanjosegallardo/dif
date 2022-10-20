import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ILocalidad } from 'src/app/interfaces/ILocalidad';
import { EscuelaService } from 'src/app/services/escuela/escuela.service';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';

@Component({
  selector: 'app-frm-escuela',
  templateUrl: './frm-escuela.page.html',
  styleUrls: ['./frm-escuela.page.scss'],
})
export class FrmEscuelaPage implements OnInit {

  public frmEscuela: FormGroup;
  public localidades: ILocalidad[];

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private escuelaService: EscuelaService,
    private localidadService: LocalidadService
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
    this.cargarLocalidades();
  }

  iniciarFormulario(){
    this.frmEscuela = this.formBuilder.group({
      id_interno: new FormControl("", Validators.required),
      plantel: new FormControl("", Validators.required),
      localidad_id: new FormControl("", Validators.required),
      marginacion: new FormControl("", Validators.required),
      cct: new FormControl("", Validators.required),
      nivel: new FormControl("", Validators.required),
    });
  }

  guardarEscuela(){
    this.escuelaService.guardar(this.frmEscuela.value).subscribe({
      next:()=>{
        this.toastController.create({
          message: "Guardado",
          duration:2000
        }).then(toast=>toast.present());
      }
    })
  }

  cargarLocalidades(){
    this.localidadService.obtener().subscribe({
      next:(data: ILocalidad[])=>{
        this.localidades = data;
      }
    });
  }

}
