import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'service',
    loadChildren: () => import('./services/services.module').then(module => module.ServicesModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(module => module.AboutModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tools.module').then(module => module.ToolsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
