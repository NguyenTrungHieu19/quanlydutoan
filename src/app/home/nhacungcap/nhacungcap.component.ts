import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ChiNhanhService } from 'src/app/service/Chinhanh.service';
import { NhaCungCapService } from 'src/app/service/nhacungcap.service';
import { ModalNhacungcapComponent } from 'src/app/shared/modal-nhacungcap/modal-nhacungcap.component';
import ChiNhanh from 'src/shared/model/chinhanh';
import ListStatus from 'src/shared/model/listStatus';
import NhaCungCap from 'src/shared/model/nhacungcap';

@Component({
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.css']
})
export class NhacungcapComponent implements OnInit {
  DataNhaCungCap:NhaCungCap[] = [];
  listNhaCungCaps: NhaCungCap[] = [];
  nhaCungCap:NhaCungCap ={}
  value?: string;
  inputValue?:string;
  checked = false;
  indeterminate = false;
  ischecked = true;
  flagEdit?:boolean;
  flagDelete?:boolean;
  confirmModal?:NzModalRef
  chiNhanh:ChiNhanh={};
  pageIndex=1;
  pageSize = 6;
  totalRows?:number;
  searchValue='';
  listTT:any[]=[{
    id:true,
    name:"Kích hoạt"
    },
    {
     id:false,
     name:"Khóa"
    }
   ]
  
   selectedTT:boolean | null = null;
  constructor( 

               private modal: NzModalService,
               private messge:NzMessageService,
               private servieNhaCungCap:NhaCungCapService,
               private servieChiNhanh:ChiNhanhService ,
               
    ){}
  ngOnInit(): void {
      this.load();
    }
    
  rowClick(data:NhaCungCap){
      this.DataNhaCungCap.forEach(item=>{
        item.checked = false;
      })
      this.ischecked =false
      data.checked= true;
  }
  onChecked(){
   const allCheck = this.DataNhaCungCap.every(value=>value.checked === true);
   const allUnchecked = this.DataNhaCungCap.every(value=>(value.checked));
   const flgEdit = this.DataNhaCungCap.filter(x=>x.checked).length === 1;
   this.flagEdit = flgEdit;
   this.indeterminate = !allCheck && !allUnchecked;
   this.flagDelete = this.indeterminate;
   this.ischecked =!flgEdit
  }
  onAllChecked(value:boolean){
     this.DataNhaCungCap.forEach(item=>{
      item.checked = value
     })
     this.onChecked()
  }
 //tìm kiếm nhà cung cấp
  handleSearchNhaCungCap():void{
    this.pageIndex = 1;
      this.load();
 
  }
  //load nhà cung cấp
  load(){
    let id= this.servieChiNhanh.getChiNhanh();
    this.servieNhaCungCap.getPadingNhaCungCap(this.pageIndex,this.pageSize, id??'', this.selectedTT, this.searchValue).subscribe(res=>{
        //  this.DataNhaCungCap = res
        this.DataNhaCungCap = res.items
        //  this.listNhaCungCaps = res.items;
         this.totalRows = res.totalRows
        //  if(this.selectedTT!=null){
        //   this.DataNhaCungCap= this.DataNhaCungCap.filter(x=>x.status==this.selectedTT)
        //  }               
    })
  }
 
  //pading
  onQueryParamsChange(params:NzTableQueryParams){
       this.pageIndex = params.pageIndex;
       this.pageSize = params.pageSize;
       this.load()
      
  }
  onCurrentPageDataChange($event:NhaCungCap[]) {
       this.DataNhaCungCap = $event;
    
    
  }
  //modal thêm
  showModalAdd():void{
      const showModal = this.modal.create({
        nzTitle:'Thêm nhà cung cấp',
        nzContent:ModalNhacungcapComponent,
        nzWidth:900,
      })
      showModal.afterClose.subscribe(res=>{
        if(res != null){
          this.messge.create('success','bạn đã thêm thành công chi nhánh');
          this.load()
        }
      })
  }
    
  //sửa modal
  showModalEdit():void{
      const index = this.DataNhaCungCap.findIndex(x=>x.checked);
      const showModalEdit = this.modal.create({
      nzTitle:'Sửa chi nhánh',
      nzWidth:900,
      nzContent:ModalNhacungcapComponent,
      nzComponentParams:{
        id:this.DataNhaCungCap[index].id
      },
      })
      showModalEdit.afterClose.subscribe(res=>{
        if(res != null){
          this.messge.create('success','Bạn đã sửa thành công');
          this.ischecked= true;
          this.load();
        }
      })
  }

  //modal xóa
  showConfirm():void{
     const flagDelete = this.DataNhaCungCap.filter(x=>x.checked).map(x=>x.id)
     this.confirmModal = this.modal.confirm({
      nzTitle:'Thông báo',
      nzContent:'Bạn có muốn xóa nhà cung cấp này không?',
      nzOnOk:()=>{
        this.servieNhaCungCap.deleteNhaCungCap(flagDelete.join()).subscribe(res=>{
          this.messge.create('success','Bạn có muốn xóa nhà cung cấp này không');
          this.ischecked = true;
          this.load();
        })
      }
     })
  }
 
}
