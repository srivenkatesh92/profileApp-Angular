import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CertificationComponent } from './certification/certification.component';

export const routes: Routes = [ 
  {path:"/", component:CertificationComponent}  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
export const 
RoutingComponent = [CertificationComponent];