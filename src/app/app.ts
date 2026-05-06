import { Component, signal } from '@angular/core';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { PlanoEstudo } from './plano-estudo/plano-estudo';

@Component({
  selector: 'app-root',
  imports: [PlanoEstudo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('meu-app');
}
