import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http } from "@angular/http";


@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  idFormGroup: FormGroup;
  constructor(private httpService: Http) {
    this.idFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      contactNumber: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]*$/)]),
      emailId : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@virtusa.com+$/)])
      
    })
  }
  ngOnInit() {
  }
}
  

