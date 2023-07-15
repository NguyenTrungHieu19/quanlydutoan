import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChinhanhComponent } from './modal-chinhanh.component';

describe('ModalChinhanhComponent', () => {
  let component: ModalChinhanhComponent;
  let fixture: ComponentFixture<ModalChinhanhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalChinhanhComponent]
    });
    fixture = TestBed.createComponent(ModalChinhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
