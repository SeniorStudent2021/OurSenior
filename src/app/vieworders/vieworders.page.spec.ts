import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewordersPage } from './vieworders.page';

describe('ViewordersPage', () => {
  let component: ViewordersPage;
  let fixture: ComponentFixture<ViewordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewordersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
