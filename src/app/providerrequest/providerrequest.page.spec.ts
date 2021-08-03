import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProviderrequestPage } from './providerrequest.page';

describe('ProviderrequestPage', () => {
  let component: ProviderrequestPage;
  let fixture: ComponentFixture<ProviderrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
