import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentdetailsadminPage } from './paymentdetailsadmin.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentdetailsadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentdetailsadminPageRoutingModule {}
