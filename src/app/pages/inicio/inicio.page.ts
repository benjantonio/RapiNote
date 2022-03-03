import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  form: FormGroup

  constructor(private fb: FormBuilder, private _mensajeService: MensajeService) {
    this.form = this.fb.group({
      mensaje: ['', Validators.required],
    })
  }

  enviarMensaje(){
    
    const MENSAJE: Mensaje = {
      mensaje: this.form.value.mensaje,
    }
    console.log(MENSAJE)
    this._mensajeService.enviarMensaje(MENSAJE).then(() => {
      console.log("mensaje enviado :) ")
    }, error => {
      console.log(error,"NOOOOOO");
    })
  }


}
