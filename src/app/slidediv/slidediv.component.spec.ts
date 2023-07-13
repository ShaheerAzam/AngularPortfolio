import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidedivComponent } from './slidediv.component';

describe('SlidedivComponent', () => {
  let component: SlidedivComponent;
  let fixture: ComponentFixture<SlidedivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidedivComponent]
    });
    fixture = TestBed.createComponent(SlidedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
