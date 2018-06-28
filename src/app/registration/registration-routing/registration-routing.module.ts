import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";
import { ReactiveFormsModule} from '@angular/forms';
import { InterviewerregiserComponent } from "../pages/interviewerregiser/interviewerregiser.component";
const regRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'interviewerregister',component:InterviewerregiserComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'admin',
  loadChildren:'app/admin/admin.module#AdminModule'},
  {path:'interviewer',
  loadChildren:'app/interviewer/interviewer.module#InterviewerModule'}
  
]
@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(regRoutes)
  ],
  exports:[
   RouterModule
  ],
  declarations: []
})

export class RegistrationRoutingModule { }
