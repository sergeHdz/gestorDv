import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido';
  public seleccionado = false;
  public optionSelected:string;
  public imageChanged:string;

  ventas = "ventas";
  nuevaVenta = "nuevaVenta";

  constructor(){
  	this.optionSelected="";
  	this.imageChanged="";
  }

  cambiar(){
		console.log("entro cambiar");
		this.seleccionado = true;
	}

	volver(){
		console.log("entro cambiar");
		this.seleccionado = false;
	}

	opcionSeleccionada(value){
		this.optionSelected=value;
	}

	changedImage(value){
		this.imageChanged=value;
	}
}
