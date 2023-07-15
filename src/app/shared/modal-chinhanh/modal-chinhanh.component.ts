import { Component } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import ChiNhanh from 'src/shared/model/chinhanh';
import { ChiNhanhService } from 'src/app/service/Chinhanh.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-modal-chinhanh',
  templateUrl: './modal-chinhanh.component.html',
  styleUrls: ['./modal-chinhanh.component.css']
})

export class ModalChinhanhComponent {
  id?:any;
  loading = false;
  avatarUrl?: string;
  inputValue?: string;
  checked = true;
  constructor(private service:ChiNhanhService,
              private modal:NzModalService,
              private messge:NzMessageService,
              private modalref:NzModalRef
    ){}
    ngOnInit()
    {
      this.editChiNhanh()
    }
  demoValue = 3;
  confirmModal?: NzModalRef;
  
  //modal thêm , sửa
  public entity:any={};
   isAdd = true;
  isAddLoading = false;
   handleOk(): void {
    if(this.entity.id == null){ 
      this.service.PostChiNhanh(this.entity).subscribe(res=>{    
        this.modalref.close(res)
      })
      // this.messge.create('success','Bạn đã thêm chi nhánh thành công!')
    }
    //sửa chi nhánh
    
    if(this.entity !==null){
    this.service.editChiNhanhs(this.entity).subscribe(res=>{
      // this.messge.create('success','Bạn đã sửa chi nhánh thành công!')
      this.modalref.close(res)
    })
    }
    setTimeout(() => {
      this.isAdd = false;
      this.isAddLoading = false;
    }, 1000); 
  }
  handleCancel(): void {  
    this.isAdd = false;
    this.modalref.close()
  } 
    // sửa modal
    private editChiNhanh():void{
      this.service.getChiNhanhId(this.id).subscribe((res:ChiNhanh)=>{
      this.entity = res
      })
  }
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
  new Observable((observer: Observer<boolean>) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.messge.error('You can only upload JPG file!');
      observer.complete();
      return;
    }
    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.messge.error('Image must smaller than 2MB!');
      observer.complete();
      return;
    }
    observer.next(isJpgOrPng && isLt2M);
    observer.complete();
  });

private getBase64(img: File, callback: (img: string) => void): void {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result!.toString()));
  reader.readAsDataURL(img);
}

handleChange(info: { file: NzUploadFile }): void {
  switch (info.file.status) {
    case 'uploading':
      this.loading = true;
      break;
    case 'done':
      // Get this url from response in real world.
      this.getBase64(info.file!.originFileObj!, (img: string) => {
        this.loading = false;
        this.avatarUrl = img;
      });
      break;
    case 'error':
      this.messge.error('Network error');
      this.loading = false;
      break;
  }
}
}


