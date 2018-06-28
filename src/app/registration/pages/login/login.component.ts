import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  idformgroup:FormGroup;

  constructor() { 
    this.idformgroup=new FormGroup({
      mailid:new FormControl('',[Validators.required,Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([virtusa|VIRTUSA])+\.(com)$/)])
  })
}

  ngOnInit() {
  }

}
