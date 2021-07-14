import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosevehiclePage } from './choosevehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosevehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosevehiclePageRoutingModule {}
