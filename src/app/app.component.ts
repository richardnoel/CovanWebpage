import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CovanWebpage';
  public generalData: any = {};
  private exceptLinks: Array<String> = [
    "service",
    "about",
    "tool"
  ];
  router: string;
  currentRoute: string = '';
  constructor(private _router: Router) {
    this.router = _router.url;
  }
  hasRoute() {
    console.log("*********hasRoute************");
    let result = true;
    this.exceptLinks.forEach((item:any) =>{
      if(result && window.location.href.includes(item)){
        result = false;
      }
    });
    return result;
  }
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
                ref: 'tools/calculator'
                // ref: 'about/card',
              },
              {
                group: false,
                title: 'Biblioteca',
                ref: 'tools/library'
              },
              {
                group: false,
                title: 'Tramite.com',
                ref: 'tools/formalities'
              }
            ]
          },
          {
            group: false,
            title: 'Servicios',
            ref: 'service/main',
          },
          {
            group: false,
            title: 'Acerca de Nosotros',
            ref: 'about/main',
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
    // console.log("app AppComponent -> ngOnInit");
    // console.log(this.generalData);
  }
}