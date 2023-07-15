import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNhacungcapComponent } from './modal-nhacungcap.component';

describe('ModalNhacungcapComponent', () => {
  let component: ModalNhacungcapComponent;
  let fixture: ComponentFixture<ModalNhacungcapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNhacungcapComponent]
    });
    fixture = TestBed.createComponent(ModalNhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
