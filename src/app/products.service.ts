import { Observable } from 'rxjs';
import { IProduct, products$ } from './mock';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Inject } from '@angular/core';
// import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  public constructor(
//     @Inject(HttpClient) private http: HttpClient,
    private http: HttpClient
  ) {
  }


  public getProducts(): Observable<IProduct[]> {
    //return this.http.get<IProduct[]>(`/products`);
    this.http.get('http://jsonplaceholder.typicode.com/users');
    console.log('test http ',this.http);
    return products$;
  }

}