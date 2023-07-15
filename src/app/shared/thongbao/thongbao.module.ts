import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongbaoComponent } from './thongbao.component';
import {NzDrawerModule} from 'ng-zorro-antd/drawer'
import {NzTableModule} from 'ng-zorro-antd/table'

@NgModule({
  declarations: [
    ThongbaoComponent
  ],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzTableModule
  ]
})
export class ThongbaoModule { }
