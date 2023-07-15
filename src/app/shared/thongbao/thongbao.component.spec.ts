import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaoComponent } from './thongbao.component';

describe('ThongbaoComponent', () => {
  let component: ThongbaoComponent;
  let fixture: ComponentFixture<ThongbaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongbaoComponent]
    });
    fixture = TestBed.createComponent(ThongbaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
