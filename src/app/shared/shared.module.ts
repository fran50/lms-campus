import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserModifiComponent } from './user-modifi/user-modifi.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminNavComponent, UserModifiComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminNavComponent,
    UserModifiComponent
    
  ]
})
export class SharedModule { 
 
}
