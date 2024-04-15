import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingAirplaneComponent } from './flying-airplane.component';

describe('FlyingAirplaneComponent', () => {
  let component: FlyingAirplaneComponent;
  let fixture: ComponentFixture<FlyingAirplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyingAirplaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyingAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
