// import { Injectable } from '@angular/core';
// import {Http} from '@angular/http';

// @Injectable()
// export class EventService {
//   url = 'https://islot-34ffe.firebaseio.com/finalevents.json';
//   data;
//   today = new Date();
//   dd = this.today.getDate();
//   mm = this.today.getMonth() + 1; 
//   yyyy = this.today.getFullYear();
//   upcomingevent;
//   recentevent;
//   edate;
//   day;
//   particulareventdata;
//   constructor(private httpservice: Http) {
//     this.upcomingevent = [];
//     this.recentevent = [];
//   }

//   fetchData() {
//     this.httpservice.get(this.url)
//       .subscribe(rsp => {
//         console.log(rsp.json());
//         this.data = rsp.json();
//         for (var key in this.data) {
//           this.edate = this.data[key]['eventDate'];
         
//           this.day = this.edate.split('-');
//           if (parseInt(this.day[2]) > this.yyyy) {
//             this.upcomingevent.push(this.data[key]);
//           }
//           else if ((parseInt(this.day[2]) == this.yyyy)) {
//             if (parseInt(this.day[0]) == this.mm) {
//               if (parseInt(this.day[1]) > this.dd) {
//                 this.upcomingevent.push(this.data[key]);
//               }
//               else {
//                 this.recentevent.push(this.data[key]);
//               }
//             }
//             else if (parseInt(this.day[0]) > this.mm) {
//               this.upcomingevent.push(this.data[key]);
//             }
//             else {
//               this.recentevent.push(this.data[key]);
//             }
//           }
//           else {
//             this.recentevent.push(this.data[key]);
//           }
//         }
//         console.log(this.upcomingevent);
//         console.log(this.recentevent)
//       });

//   }

// }

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EventService {
  url = 'https://islot-34ffe.firebaseio.com/finalevents.json';
  data;
  today = new Date();
  upcomingevent;
  recentevent;
  edate;
  day;
  particulareventdata;
  constructor(private httpservice: Http) {
    this.upcomingevent = [];
    this.recentevent = [];
  }

  fetchData() {
    this.httpservice.get(this.url)
      .subscribe(rsp => {
        console.log(rsp.json());
        this.data = rsp.json();
        for (var key in this.data) {
          this.edate = this.data[key]['date'];
         console.log(this.edate);

          if(new Date(this.edate) > this.today)
            {
              this.upcomingevent.push(this.data[key]);
              console.log(this.upcomingevent);
            }
          
              else {
                this.recentevent.push(this.data[key]);
                console.log(this.recentevent);
              }

        }
        console.log(this.upcomingevent);
        console.log(this.recentevent);
      });

  }

}









