import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentdetailsadminPage } from './paymentdetailsadmin.page';

describe('PaymentdetailsadminPage', () => {
  let component: PaymentdetailsadminPage;
  let fixture: ComponentFixture<PaymentdetailsadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentdetailsadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentdetailsadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
