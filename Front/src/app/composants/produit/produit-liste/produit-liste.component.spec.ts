import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitListeComponent } from './produit-liste.component';

describe('ProduitListeComponent', () => {
  let component: ProduitListeComponent;
  let fixture: ComponentFixture<ProduitListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitListeComponent]
    });
    fixture = TestBed.createComponent(ProduitListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
