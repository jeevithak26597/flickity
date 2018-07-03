import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ServiceregisterService } from "../../serviceregister.service";
import {FormsModule} from '@angular/forms';
import {UserModel} from '../../../commonislot/newmodel/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-interviewerregiser',
  templateUrl: './interviewerregiser.component.html',
  styleUrls: ['./interviewerregiser.component.css']
})
export class InterviewerregiserComponent implements OnInit {
  idformgroup:FormGroup;
  dataArr;
  data;
  skills;
  router;
  constructor(private service:ServiceregisterService,public r:Router) {
    this.router=r;
    this.dataArr=[];
    this.skills=[];
    this.service.fetchSkills();
     
  this.dataArr=this.service.skillArr;
    this.idformgroup=new FormGroup({
      mailid:new FormControl('',[Validators.required,Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([virtusa|VIRTUSA])+\.(com)$/)]),
      name:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      phonenumber:new FormControl('',Validators.required),
      location:new FormControl(''),
      employeeid:new FormControl('',[Validators.required, Validators.pattern(/^8[0-9]{6}$/)]),
      role:new FormControl(''),
      skills:new FormControl('')
    })

   }

     
  onSave()
  {
      
        
         const name=this.idformgroup.get('name').value;
         const mailid=this.idformgroup.get('mailid').value;
         const phonenumber=this.idformgroup.get('phonenumber').value;
         const password=this.idformgroup.get('password').value;
         const location=this.idformgroup.get('location').value;
         const employeeid=this.idformgroup.get('employeeid').value;
          
       // var userobject=new User( 10,"ram","abc@gmail.com",999999999,"admin","chennai",[]);  \
          
        
          
       const userModel:UserModel = new UserModel(employeeid,name,mailid,phonenumber,"interviewer",location,this.dataArr,password);
      
    console.log(JSON.stringify(userModel))
    this.service.newuser(JSON.stringify(userModel))
    .subscribe(
          (Response)=>console.log(Response),
          (Error)=>console.log(Error)
    )
    this.router.navigate(['login']);

  }
  
  ngOnInit() {
  }

}
