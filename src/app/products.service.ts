import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/listproducts";

  getProducts() : Observable<Products[]>{
    return this.http.get<Products[]>(this.url);
  }
}
