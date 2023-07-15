import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule} from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { NzButtonModule} from 'ng-zorro-antd/button'
import { NzInputModule} from 'ng-zorro-antd/input'
import { ModalChinhanhComponent } from './modal-chinhanh.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzUploadModule} from 'ng-zorro-antd/upload'
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox'
@NgModule({
  declarations: [
   ModalChinhanhComponent
  ],
  imports: [
    NzFormModule,
    CommonModule,
    NzModalModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,   
    NzIconModule,
    NzInputNumberModule,
    NzUploadModule,
    NzCheckboxModule
  ],
  // exports:[ModalChinhanhComponent]
})
export class ModalChinhanhModule { }
