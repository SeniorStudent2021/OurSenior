import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditusersPage } from './editusers.page';

const routes: Routes = [
  {
    path: '',
    component: EditusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditusersPageRoutingModule {}
