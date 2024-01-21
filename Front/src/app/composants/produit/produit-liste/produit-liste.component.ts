import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/shared/models/produit';
import { ProduitState } from 'src/shared/states/produit-state';
import { Observable } from 'rxjs';
import { AddProduit } from 'src/shared/actions/produit-actions';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})

export class ProduitListeComponent implements OnInit {
  produits$: Observable<Array<Produit>>;
  produits: Produit[] = [];
  produitsFiltres: Produit[] = [];

  @Select(ProduitState.getListeProduit) liste$!: Observable<Produit[]>;

  constructor(private apiService: ApiService, private store: Store) {
    this.produits$ = this.apiService.getCatalogue();
  }

  ngOnInit(): void {
    this.produits$.subscribe((data: Produit[]) => {
      console.log(data);
      this.produits = data;
      this.produitsFiltres = data; 
    }, error => {
      console.error("Error retrieving products", error);
    });
  }

  addProduit(produit: Produit): void {
    console.log(produit);
    const copyProduit: Produit = { ...produit };
    this.store.dispatch(new AddProduit(copyProduit));
  }

  filtrerProduits(term: string): void {
    if (!term) {
      this.produitsFiltres = this.produits;
    } else {
      this.produitsFiltres = this.produits.filter(produit =>
        produit.nom.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
