import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../shared/models/client';
import { Produit } from '../../shared/models/produit';
import { User } from '../../shared/models/user.model';
import { environment } from '../../environments/environments';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<Client>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }

  public createUser(user :User): Observable<User>{
    let data: String;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    data = 'nom=' + user.nom + '&prenom=' + user.prenom + '&adresse=' + user.adresse + '&codepostal=' + user.codePostal + '&ville=' + user.ville + '&email=' + user.email + '&sexe=' + user.sexe + '&login=' + user.login + '&password=' + user.password + '&telephone=' + user.telephone;
    return this.http.post<User>(
      environment.backendCreateUser,
      data,
      httpOptions
    );
  }

  public getCatalogue(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.backendCatalogue);
  }
}