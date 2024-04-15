import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDestFormComponent } from './set-dest-form.component';

describe('SetDestFormComponent', () => {
  let component: SetDestFormComponent;
  let fixture: ComponentFixture<SetDestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetDestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
