import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
// import { PROMOTIONS } from '../shared/promotions';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  
  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
    // return of(PROMOTIONS).pipe(delay(2000));
  }
  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promptions/' + id);
    // return of(this.PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable< Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }
}
