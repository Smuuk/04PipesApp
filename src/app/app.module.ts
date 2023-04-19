import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar locale de la app
import localeES from '@angular/common/locales/es-MX';
import localeNR from '@angular/common/locales/no';
import {registerLocaleData } from '@angular/common';
registerLocaleData(localeES);
registerLocaleData(localeNR);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
