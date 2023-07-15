import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import   ChiNhanh from 'src/shared/model/chinhanh';
import { ChiNhanhService } from '../service/Chinhanh.service';
import { getAllNotification } from '../service/thongbao.service';
import   ThongBao from 'src/shared/model/thongbao';
import {NzDrawerService} from 'ng-zorro-antd/drawer'
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { ThongbaoComponent } from '../shared/thongbao/thongbao.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  isCollapsed = false;
  selectedValue = null;
  emtyDatas:ChiNhanh[]=[];
  isVisible = false;
  isConfirmLoading = false;
  chiNhanh:ChiNhanh={}
  visible = false;
  notification:ThongBao[]=[];
  notificationData:ThongBao []=[];
  pageIndex:number= 1;
  pageSize:number =20;

  constructor(private service:ChiNhanhService,
              private notificationService:getAllNotification,
              private linkLogin:Router,
              private drawer :NzDrawerService,
              private auth:AuthService
         
    ) {}
    ngOnInit(): void {

      this.chiNhanh = this.service.getChiNhanh()
      this.service.getAll().subscribe((res : ChiNhanh[] )=>{
      this.emtyDatas = res
    })
    this.LoadNotification()
  }
//thông tin đăng nhập
  show(data: string): void {
    console.log(data);
  }
  logout():void{ 
    // this.auth.logOut(d).subscribe(res=>{

    // })

    localStorage.removeItem('Token')
    this.linkLogin.navigateByUrl('login')
  }
  //thông báo
  LoadNotification(){
    
    this.notificationService.getAllNotification().subscribe((res:ThongBao[])=>{
      this.notification = res
    })
  }
  showDrawer(): void {
    const showDrawer = this.drawer.create({
      nzTitle:'Thông báo',
      nzContent:ThongbaoComponent,

      // nzContent: , 
    })
  }
  close(): void {
    this.visible = false;
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  
  // handleLoadNoti():void{
  //   this.notificationService.getAllNotification().subscribe((res:ThongBao[])=>{
  //     this.notification = res
      
  //   })
  // }
  //getall chi nhánh
  
// //tất cả thông báo
//   handleNotification(){
//     this.loadNotification()
//     this.close()
//   }
//   loadNotification():void{
//     this.notificationService.getPadingNotification(this.pageIndex,this.pageSize).subscribe(res=>{
//       this.notificationData = res
//       console.log(this.notificationData);
      
//   })
//   }
//   handleCloseNotification(){
//     this.close()
//   }
//Tìm kiếm
setChiNhanh(event:any):void{
  let chiNhanh = this.emtyDatas.find(x=>x.id == event);
  localStorage.setItem('CHINHANH',JSON.stringify(this.chiNhanh));
  let url = this.linkLogin.url;
  this.linkLogin.navigateByUrl('/').then(x=>{
  this.linkLogin.navigateByUrl(url);
  });
}
 }
