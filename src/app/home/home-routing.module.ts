import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChinhanhComponent } from './chinhanh/chinhanh.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HopdongComponent } from './hopdong/hopdong.component';

const routes: Routes = [
  {path:'',component: HomeComponent, children:[
      {path:'',redirectTo: 'trangchu',pathMatch:'full'},
      {path:'trangchu',component:PieChartComponent},
      {path:'chinhanh',component:ChinhanhComponent},
      {path:'nhacungcap',component:NhacungcapComponent},
      {path:'khachhang',component:KhachhangComponent},
      {path:'hopdong',component:HopdongComponent}
    
      
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
