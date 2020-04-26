import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './core/shared/nopagefound/nopagefound.component';


const routes: Routes = [
  {path:'**', component:NopagefoundComponent},
];

export const AppRoutingModule= RouterModule.forRoot( routes, { useHash: false } ); 
