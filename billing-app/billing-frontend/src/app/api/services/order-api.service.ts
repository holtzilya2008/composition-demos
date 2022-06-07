import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/features/order/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  private path = 'order';

  constructor(private http: HttpClient) { }

  update(order: Order): Observable<any> {
    const url = `${environment.backendUrl}/${this.path}`;
    return this.http.put(url, order);
  }

}
