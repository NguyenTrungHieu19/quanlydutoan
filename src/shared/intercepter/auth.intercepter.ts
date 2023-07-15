import {Injectable} from '@angular/core'
import {HttpInterceptor, HttpRequest,HttpEvent, HttpHandler} from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/service/auth.service'
@Injectable({
    providedIn:'root'
})
export class AuthIntercepter implements HttpInterceptor{
    constructor(private authorization:AuthService){}
    AuthService: any
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        request = request.clone({
                setHeaders:{
                    Authorization: this.authorization.authorizationHeaderValue
                }
        })
        return next.handle(request)
    }
    
}