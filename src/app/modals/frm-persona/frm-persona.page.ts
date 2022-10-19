import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { SeimasService } from 'src/app/services/seimas/seimas.service';

@Component({
  selector: 'app-frm-persona',
  templateUrl: './frm-persona.page.html',
  styleUrls: ['./frm-persona.page.scss'],
})
export class FrmPersonaPage implements OnInit {

  public frmPersona: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private toastController: ToastController,
    private seimsService: SeimasService,
    ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  

  iniciarFormulario()
  {
      this.frmPersona = this.formBuilder.group({
        nombre: new FormControl("", Validators.required),
        ap_paterno: new FormControl("", Validators.required),
        ap_materno: new FormControl("", Validators.required),
        curp:  new FormControl("", [Validators.required, Validators.maxLength(18), Validators.minLength(18)]),
        sexo:  new FormControl("", Validators.required),
        fecha_nacimiento:  new FormControl("", Validators.required),
        vulnerabilidad:  new FormControl("", Validators.required),
        manzana:  new FormControl("", Validators.required),
        calle: new FormControl("", Validators.required),
        colonia: new FormControl("", Validators.required),
        numero_exterior: new FormControl("", Validators.required),
        localidad_id: new FormControl("1", Validators.required),
        cct: new FormControl("",[])

      });
  }

  buscarCurp()
  {

    this.seimsService.obtener(this.frmPersona.controls["curp"].value).subscribe({
      next: (data)=>{
        this.frmPersona.controls["nombre"].setValue(data.alumno.nombre);
        this.frmPersona.controls["ap_paterno"].setValue(data.alumno.primerApellido);
        this.frmPersona.controls["ap_materno"].setValue(data.alumno.segundoApellido);
        this.frmPersona.controls["cct"].setValue(data.alumno.claveCT);
        
      }

    })
  }


  guardar()
  {
    this.personaService.guardar(this.frmPersona.value).subscribe({
      next: ()=>{
        this.toastController.create({
          message: "Guardado",
          duration:1000
        }).then(toast=>toast.present());
      }
    })

  }
}
