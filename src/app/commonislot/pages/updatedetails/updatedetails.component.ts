import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { CommonServiceService } from '../../../common-service.service';


@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  idFormGroup: FormGroup;
  constructor(private httpService: Http,public service:CommonServiceService) {
    
    this.idFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      contactNumber: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]*$/)]),
      emailId : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@virtusa.com+$/)])
      
    })
  }
  change(){
    var key =this.service.getUser();
    var url='https://islot-34ffe.firebaseio.com/users';
    this.httpService.patch(url+"/"+key+".json",JSON.stringify({
      name:this.idFormGroup.value.firstName,
      phoneNo:this.idFormGroup.value.contactNumber,
      mail:this.idFormGroup.value.emailId,
    })).subscribe(res=>{
        console.log(res.json);
    });
  }
  ngOnInit() {
  }
}
  

