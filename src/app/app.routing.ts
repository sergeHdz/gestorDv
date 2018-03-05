import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NuevaVentaComponent} from "./components/nuevaVenta.component";
import {VentasComponent} from "./components/ventas.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{path: "nueva-venta", component: NuevaVentaComponent},
	{path: "ventas", component: VentasComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);