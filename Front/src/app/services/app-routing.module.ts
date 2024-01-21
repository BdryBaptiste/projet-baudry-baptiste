import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../composants/login/login.component';
import { ProduitListeComponent } from '../composants/produit/produit-liste/produit-liste.component';
import { ProduitStoreComponent } from '../composants/produit/produit-store/produit-store.component';
import { HomeComponent } from '../composants/home/home.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: ProduitListeComponent, canActivate: [AuthGuard]  },
  { path: 'basket', component: ProduitStoreComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }