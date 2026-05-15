import { Component, signal } from '@angular/core';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { PlanoEstudo } from './plano-estudo/plano-estudo';
import { ListaEstudos } from './lista-estudos/lista-estudos';

@Component({
  selector: 'app-root',
  imports: [
    ListaEstudos,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('meu-app');
}
