import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import jwtDecode from 'jwt-decode'
import { Observable, tap } from 'rxjs';
import { envirmonemt } from './envirmonemt';
import Login from 'src/shared/model/Login';
import Profile from 'src/shared/model/profile';
import { jwtService } from './jwt.service';
import LogOut from 'src/shared/model/logOut';
// import ChiNhanh from 'src/shared/model/chinhanh';
// import NhaCungCap from 'src/shared/model/nhacungcap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Profile | undefined
  private token: string | null
  constructor( private http:HttpClient,
               private jwtService:jwtService
             )
    {
      this.token = jwtService.getToken();
      if(this.token){
        this.user = jwtDecode(this.token) as Profile
      }
     }
  get authorizationHeaderValue():string{
    if(this.token){
      return 'Bearer ' + this.token
    }
    return '';
  }
  cleanToken():void {
     this.token = null;
  }
//login

login(model:Login): Observable<any>{
   return this.http.post(`${envirmonemt.apiUrl}/api/account/loginmobile`, model).pipe(tap((res:any)=>{
     this.token = res.token;
     this.user = jwtDecode(res.token) as Profile;
     //let permission = JSON.stringify(res.permission)??'';
    //  this.jwtService.savePremission(this.user.permissions);
     this.jwtService.saveToken(this.token??'');
   
   })
   )
  }
  logOut(data:any){
    return this.http.post(`${envirmonemt.apiUrl}api/account/logout`,data)
  }
  getLoggedInUser(): Profile | null{
    const token = localStorage.getItem('TOKEN');
    if(token){
      let user = jwtDecode(token) as Profile;
      //user.permission = this.jwtService.getPermission();
      return user;
     }else
       return null;
  }
  
// 
//nhà cung cấp
//  getNhaCungCap(){
//   let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1RhdENhIjoiVHJ1ZSIsImlkIjoiNzY4ZGY0MTItMTFjOS00NjIwLTk5ZWQtYWM0YmY4MzNiMWMyIiwidXNlck5hbWUiOiJBZG1pbiIsImZ1bGxOYW1lIjoiQWRtaW4iLCJhdmF0YXIiOiIiLCJjaGlOaGFuaHMiOiIiLCJwZXJtaXNzaW9ucyI6IltcIkNISU5IQU5IX0NSRUFURVwiLFwiQ0hJTkhBTkhfREVMRVRFXCIsXCJDSElOSEFOSF9VUERBVEVcIixcIkNISU5IQU5IX1ZJRVdcIixcIkRIS1lUSEFOSFRPQU5fRVhQT1JUXCIsXCJESEtZVEhBTkhUT0FOX1ZJRVdcIixcIkRPTkhBTkdfQ1JFQVRFXCIsXCJET05IQU5HX0RFTEVURVwiLFwiRE9OSEFOR19FWFBPUlRcIixcIkRPTkhBTkdfVVBEQVRFXCIsXCJET05IQU5HX1ZJRVdcIixcIkRURFVUSU5IX0VYUE9SVFwiLFwiRFREVVRJTkhfVklFV1wiLFwiRFVUT0FOX0NSRUFURVwiLFwiRFVUT0FOX0RFTEVURVwiLFwiRFVUT0FOX0VYUE9SVFwiLFwiRFVUT0FOX1VQREFURVwiLFwiRFVUT0FOX1ZJRVdcIixcIkRVVE9BTk1VQV9DUkVBVEVcIixcIkRVVE9BTk1VQV9ERUxFVEVcIixcIkRVVE9BTk1VQV9VUERBVEVcIixcIkRVVE9BTk1VQV9WSUVXXCIsXCJIREtZVEhBTkhUT0FOX0VYUE9SVFwiLFwiSERLWVRIQU5IVE9BTl9WSUVXXCIsXCJIT1BET05HX0NSRUFURVwiLFwiSE9QRE9OR19ERUxFVEVcIixcIkhPUERPTkdfRVhQT1JUXCIsXCJIT1BET05HX1VQREFURVwiLFwiSE9QRE9OR19WSUVXXCIsXCJMT0FJVEhVQ0hJX0NSRUFURVwiLFwiTE9BSVRIVUNISV9ERUxFVEVcIixcIkxPQUlUSFVDSElfVVBEQVRFXCIsXCJMT0FJVEhVQ0hJX1ZJRVdcIixcIlBFUk1JU1NJT05fVVBEQVRFXCIsXCJQRVJNSVNTSU9OX1ZJRVdcIixcIlJPTEVfQ1JFQVRFXCIsXCJST0xFX0RFTEVURVwiLFwiUk9MRV9VUERBVEVcIixcIlJPTEVfVklFV1wiLFwiVEhVQ0hJX0NSRUFURVwiLFwiVEhVQ0hJX0RFTEVURVwiLFwiVEhVQ0hJX0VYUE9SVFwiLFwiVEhVQ0hJX1VQREFURVwiLFwiVEhVQ0hJX1ZJRVdcIixcIlVTRVJfQ1JFQVRFXCIsXCJVU0VSX0RFTEVURVwiLFwiVVNFUl9VUERBVEVcIixcIlVTRVJfVklFV1wiXSIsImp0aSI6ImMyNjY2NGFkLTkxMDEtNDA1YS1hMGU3LTUxNjIxZDA2MTdiMiIsInJvbGVzIjoiQWRtaW4iLCJleHAiOjE2ODQ1NTYyMDYsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.w6e8_2S2C4JrQbOWTiYCYyFRiBrqHYnPYAwqJod7cxY"
//   let head_obj = new HttpHeaders().set("Authorization","Bearer "+ token)
//    return this.http.get<NhaCungCap[]>('http://tcsoft.ddns.net:8012/api/nhacungcap/getall?chiNhanh=32f6db97-3454-4c0d-a620-e316c6a3856f',{headers:head_obj})
//  }
//  setChiNhanh(data:ChiNhanh):void{
//      localStorage.setItem('CHINHANH', JSON.stringify(data))
//   }
//  getChiNhanhLocal(): ChiNhanh | null{
//       const da = localStorage.getItem('CHINHANH');
//       if(da != null){
//         return JSON.parse(da) as ChiNhanh; 
//       }
//       return null;
//  }
 
}
