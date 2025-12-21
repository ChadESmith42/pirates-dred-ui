import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'character', loadComponent: () => import('../components/character/character.component').then(c => c.CharacterComponent) },
];
