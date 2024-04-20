import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardContainerComponent } from './result-card-container.component';

describe('ResultCardContainerComponent', () => {
  let component: ResultCardContainerComponent;
  let fixture: ComponentFixture<ResultCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
