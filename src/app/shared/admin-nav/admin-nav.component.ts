import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  public usuario;

  constructor(private authservice:AuthService){
    this.usuario = authservice.usuario;
  }


  ngOnInit(): void {
  }
cerrarSesion(){
    this.authservice.logout();
  }
}
