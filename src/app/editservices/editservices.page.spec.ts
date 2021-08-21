import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditservicesPage } from './editservices.page';

describe('EditservicesPage', () => {
  let component: EditservicesPage;
  let fixture: ComponentFixture<EditservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditservicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
