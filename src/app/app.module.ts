import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NuevaVentaComponent} from "./components/nuevaVenta.component";
import {VentasComponent} from "./components/ventas.component";

@NgModule({
  declarations: [
    AppComponent,
    NuevaVentaComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
