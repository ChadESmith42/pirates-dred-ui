import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'character', loadComponent: () => import('../components/character/character.component').then(c => c.CharacterComponent) },
  { path: 'character/create', loadComponent: () => import('../components/character/create-character/create-character.component').then(c => c.CreateCharacterComponent) },
];
