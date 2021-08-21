import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewservicePage } from './newservice.page';

describe('NewservicePage', () => {
  let component: NewservicePage;
  let fixture: ComponentFixture<NewservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
