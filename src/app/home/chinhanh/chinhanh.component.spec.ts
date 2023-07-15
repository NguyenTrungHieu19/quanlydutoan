import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhanhComponent } from './chinhanh.component';

describe('ChinhanhComponent', () => {
  let component: ChinhanhComponent;
  let fixture: ComponentFixture<ChinhanhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChinhanhComponent]
    });
    fixture = TestBed.createComponent(ChinhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
