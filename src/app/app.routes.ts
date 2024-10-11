import { Routes } from '@angular/router';
import { PageTableComponent } from './pages/table/table-page.component';
import { PageHelpComponent } from './pages/help/help-page.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    component: PageTableComponent
  },
  {
    path: 'help',
    component: PageHelpComponent
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

//Todo (Documentacion de angular Standalone)
// https://v17.angular.io/guide/standalone-components#providing-services-to-a-subset-of-routes
