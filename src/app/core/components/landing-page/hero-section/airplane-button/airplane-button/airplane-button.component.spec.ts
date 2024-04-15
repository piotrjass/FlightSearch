import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneButtonComponent } from './airplane-button.component';

describe('AirplaneButtonComponent', () => {
  let component: AirplaneButtonComponent;
  let fixture: ComponentFixture<AirplaneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirplaneButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirplaneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
