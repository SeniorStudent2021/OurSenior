import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiverequestPage } from './activerequest.page';

const routes: Routes = [
  {
    path: '',
    component: ActiverequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiverequestPageRoutingModule {}
