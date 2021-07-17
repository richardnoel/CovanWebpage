import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { FormalitiesComponent } from './pages/formalities/formalities.component';
import { LibraryComponent } from './pages/library/library.component';
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
        path: 'calculator', 
        component: CalculatorComponent
      },
      {
        path: 'library', 
        component: LibraryComponent
      },
      {
        path: 'formalities', 
        component: FormalitiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
  // ,exports: [RouterModule]
})
export class ToolsRoutingModule { }
