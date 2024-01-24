import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddProduit, DelProduit } from '../actions/produit-actions';
import { ProduitStateModel } from './produit-state-models';
import { Produit } from '../models/produit';
import { Pay } from 'src/shared/actions/produit-actions';

@State<ProduitStateModel>({
  name: 'produit',
  defaults: {
    produit: [],
  },
})
@Injectable()
export class ProduitState {
  @Selector()
  static getNbProduit(state: ProduitStateModel) {
    return state.produit.length;
  }

  @Selector()
  static getListeProduit(state: ProduitStateModel) {
    return state.produit;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      produit: [...state.produit, payload],
    });
  }

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: DelProduit
  ) {
    const state = getState();
    patchState({
      produit: state.produit.filter(
        (x) => !(payload.nom == x.nom && payload.id == x.id)
      ),
    });
  }

  @Action(Pay)
  delAllProduits(ctx: StateContext<ProduitStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      produit: []
    });
  }
}
