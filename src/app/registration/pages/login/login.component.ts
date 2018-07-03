import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { ServiceregisterService } from '../../serviceregister.service';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../../common-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServiceregisterService,CommonServiceService],
})
export class LoginComponent implements OnInit {
  idformgroup:FormGroup;
router;
  constructor(public service:ServiceregisterService,public r:Router,public commonser:CommonServiceService) { 
    this.service.fetchUser();
    this.router=r;
    this.idformgroup=new FormGroup({
      password: new FormControl('',Validators.required),
      mailid:new FormControl('',[Validators.required,Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([virtusa|VIRTUSA])+\.(com)$/)])
  })
}
login(){
  var loged=false;
  for(var i=0;i<this.service.usrArr.length;i++){
     if(this.service.usrArr[i].mail==this.idformgroup.value.mailid){
       if(this.service.usrArr[i].password==this.idformgroup.value.password){
        loged=true;
        this.commonser.setUser(this.service.usrArr[i].key);
         if(this.service.usrArr[i].role=="admin"){
          
           this.router.navigate(['admin']);
           
         }
         else{
           this.router.navigate(['interviewer']);
         }
       }
     }
  }
  if(loged==false){
    alert("Invalid UserId or Password");
  }
      
}

  ngOnInit() {
  }

}
