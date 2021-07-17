import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
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
          ref: '#session',
          class: 'button-primary'
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
          },
          {
            group: false,
            title: 'Nuevo Menu',
            ref: '#about'
          },
          {
            group: false,
            title: 'Nuevo Menu 2',
            ref: '#about'
          }
        ]
      },
      heroData: {
        items: [
          {
            state: 'active',
            image: 'assets/img/slide/slide-1.jpg',
            title: 'Welcome to Green 1',
            description: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
            linkText: 'Read More',
            link: '#about'
          },
          {
            state: '',
            image: 'assets/img/slide/slide-2.jpg',
            title: 'Welcome to Green 2',
            description: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
            linkText: 'Read More',
            link: '#about'
          },
          {
            state: '',
            image: 'assets/img/slide/slide-3.jpg',
            title: 'Welcome to Green 3',
            description: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
            linkText: 'Read More',
            link: '#about'
          }
        ]
      }
    }
  }

}
