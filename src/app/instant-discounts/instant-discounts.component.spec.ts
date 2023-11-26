import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantDiscountsComponent } from './instant-discounts.component';

describe('InstantDiscountsComponent', () => {
  let component: InstantDiscountsComponent;
  let fixture: ComponentFixture<InstantDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstantDiscountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstantDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
