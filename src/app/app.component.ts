import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CovanWebpage';
  public generalData: any = {}

  ngOnInit(): void {
    this.generalData = {
      topBarData: {
        email: 'richard@gmail.com',
        phono: '+591 77707428'
      },
      headerData: {
        start: {
          group: false,
          title: 'Inicia Sesion',
          ref: '#session'
        },
        menu: [
          {
            group: true,
            title: 'Herramientas',
            items: [
              {
                group: false,
                title: 'Calculadora',
                ref: '#Calculadora'
              },
              {
                group: false,
                title: 'Biblioteca',
                ref: '#Biblioteca'
              },
              {
                group: false,
                title: 'Tramite.com',
                ref: '#Tramite.com'
              }
            ]
          },
          {
            group: false,
            title: 'Servicios',
            ref: '#services'
          },
          {
            group: false,
            title: 'Acerca de Nosotros',
            ref: '#about'
          }
        ]
      }
    }
  }
}