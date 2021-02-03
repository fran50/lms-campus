import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Usuario } from 'src/app/models/usuario';
import { queSeanIguales } from 'src/app/util/validadorPersonal';

@Component({
  selector: 'app-user-modifi',
  templateUrl: './user-modifi.component.html',
  styleUrls: ['./user-modifi.component.css']
})
export class UserModifiComponent {
  form :FormGroup;
  public usuario: Usuario;
  constructor(private formBuilder: FormBuilder,
              private authservice:AuthService,
              private subirService:SubirService ) {
  this.usuario = authservice.usuario;
  this.buildForm();
  
   }

  
get cambiafoto(){
  return this.form.get('file');
}

private buildForm(){
  
 this.form = this.formBuilder.group({
   file: [this.usuario.img],
   nombre: [this.usuario.nombre,Validators.required],
   email: [this.usuario.email,[Validators.email, Validators.required]],
   password: ['',[Validators.required, Validators.minLength(5)]],
   vpassword: ['',[Validators.required, Validators.minLength(5)]],
 },{
   validators: queSeanIguales,
 })
}



uploadfile(event){
  const file = event.target.files[0];


  const formdata = new FormData();
  formdata.append('imagen',file);
  this.subirService.subirFoto(formdata)
  .subscribe((resp:any) =>{

    console.log(resp.nombre);
   this.cambiafoto.setValue(resp.nombre);
   this.usuario.img=resp.nombre;
  }, (err) =>{
    console.log(err.error.msg);
    
  })
}

modificarUsuario(event: Event){
  event.preventDefault();
  console.log(this.form.value);
}




}
