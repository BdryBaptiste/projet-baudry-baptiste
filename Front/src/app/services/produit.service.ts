import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitsUrl = 'assets/produits.json';

  constructor(private http: HttpClient) {}

  getProduits(): Observable<any> {
    return this.http.get(this.produitsUrl);
  }
}
