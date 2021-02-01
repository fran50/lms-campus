import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/servicios/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public usuario;

  constructor(
    private authservice: AuthService
  ) {

     this.usuario = authservice.usuario;
   }

  ngOnInit(): void {
  }


  cerrarSesion(){
    this.authservice.logout();
  }
}
