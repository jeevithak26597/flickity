import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITile } from './tile/tile.component';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  getSkills() {
  return this.http.get<any>('/assets/data/skills.json')
    .toPromise()
    .then(res => <[ITile]>res.data);
  }
  // getQuestion() {
  //   this.http.get('/assets/data/skills.json')
  //   .subscribe((res) => {
  //     console.log(res.json());
  //   });
  // }
}
