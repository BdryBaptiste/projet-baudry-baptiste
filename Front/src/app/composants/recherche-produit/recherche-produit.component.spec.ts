import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProduitComponent } from './recherche-produit.component';

describe('RechercheProduitComponent', () => {
  let component: RechercheProduitComponent;
  let fixture: ComponentFixture<RechercheProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheProduitComponent]
    });
    fixture = TestBed.createComponent(RechercheProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
