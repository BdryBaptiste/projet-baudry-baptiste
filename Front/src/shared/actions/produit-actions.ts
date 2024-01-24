import { Produit } from "../models/produit"; 

export class AddProduit{
    static readonly type = '[Produit] Add';

    constructor(public payload: Produit){}
}

export class DelProduit {
    static readonly type = '[Produit] Del';
  
    constructor(public payload: Produit) {}
  }

  export class Pay{
    static readonly type = '[Produit] Pay';
  }