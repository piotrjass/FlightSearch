import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPassengersComponent } from './set-passengers.component';

describe('SetPassengersComponent', () => {
  let component: SetPassengersComponent;
  let fixture: ComponentFixture<SetPassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPassengersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
