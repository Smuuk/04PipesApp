import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
           {
            label: 'Angular pipes',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y fechas',
                    icon: 'pi pi-alineleft',
                    routerLink: '/'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                    routerLink: 'numeros'
                },
                {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'no-comunes'
                }                
            ]
           },
           {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog'
           }
        ];
    }

}
