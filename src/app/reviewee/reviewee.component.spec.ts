import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevieweeComponent } from './reviewee.component';

describe('RevieweeComponent', () => {
  let component: RevieweeComponent;
  let fixture: ComponentFixture<RevieweeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevieweeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevieweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
