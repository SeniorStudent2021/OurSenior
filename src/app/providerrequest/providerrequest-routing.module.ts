import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderrequestPage } from './providerrequest.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderrequestPageRoutingModule {}
