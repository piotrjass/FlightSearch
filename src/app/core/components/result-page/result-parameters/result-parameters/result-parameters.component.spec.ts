import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultParametersComponent } from './result-parameters.component';

describe('ResultParametersComponent', () => {
  let component: ResultParametersComponent;
  let fixture: ComponentFixture<ResultParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
