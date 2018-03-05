import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
	selector: "ventas",
	templateUrl: "../View/venta.html",
	providers: []
})

export class VentasComponent implements OnInit {
	titulo = 'Ventas';
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