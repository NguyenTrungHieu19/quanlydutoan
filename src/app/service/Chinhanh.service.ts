import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http'
import ChiNhanh from 'src/shared/model/chinhanh'
import { envirmonemt } from './envirmonemt'
import { catchError } from 'rxjs'

@Injectable ({
    providedIn: 'root'
})
export class ChiNhanhService {
    [x: string]: any
    ChiNhanh:ChiNhanh={};
    constructor (
        private http:HttpClient,
                ){ }
    //loadcchi nhánh
    getAll(){  
        return this.http.get<ChiNhanh[]>(`${envirmonemt.apiUrl}/api/chinhanh/getall`)
    }
    //get id chi nhánh edit
    getChiNhanhId(id:any){
     
       return this.http.get<ChiNhanh>(`${envirmonemt.apiUrl}/api/chinhanh/detail/${id}`)
    }
    // //thêm chi nhánh 

    PostChiNhanh(entity:any){   
      return this.http.post(`${envirmonemt.apiUrl}/api/chinhanh/create`,entity)
    }

    // //sửa chi nhánh
    editChiNhanhs(data:any){     
      return this.http.put(`${envirmonemt.apiUrl}/api/chinhanh/update`,data)
    }
    // //xóa chi nhánh
    removeChiNhanh(id:any){
      
    return this.http.delete(`${envirmonemt.apiUrl}/api/chinhanh/delete?listId=${id}`)
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
        const da = localStorage.getItem('CHINHANH');
        if(da != null){
          return JSON.parse(da)
        }  

    }
}