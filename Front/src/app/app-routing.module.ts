import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composants/login/login.component';
import { ProduitListeComponent } from './composants/produit/produit-liste/produit-liste.component';
import { ProduitStoreComponent } from './/composants/produit/produit-store/produit-store.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: ProduitListeComponent },
  { path: 'basket', component: ProduitStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }