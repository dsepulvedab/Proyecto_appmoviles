import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  lista: Array<any> =[
    {
      titulo: "Perro",
      color: "#444",
    },
    {
      titulo: "Gato",
      color: "#999",
    },
    {
      titulo: "Pajaro",
      color: "#999",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
