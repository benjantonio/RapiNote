import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private firebase: AngularFirestore) { }

  enviarMensaje(mensaje: Mensaje): Promise<any> {
    return this.firebase.collection('mensajes').add(mensaje);
  }
}
