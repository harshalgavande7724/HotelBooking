import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsWeLoveComponent } from './destinations-we-love.component';

describe('DestinationsWeLoveComponent', () => {
  let component: DestinationsWeLoveComponent;
  let fixture: ComponentFixture<DestinationsWeLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinationsWeLoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationsWeLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
