import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre: string = 'Carlos';
  genero: 'male'|'female' = 'male';
  invitacionMapeo = {
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.nombre = 'Anamari';
    this.genero = 'female';
  }

  //18nPlural
  clients: string[] = ['Maria', 'Ignacio', 'Vicente', 'Mo', 'Beatriz', 'Anamari'];
  clientsMap = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
    console.log(this.clients);
  }

  public person = {
    name: 'Avilix',
    age: 53,
    address: 'avaroLpu, cocla',
    hobbies: 'fotografia aves'
  }

  public myObservableTimer  = interval(2000)
  // .pipe(tap( value => console.log('tap;', value)))
  ;
}
