import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editusers2Page } from './editusers2.page';

const routes: Routes = [
  {
    path: '',
    component: Editusers2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editusers2PageRoutingModule {}
