import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) 
  {
    _CargaScripts.Carga(["terminalText"]);
  }

  ngOnInit(): void {
  }

}
