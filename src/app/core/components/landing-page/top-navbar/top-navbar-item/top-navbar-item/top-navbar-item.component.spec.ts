import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarItemComponent } from './top-navbar-item.component';

describe('TopNavbarItemComponent', () => {
  let component: TopNavbarItemComponent;
  let fixture: ComponentFixture<TopNavbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavbarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
