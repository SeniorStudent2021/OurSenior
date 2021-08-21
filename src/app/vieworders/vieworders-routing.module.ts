import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewordersPage } from './vieworders.page';

const routes: Routes = [
  {
    path: '',
    component: ViewordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewordersPageRoutingModule {}
