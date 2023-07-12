import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingbannerComponent } from './movingbanner.component';

describe('MovingbannerComponent', () => {
  let component: MovingbannerComponent;
  let fixture: ComponentFixture<MovingbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingbannerComponent]
    });
    fixture = TestBed.createComponent(MovingbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
