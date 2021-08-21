import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditusersPage } from './editusers.page';

describe('EditusersPage', () => {
  let component: EditusersPage;
  let fixture: ComponentFixture<EditusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditusersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
