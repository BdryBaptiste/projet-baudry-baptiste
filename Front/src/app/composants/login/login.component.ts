import { Component } from '@angular/core';
import { ProduitState } from 'src/shared/states/produit-state';
import { ApiService } from '../../services/api.service';
import { Produit } from '../../../shared/models/produit';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Select(ProduitState.getNbProduit) nb$!: Observable<number>;

  name = 'Angular';

  login: string = '';
  password: string = '';
  errorMessage: string = '';
  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produits$: Observable<Array<Produit>>;

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {
    this.produits$ = this.apiService.getCalague();
  }

  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe({
      next: (c) => {
        this.nom = c.nom;
        this.prenom = c.prenom;
        this.cnx = true;
        this.authService.login({ login: this.login, password: this.password });
        this.router.navigate(['/catalog']);
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }
}
