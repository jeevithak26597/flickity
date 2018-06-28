import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-skill-management',
  templateUrl: './skill-management.component.html',
  styleUrls: ['./skill-management.component.css']
})
export class SkillManagementComponent implements OnInit {

  data;
  id=0;
  keys=[];

  constructor(private httpService:Http){
   
  }
  ngOnInit(){
    var url='https://islot-34ffe.firebaseio.com/skills.json';
    this.data=[];
    this.httpService.get(url).subscribe((rsp) => {
      if(rsp.json())
      {
        this.data = rsp.json();
        this.keys=Object.keys(this.data);
      }
    })
  }
  addSkill(skill)
  {
    var url='https://islot-34ffe.firebaseio.com/skills.json';
    const newSkill={
      id:this.keys.length,
      skill: skill.value
    }
    this.httpService.post(url,JSON.stringify(newSkill)).subscribe(res=>{
      this.keys.push(res.json().name);
      this.data[res.json().name]=newSkill;
    });
    skill.value='';
    
  }
  
  onDel(key){
    var url='https://islot-34ffe.firebaseio.com/skills';
    this.httpService.delete(url+"/"+key+".json").subscribe(res=>{
        let index=this.keys.indexOf(key);
        this.keys.splice(index,1);
    });
  }
  onUpdate(key,skillEdit){
    let index=this.keys.indexOf(key);
    var url='https://islot-34ffe.firebaseio.com/skills';
    this.httpService.patch(url+"/"+key+".json",JSON.stringify({
      skill: skillEdit.value
    })).subscribe(res=>{
        console.log(res.json);
    });
  }
  

}