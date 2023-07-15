import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {LoginComponent } from './login.component';
import {NZ_I18N } from 'ng-zorro-antd/i18n';
import {en_US } from 'ng-zorro-antd/i18n';
import {registerLocaleData } from '@angular/common';
import  en from '@angular/common/locales/en';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon'
import {LoginRoutingModule } from './login-routing.module';
import {NgxCaptchaModule} from 'ngx-captcha';
import {RecaptchaModule} from 'ng-recaptcha'
registerLocaleData(en);
@NgModule({
  declarations: [LoginComponent, ],

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    RecaptchaModule,
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
})
export class LoginModule { }
