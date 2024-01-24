import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { ProduitState } from 'src/shared/states/produit-state';
import { ProduitModule } from './composants/produit/produit.module';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { ApiHttpInterceptor } from './http-interceptor';
import { LoginComponent } from './composants/login/login.component';
import { CreateUserComponent } from './composants/create-user/create-user.component';
import { AppRoutingModule } from './services/app-routing.module';
import { HomeComponent } from './composants/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([ProduitState]),
    ProduitModule,
    BrowserModule, FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }