import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Produit } from 'src/shared/models/produit';
import { ProduitState } from 'src/shared/states/produit-state';
import { DelProduit } from 'src/shared/actions/produit-actions';
import { Pay } from 'src/shared/actions/produit-actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-produit-store',
  templateUrl: './produit-store.component.html',
  styleUrls: ['./produit-store.component.css']
})

export class ProduitStoreComponent{
  constructor(private store: Store){}

  @Select(ProduitState.getListeProduit) liste$!: Observable<Produit[]>;

  delProduit(p: Produit): void {
    this.store.dispatch(new DelProduit(p));
  }

  pay(): void {
    this.store.dispatch(new Pay());
  }
}
