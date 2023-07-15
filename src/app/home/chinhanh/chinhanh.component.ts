import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ChiNhanhService } from 'src/app/service/Chinhanh.service';
import { AuthService } from 'src/app/service/auth.service';
import { ModalChinhanhComponent } from 'src/app/shared/modal-chinhanh/modal-chinhanh.component';
import ChiNhanh from 'src/shared/model/chinhanh';
@Component({
  selector: 'app-chinhanh',
  templateUrl: './chinhanh.component.html',
  styleUrls: ['./chinhanh.component.css']
})
export class ChinhanhComponent  {
  emtyDatas: ChiNhanh []=[];
  ChiNhanh:ChiNhanh={};
  confirmModal?: NzModalRef;
  value?: string;
  checked = false;
  ischecked = true;
  flagEdit?: boolean;
  flagAllCheck?:boolean;
  indeletermitnate?:boolean;
  flagDelete?:boolean;
  index:any;
  indeterminate = false;
  inputValue?:string;
  
  public entity ={
     inputSearch:null
  }
  constructor( private service:ChiNhanhService,
               private modal: NzModalService,
               private messge:NzMessageService
    ){}
     ngOnInit(): void {
      this.load();
  }
  onChecked(){
      const allCheck = this.emtyDatas.every(value=>value.checked ===true);
      const allUnChecked = this.emtyDatas.every(value => (value.checked))
      const flgEdit = this.emtyDatas.filter(x=>x.checked).length===1;
      this.flagEdit = flgEdit;
      this.flagAllCheck =allCheck;
      this.indeletermitnate = !allCheck && !allUnChecked;
      this.flagDelete = this.indeletermitnate;
      this.ischecked= !flgEdit
  }
  rowClick(data:ChiNhanh){
    this.emtyDatas.forEach(item=>{
      item.checked = false; 
    })
    this.ischecked = false
    data.checked = true;
  }
  onAllChecked(value:boolean){
      this.emtyDatas.forEach(item=>{
        item.checked = value
      })
      this.onChecked()
  }
  load(){
    this.service.getAll().subscribe((res : ChiNhanh[] )=>{
      this.emtyDatas = res
    })
  }
  
 //thêm
  showModalAdd(): void {
    const showModal = this.modal.create({
      nzTitle:'Thêm chi nhánh.',
      nzContent: ModalChinhanhComponent,    
    })
    showModal.afterClose.subscribe(res=>{
      if( res != null){
         this.messge.create('success','bạn đã thêm thành công chi nhánh');
         this.load();
      }
    })
  
  }

 
//sửa
  showModalEdit(): void {
      const index = this.emtyDatas.findIndex(x=>x.checked)
      const showModalEdit = this.modal.create({
      nzTitle:'Sửa chi nhánh.',
      nzContent: ModalChinhanhComponent,
      nzComponentParams:{
        id: this.emtyDatas[index].id
      },
    }) 
    showModalEdit.afterClose.subscribe(res=>{
      if( res != null){
         this.messge.create('success','Bạn đã sửa thành công');
         this.ischecked= true;
         this.ngOnInit();
      }
    })
  }

  //modal xóa
  showConfirm(): void {
    const ftDelete = this.emtyDatas.filter(x=>x.checked).map(x=>x.id)
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Thông báo',
      nzContent: 'Bạn có muốn xóa bản ghi này không',
      nzOnOk: () =>
        this.service.removeChiNhanh(ftDelete.join()).subscribe(res=>{
          this.messge.create('success','bạn đã xóa thành công');
          this.ischecked= true;
          this.load();
        })
    });
  }
  handleSearchChiNhanh(){
    this.emtyDatas.filter(x=>x.checked)
    if(this.entity){    
    }
    console.log(this.entity); 
  }
get id():string{
  if(this.ChiNhanh == null){
    const da =localStorage.getItem('CHINHANH');
    if(da != null){
      return JSON.parse(da).id;
    }
    return '';
  }
  return this.ChiNhanh.id??''
}
setChiNhanh(data:ChiNhanh):void{
  this.ChiNhanh =data;
  localStorage.setItem('CHINHANH',JSON.stringify(data));
}
getChiNhanh(){
  if(this.ChiNhanh == null){
    const da = localStorage.getItem('CHINHANH');
    if(da != null){
      return JSON.parse(da)
    }  
    return {checked :false}
  } 
  return this.ChiNhanh
}
}
