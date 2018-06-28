import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-location-management',
  templateUrl: './location-management.component.html',
  styleUrls: ['./location-management.component.css']
})
export class LocationManagementComponent implements OnInit {
  data;
  id=0;
  keys=[];
  locations;
  constructor(private httpService:Http) { }


  ngOnInit() {
    var url='https://islot-34ffe.firebaseio.com/finallocation.json';
    this.data=[];
    this.httpService.get(url).subscribe((rsp) => {
      if(rsp.json())
      {
        this.data = rsp.json();
        this.keys=Object.keys(this.data);
      }
    })
  }

  addLocation(location)
  {
    var url='https://islot-34ffe.firebaseio.com/finallocation.json';
    const newLocation={
      id:this.keys.length,
      location: location.value
    }
    this.httpService.post(url,JSON.stringify(newLocation)).subscribe(res=>{
      this.keys.push(res.json().name);
      this.data[res.json().name]=newLocation;
    });
    location.value='';
    
  }
  
  onDelete(key){
    var url='https://islot-34ffe.firebaseio.com/finallocation';
    this.httpService.delete(url+"/"+key+".json").subscribe(res=>{
        let index=this.keys.indexOf(key);
        this.keys.splice(index,1);
    });
  }
  onUpdate(key,locationEdit){
    let index=this.keys.indexOf(key);
    var url='https://islot-34ffe.firebaseio.com/finallocation';
    this.httpService.patch(url+"/"+key+".json",JSON.stringify({
      location: locationEdit.value
    })).subscribe(res=>{
        console.log(res.json);
    });
  }
  
}

