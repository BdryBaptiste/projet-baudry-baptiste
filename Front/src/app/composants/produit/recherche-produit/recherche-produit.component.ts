import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recherche-produit',
  templateUrl: './recherche-produit.component.html',
  styleUrls: ['./recherche-produit.component.css']
})

export class RechercheProduitComponent {
  @Output() recherche = new EventEmitter<string>();

  filtrerProduits(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.recherche.emit(inputElement.value);
  }
}
