import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envirmonemt } from './envirmonemt';

@Injectable({
  providedIn: 'root'
})
export class HopdongService {

  constructor(
                private http:HttpClient,
             ) 
  { }
  getAllHopDong(id:any){
    return this.http.get(`${envirmonemt.apiUrl}/api/hopdong/getall?idChiNhanh=${id}`)
  }
  getPadingHopDong(pageIndex:number, pageSize:number, idChiNhanh:string,status:boolean | null, keyWord:string){
    const params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())
      .set('ChiNhanh', idChiNhanh)
      .set('status',status??'')
      .set('keyWord',keyWord)
      return this.http.get<any>(`${envirmonemt.apiUrl}/api/hopdong/paging?`,{params:params})
  }
}
