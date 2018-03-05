import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
	selector: "nuevaVenta",
	templateUrl: "../View/nuevaVenta.html",
	providers: []
})

export class NuevaVentaComponent implements OnInit {
	titulo = 'Nueva Venta ';
	folio = "ASD23";
	public errorMessage: string;
	public status: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		
	}

}