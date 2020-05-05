import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersNavbarComponent } from './offers-navbar.component';

describe('OffersNavbarComponent', () => {
  let component: OffersNavbarComponent;
  let fixture: ComponentFixture<OffersNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
