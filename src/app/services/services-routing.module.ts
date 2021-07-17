import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'main', 
        component: MainComponent
      },
      {
        path: 'card', 
        component: CardComponent
      },
      {
        path: '**', 
        redirectTo: 'main'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ServicesRoutingModule { }
