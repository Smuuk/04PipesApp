import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  
  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })
}
