import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackproviderPage } from './trackprovider.page';

describe('TrackproviderPage', () => {
  let component: TrackproviderPage;
  let fixture: ComponentFixture<TrackproviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackproviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackproviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
