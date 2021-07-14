import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosevehiclePage } from './choosevehicle.page';

describe('ChoosevehiclePage', () => {
  let component: ChoosevehiclePage;
  let fixture: ComponentFixture<ChoosevehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosevehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosevehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
