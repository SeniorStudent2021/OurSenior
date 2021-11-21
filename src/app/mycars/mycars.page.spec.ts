import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycarsPage } from './mycars.page';

describe('MycarsPage', () => {
  let component: MycarsPage;
  let fixture: ComponentFixture<MycarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
