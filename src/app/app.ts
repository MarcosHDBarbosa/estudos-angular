import { Component, signal } from '@angular/core';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { PlanoEstudo } from './plano-estudo/plano-estudo';
import { ListaEstudos } from './lista-estudos/lista-estudos';
import { TopicoEstudo } from './topico-estudo/topico-estudo';

@Component({
  selector: 'app-root',
  imports: [
    TopicoEstudo,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('meu-app');
}
