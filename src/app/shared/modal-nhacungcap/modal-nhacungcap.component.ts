import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { ChiNhanhService } from 'src/app/service/Chinhanh.service';
import { NhaCungCapService } from 'src/app/service/nhacungcap.service';
import NhaCungCap from 'src/shared/model/nhacungcap';

@Component({
  selector: 'app-modal-nhacungcap',
  templateUrl: './modal-nhacungcap.component.html',
  styleUrls: ['./modal-nhacungcap.component.css']
})
export class ModalNhacungcapComponent {
  public id?:any;
  loading = false;
  avatarUrl?: string;
  inputValue?: string;
  checked = true;
  isAdd = true;
  isAddLoading = false;
  demoValue = 3;
  confirmModal?: NzModalRef;
  
  constructor(
    private messge:NzMessageService,
    private serviceNhaCungCap:NhaCungCapService,
    private modalRef:NzModalRef,
    private serviceChiNhanh:ChiNhanhService
  ){ }
  ngOnInit(){
    this.editNhaCungCap()
  }
 public entity:any ={}
   //thêm sửa xóa nhà cung cấp
   handleOk(){
    
    if(this.entity.id == null){
      const idChiNhanh= this.serviceChiNhanh.getChiNhanh()
      this.entity.idChiNhanh = idChiNhanh;
      this.serviceNhaCungCap.postNhaCungCap(this.entity).subscribe(res=>{
        this.modalRef.close(res)
      })
      
    }
     if(this.entity !== null){
      this.serviceNhaCungCap.editNhaCungCaps(this.entity).subscribe(res=>{
        this.modalRef.close(res)
      })
    }
 }
 handleCancel(){
    this.isAdd =false;
    this.modalRef.close()
 }
 
 private editNhaCungCap():void{
    this.serviceNhaCungCap.getIdNhaCungCap(this.id).subscribe((res:NhaCungCap)=>{
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
