import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProduitState } from 'src/shared/states/produit-state';
import { ApiService } from './api.service';
import { Produit } from '../shared/models/produit';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';

  @Select(ProduitState.getNbProduit) nb$!: Observable<number>;
  name = 'Angular';
  login: string = '';
  password: string = '';

  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produits$: Observable<Array<Produit>>;
  constructor(private apiService: ApiService) {
    this.produits$ = this.apiService.getCalague();
  }
  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.cnx = true;
    });
  }
}
