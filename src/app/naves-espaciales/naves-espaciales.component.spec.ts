import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesEspacialesComponent } from './naves-espaciales.component';

describe('NavesEspacialesComponent', () => {
  let component: NavesEspacialesComponent;
  let fixture: ComponentFixture<NavesEspacialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesEspacialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesEspacialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
