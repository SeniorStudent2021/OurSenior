import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActiverequestPage } from './activerequest.page';

describe('ActiverequestPage', () => {
  let component: ActiverequestPage;
  let fixture: ComponentFixture<ActiverequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiverequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActiverequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
