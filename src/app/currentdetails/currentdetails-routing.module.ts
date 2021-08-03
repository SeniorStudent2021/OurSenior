import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentdetailsPage } from './currentdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentdetailsPageRoutingModule {}
