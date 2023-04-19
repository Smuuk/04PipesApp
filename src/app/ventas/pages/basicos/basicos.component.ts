import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string= 'alexis';
  nombreUpper: string= 'ALEXIS';
  nombreCompleto: string= 'aleXiS meDranO';
  fecha: Date = new Date(); //dia de hoy

}
