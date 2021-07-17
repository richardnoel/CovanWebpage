import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { MainComponent } from './pages/main/main.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { LibraryComponent } from './pages/library/library.component';
import { FormalitiesComponent } from './pages/formalities/formalities.component';


@NgModule({
  declarations: [
    MainComponent,
    CalculatorComponent,
    LibraryComponent,
    FormalitiesComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
