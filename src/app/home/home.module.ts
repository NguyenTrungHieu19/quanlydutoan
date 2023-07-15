import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChinhanhComponent } from './chinhanh/chinhanh.component';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { NzModalModule} from 'ng-zorro-antd/modal';
import { NzSelectModule} from 'ng-zorro-antd/select';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzTableModule} from 'ng-zorro-antd/table'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzDrawerModule} from 'ng-zorro-antd/drawer'
import { FormsModule } from '@angular/forms';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { ModalChinhanhModule } from '../shared/modal-chinhanh/modal-chinhanh.module';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { ModalNhacungcapModule } from '../shared/modal-nhacungcap/modal-nhacungcap.module';
import { HethongComponent } from './hethong/hethong.component';
import { ThongbaoModule } from '../shared/thongbao/thongbao.module';
import { NzPaginationModule} from 'ng-zorro-antd/pagination';
import { NzTagModule} from 'ng-zorro-antd/tag';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgApexchartsModule} from 'ng-apexcharts';
import { UserComponent } from './user/user.component';
import { HopdongModule } from './hopdong/hopdong.module';
@NgModule({
  declarations: [
    HomeComponent,
    ChinhanhComponent,
    NhacungcapComponent,
    KhachhangComponent,
    HethongComponent,
    PieChartComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzFormModule,
    FormsModule,
    NzLayoutModule,
    NzDropDownModule,
    NzModalModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzCheckboxModule,
    NzInputModule,
    NzIconModule,
    NzDrawerModule,
    ModalChinhanhModule,
    ModalNhacungcapModule,
    ThongbaoModule,
    NzPaginationModule,
    NzTagModule,
    NgApexchartsModule,
    HopdongModule
  ]
})
export class HomeModule { }
