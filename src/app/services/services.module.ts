import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './pages/card/card.component';
import { ServicesRoutingModule } from './services-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
  ]
})
export class ServicesModule { }
