import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileSizePipe } from '../file-size.pipe';

import { IonicModule } from '@ionic/angular';

import { NewservicePageRoutingModule } from './newservice-routing.module';

import { NewservicePage } from './newservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewservicePageRoutingModule
  ],
  declarations: [NewservicePage,FileSizePipe]
})
export class NewservicePageModule {}
