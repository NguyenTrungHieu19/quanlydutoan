import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNhacungcapComponent } from './modal-nhacungcap.component';
import { NzModalModule} from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { NzButtonModule} from 'ng-zorro-antd/button'
import { NzInputModule} from 'ng-zorro-antd/input'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { NzUploadModule} from 'ng-zorro-antd/upload'
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox'



@NgModule({
  declarations: [
    ModalNhacungcapComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    FormsModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzInputNumberModule,
    NzUploadModule,
    NzCheckboxModule
  ]
})
export class ModalNhacungcapModule { }
