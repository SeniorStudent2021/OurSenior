import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackproviderPage } from './trackprovider.page';

const routes: Routes = [
  {
    path: '',
    component: TrackproviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackproviderPageRoutingModule {}
