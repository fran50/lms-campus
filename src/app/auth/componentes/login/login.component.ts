import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public loginForm = this.formbuils.group({
    email:['', [Validators.required]],
    password:['' ,[Validators.required]]
  })

  constructor(
    private authservice:AuthService,
    private formbuils:FormBuilder,
    private router: Router
  ) { }

  logearUsuario(){

    this.authservice.login(this.loginForm.value)
    .subscribe(resp =>{
      console.log("esto esta ok");
      this.router.navigateByUrl('admin');

    }, (err) => {

      console.log(err.error.msg);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.msg ,
        footer: '<a href>Why do I have this issue?</a>'
      });
    })
  }

}
