import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
// import { LEADERS } from '../shared/leaders';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {


  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders');
    // return of(PROMOTIONS).pipe(delay(2000));
  }
  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id);
    // return of(this.LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map(leader => leader[0]));
  }





  // constructor() { }
  // getLeaders(): Observable<Leader[]> {
  //   return of(LEADERS).pipe(delay(2000));;
  // }
  // getLeader(id: string): Observable<Leader> {
  //   return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  // }
  // getFeaturedLeader(): Observable<Leader> {
  //   return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  // }
}
