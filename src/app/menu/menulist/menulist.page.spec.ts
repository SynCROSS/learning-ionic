import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenulistPage } from './menulist.page';

describe('MenulistPage', () => {
  let component: MenulistPage;
  let fixture: ComponentFixture<MenulistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenulistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
