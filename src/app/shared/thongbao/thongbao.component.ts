import { Component } from '@angular/core';
import { getAllNotification } from 'src/app/service/thongbao.service';
import ThongBao from 'src/shared/model/thongbao';

@Component({
  selector: 'app-thongbao',
  templateUrl: './thongbao.component.html',
  styleUrls: ['./thongbao.component.css']
})
export class ThongbaoComponent {
  notificationData:ThongBao []=[];
  checked =false;
  indetermitnate = false;
  flgEdit?:boolean;
  flgAllCheck?:boolean;
  flgDelete?:boolean;
  indeterminate = false;
  pageIndex:number= 1;
  pageSize:number =20;
  visible = false;
  notification:ThongBao[]=[];
    constructor(
                private notificationService:getAllNotification
                
               ){}
  ngOnInit(): void{
    this.handleLoadNoti()
    // this.loadNotification();
   
  }
  //load thông báo
  handleLoadNoti():void{
    this.notificationService.getAllNotification().subscribe((res:ThongBao[])=>{
      this.notification = res
      
    })
  }
  //checked table
 
  onChecked(){
    const allCheck = this.notificationData.every(value=>value.checked === true);
    const allUnChecked = this.notificationData.every(value=>(value.checked));
    const flagEdit = this.notificationData.filter(x=>x.checked).length===1;
    this.flgEdit = flagEdit;
    this.flgAllCheck = allCheck;
    this.indeterminate = !allCheck && !allUnChecked;
    this.flgDelete = this.indeterminate
    
  }
  rowClick(data:ThongBao){
    this.notificationData.forEach(item=>{
      item.checked =false;
    })
    this.onChecked()
    data.checked = true
  }
  onAllChecked(value:boolean){
    this.notificationData.forEach(item=>{
      item.checked = value
    })
  }
    // loadNotification():void{
    //   this.service.getPadingNotification(this.pageIndex,this.pageSize).subscribe(res=>{
    //     this.notificationData = res
    //     console.log(this.notificationData);
        
    // })
    // }
    open(): void {
      this.visible = true;
    }
    close(): void {
      this.visible = false;
    }
    //tất cả thông báo
  handleNotification(){
    this.loadNotification()
    this.close()
  }
  loadNotification():void{
    this.notificationService.getPadingNotification(this.pageIndex,this.pageSize).subscribe(res=>{
      this.notificationData = res
      console.log(this.notificationData);
      
  })
  }
  handleCloseNotification(){
    this.close()
  }
}
