import {Injectable} from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { envirmonemt } from './envirmonemt'
import ThongBao from 'src/shared/model/thongbao'
@Injectable({
    providedIn:'root'
})

export class getAllNotification{
  
     constructor(private http:HttpClient){}
     getAllNotification( ){
        return this.http.get<ThongBao[]>(`${envirmonemt.apiUrl}/api/thongbao/getall`)
     }
     getPadingNotification(pageIndex:number,pageSize:number ) {
          const params = new HttpParams()
          .set('pageIndex',pageIndex.toString())
          .set('pageSize', pageSize.toString())
        return this.http.get<any>(`${envirmonemt.apiUrl}/api/thongbao/paging?`,{params:params})
     }
}