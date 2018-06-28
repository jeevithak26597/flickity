import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
const routes:Routes=[
  {path:'',
  loadChildren:'app/registration/registration.module#RegistrationModule'}



]

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: []
  
})
export class AppRoutingModule { }
