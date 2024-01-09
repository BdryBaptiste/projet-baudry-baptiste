import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitStoreComponent } from './produit-store.component';

describe('ProduitStoreComponent', () => {
  let component: ProduitStoreComponent;
  let fixture: ComponentFixture<ProduitStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitStoreComponent]
    });
    fixture = TestBed.createComponent(ProduitStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
