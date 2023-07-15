import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HopdongComponent } from './hopdong.component'
import { NzTableModule} from 'ng-zorro-antd/table'
import { NzCheckboxModule} from 'ng-zorro-antd/checkbox'
import { NzSelectModule} from 'ng-zorro-antd/select'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [
    HopdongComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzCheckboxModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzIconModule
  ]

})
export class HopdongModule { }
