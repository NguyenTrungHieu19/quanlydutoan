import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ChiNhanhService } from 'src/app/service/Chinhanh.service';
import { HopdongService } from 'src/app/service/hopdong.service';
import ChiNhanh from 'src/shared/model/chinhanh';
import HopDong from 'src/shared/model/hopdong';
import {endOfMonth} from 'date-fns'


@Component({
  selector: 'app-hopdong',
  templateUrl:'./hopdong.component.html',
  styleUrls: ['./hopdong.component.css']
})
export class HopdongComponent {
  dataHopDong: HopDong[] = [];
  value?: string;
  inputValue?: string;
  checked = false;
  indeterminate = false;
  ischecked = true;
  flagEdit?: boolean;
  flagDelete?: boolean;
  confirmModal?: NzModalRef
  chiNhanh: ChiNhanh = {};
  pageIndex = 1;
  pageSize = 6;
  totalRows?: number;
  searchValue = '';
  status:boolean | null = null;
  listTT: any[] = [{
    id: true,
    name: "Kích hoạt"
  },
  {
    id: false,
    name: "Khóa"
  }
  ]
  constructor(
                private serviceHopDong:HopdongService,
                private serviceChiNhanh:ChiNhanhService
            )
  {}
  ngOnInit():void{
    this.load();
  }
  rowClick(data: HopDong) {
    this.dataHopDong.forEach(item => {
      item.checked = false;
    })
    this.ischecked = false
    data.checked = true;
  }
  onChecked() {
    const allCheck = this.dataHopDong.every(value => value.checked === true);
    const allUnchecked = this.dataHopDong.every(value => (value.checked));
    const flgEdit = this.dataHopDong.filter(x => x.checked).length === 1;
    this.flagEdit = flgEdit;
    this.indeterminate = !allCheck && !allUnchecked;
    this.flagDelete = this.indeterminate;
    this.ischecked = !flgEdit
  }
  onAllChecked(value: boolean) {
    this.dataHopDong.forEach(item => {
      item.checked = value
    })
    this.onChecked()
  }
    //pading
    onQueryParamsChange(params:NzTableQueryParams){
      this.pageIndex = params.pageIndex;
      this.pageSize = params.pageSize;
      // this.load()   
 }
 load(){
  let id= this.serviceChiNhanh.getChiNhanh();
  debugger;
  this.serviceHopDong.getPadingHopDong(this.pageIndex,this.pageSize, id??'', this.status, this.searchValue).subscribe(res=>{
      this.serviceHopDong = res.items
       this.totalRows = res.totalRows
                
  })
}
//thời gian hợp đồng
ranges = {
          'Hôm nay': [new Date(), new Date()],'Tuần này':[new Date(),(new Date())],
          'Tháng này': [new Date(),endOfMonth(new Date())],'Tháng trước':[new Date(),],
          ' Năm nay':[new Date(),],'Tất cả':[new Date(),]
         };

onChange(result: Date[]): void {
  console.log('From: ', result[0], ', to: ', result[1]);
}
}


