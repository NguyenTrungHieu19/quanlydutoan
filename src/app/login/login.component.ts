import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService} from 'ng-zorro-antd/message'
import { AuthService } from '../service/auth.service';
import { envirmonemt } from '../service/envirmonemt';
import Login from 'src/shared/model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
export class LoginComponent implements OnInit {

  user: Login={};
  capchaApiLogin = `${envirmonemt.apiUrl}+/api/account/createdntcaptchaparams`
  data:any;
  validationErrorMessage!: string;
  success!: boolean;
  validateForm!: UntypedFormGroup;
  //loading
  // createMessge(success:string){
  //   this.messge.create(success,'đăng nhập thành công')
  // }
  constructor(private fb: UntypedFormBuilder,
    private service:AuthService,
    private linkHome:Router,
    private messge: NzMessageService
    // private toastr:ToastrService
    
) {}
  submitForm(): void {
      this.service.login(this.validateForm.value).subscribe(res=>{
      // localStorage.setItem('Token', JSON.stringify(res))
      this.messge.create('success','đăng nhập thành công')
      this.linkHome.navigateByUrl('home')
     },err=>{ 
          console.log(err);
          if(typeof(err.error)=='string'){
            this.messge.create('error','vui lòng nhập lại mật khẩu')
          }
     }) 
 
  }


  ngOnInit(): void {
    this.validateForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      // captcha:  [null, [Validators.required]],
    
    });
  }


}
