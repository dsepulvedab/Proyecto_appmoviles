import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  lista: Array<any> = [
    {
      titulo: "Inicio",
      color: "#444",
      icon:"home"
    },
    {
      titulo: "Explorar",
      color: "#999",
      icon:"search"
    },
    {
      titulo: "Cuenta",
      color: "#999",
      icon:"person"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
