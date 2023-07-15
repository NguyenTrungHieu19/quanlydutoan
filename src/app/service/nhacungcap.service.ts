import {Injectable} from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { envirmonemt } from './envirmonemt'
import NhaCungCap from 'src/shared/model/nhacungcap'
import ChiNhanh from 'src/shared/model/chinhanh'
import { ChiNhanhService } from './Chinhanh.service'
@Injectable({
    providedIn: 'root'
})
export class NhaCungCapService{
    NhaCungCap:NhaCungCap ={}
    constructor(
        private http:HttpClient,
        private ChiNhanhService:ChiNhanhService
        )
    {}
    getAll(id:string){
       return this.http.get<NhaCungCap[]>(`${envirmonemt.apiUrl}/api/nhacungcap/getall?chiNhanh=${id}`)
    }
    getIdNhaCungCap(id:string){
        return this.http.get<NhaCungCap>(`${envirmonemt.apiUrl}/api/nhacungcap/detail/${id}`)
    }
    getPadingNhaCungCap(pageIndex:number,pageSize:number,idChiNhanh:string, trangThai: boolean | null, keyword: string){
        const params = new HttpParams()
        .set('pageIndex',pageIndex.toString())
        .set('pageSize',pageSize.toString())
        .set('trangThai',trangThai??'')
        .set('keyword',keyword)
        .set('chiNhanh',idChiNhanh);
        return this.http.get<any>(`${envirmonemt.apiUrl}/api/nhacungcap/paging?`,{params:params})
    }
    postNhaCungCap(data:any){
        return this.http.post(`${envirmonemt.apiUrl}/api/nhacungcap/create`,data)
    }
    editNhaCungCaps(data:any){
        return this.http.put(`${envirmonemt.apiUrl}/api/nhacungcap/update`,data)
    }

    deleteNhaCungCap(id:any){
        return this.http.delete(`${envirmonemt.apiUrl}/api/nhacungcap/delete?listId=${id}`)
    }
//set,get loacalstorage
    // setNhaCunCap(data:NhaCungCap){
    //   this.NhaCungCap =data;
    //   localStorage.setItem('NHACUNGCAP',JSON.stringify(data))
    // }
    // getNhaCungCap(){
    //     const da = localStorage.getItem('NHACUNGCAP')
    //     if(da != null){
    //             return JSON.parse(da)
    //     }
    // }
}