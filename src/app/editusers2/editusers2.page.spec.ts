import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editusers2Page } from './editusers2.page';

describe('Editusers2Page', () => {
  let component: Editusers2Page;
  let fixture: ComponentFixture<Editusers2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editusers2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editusers2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
