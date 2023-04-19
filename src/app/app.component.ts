import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'pipesApp';
  nombre: string = 'alexis Suarez';
  valor: number = 1000;


  mostrarNombre(){
    console.log(this.title);
    console.log(this.nombre);
  }
}
