import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortSearchFromComponent } from './short-search-from.component';

describe('ShortSearchFromComponent', () => {
  let component: ShortSearchFromComponent;
  let fixture: ComponentFixture<ShortSearchFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortSearchFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortSearchFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
