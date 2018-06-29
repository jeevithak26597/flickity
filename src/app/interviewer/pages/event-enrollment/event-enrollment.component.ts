import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-enrollment',
  templateUrl: './event-enrollment.component.html',
  styleUrls: ['./event-enrollment.component.css']
})
export class EventEnrollmentComponent implements OnInit{
    @Input() value1:number=0;
    @Input() bool1:boolean;
    @Input() value2:number=0;
    @Input() bool2:boolean;
    @Input() value3:number=0;
    @Input() bool3:boolean;
    @Input() value4:number=0;
    @Input() bool4:boolean;
     constructor() {
       this.bool1= false;
       this.bool2 = false;
       this.bool3 = false;
       this.bool4 = false;
      }
   
     ngOnInit() {
     }
   active1():void{
     this.bool1 = !this.bool1
     this.changeVal1();
     }
     changeVal1(){
       if(this.bool1){
         this.value1 =this.value1+1
       }
       else{
         this.value1 =this.value1-1;
       }
     }
     active2():void{
       this.bool2 = !this.bool2
       this.changeVal2();
       }
       changeVal2(){
         if(this.bool2){
           this.value2 =this.value2+1
         }
         else{
           this.value2 =this.value2-1;
         }
       }
       active3():void{
         this.bool3= !this.bool3
         this.changeVal3();
         }
         changeVal3(){
           if(this.bool3){
             this.value3 =this.value3+1
           }
           else{
             this.value3 =this.value3-1;
           }
         }
         active4():void{
     this.bool4 = !this.bool4
     this.changeVal4();
     }
     changeVal4(){
       if(this.bool4){
         this.value4 =this.value4+1
       }
       else{
         this.value4 =this.value4-1;
       }
     }
   }
   
   



