import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentdetailsadminPageRoutingModule } from './paymentdetailsadmin-routing.module';

import { PaymentdetailsadminPage } from './paymentdetailsadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentdetailsadminPageRoutingModule
  ],
  declarations: [PaymentdetailsadminPage]
})
export class PaymentdetailsadminPageModule {}
