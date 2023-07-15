import {Injectable} from '@angular/core'
@Injectable({
    providedIn:'root'
})
export class jwtService{
    getToken(): string{
        const token =localStorage.getItem('TOKEN');
          if(token == null){
            return '';
          }
          return token
    }
    
    saveToken(token:string) :void{
         localStorage.setItem('TOKEN',token);
    }
    destroyToken():void {
        localStorage.removeItem('TOKEN')
    }
    savePremission(permissions: string[]){
        localStorage.setItem('PERMISSIONS',JSON.stringify(permissions));

    }
    getPermission():string[]{
        const per = localStorage.getItem('PERMISSIONS')
        if(per == null){
            return [];
        }
        return JSON.parse(per);
    }
}