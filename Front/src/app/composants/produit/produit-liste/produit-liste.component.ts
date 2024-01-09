import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/shared/models/produit';
import { ProduitState } from 'src/shared/states/produit-state';
import { Observable } from 'rxjs';
import { AddProduit } from 'src/shared/actions/produit-actions';
import { ProduitStoreComponent } from '../produit-store/produit-store.component';

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})

export class ProduitListeComponent implements OnInit {
  produits: any[] = [];
  produitsFiltres: any[] = [];

  constructor(private produitService: ProduitService, private store: Store) {}

  @Select(ProduitState.getListeProduit) liste$!: Observable<Produit[]>;

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data: any[]) => {
      console.log(data);
      this.produits = data;
      this.produitsFiltres = data; 
    }, error => {
      console.error("Erreur lors de la récupération des produits", error);
    });
  }
  addProduit(produit : Produit){
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
