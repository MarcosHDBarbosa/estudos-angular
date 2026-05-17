import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import type { Topico } from './topico-estudo.model';
import { Status } from './topico-estudo.model';

@Component({
  selector: 'app-topico-estudo',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './topico-estudo.html',
  styleUrl: './topico-estudo.css',
})

export class TopicoEstudo {
  topicos: Array<Topico> = [];

  novoTitulo:string = '';
  novaDescricao:string = '';
  novasHoras:number = 0;

  statusDisponiveis: Array<Status> = [
    'Pendente',
    'Cursando',
    'Concluido'
  ];

  mensagem:string = '';

  filtroStatus: string = 'todos';

  constructor() {
    this.adicionarTopico(
      'HTML',
      'Estrutura e semântica',
      8
    );

    this.adicionarTopico(
      'CSS',
      'Estilo, layout e responsividade',
      12
    );

    this.adicionarTopico(
      'JavaScript',
      'Fundamentos da linguagem',
      20
    );

    this.adicionarTopico(
      'TypeScript',
      'Tipagem e preparação para Angular',
      16
    );
  }

  adicionarTopico(
    titulo: string,
    descricao: string,
    horasEstimadas: number
  ): void {

    const novoTopico: Topico = {
      id: crypto.randomUUID(),
      titulo,
      descricao,
      horasEstimadas,
      status: 'Pendente'
    };

    this.topicos.push(novoTopico);
  }

  incluirTopico(): void {
    this.mensagem = ''
    if (
      !this.novoTitulo ||
      !this.novaDescricao ||
      this.novasHoras <= 0
    ) {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    this.adicionarTopico(
      this.novoTitulo,
      this.novaDescricao,
      this.novasHoras
    );

    this.novoTitulo = '';
    this.novaDescricao = '';
    this.novasHoras = 0;
  }

  alterarStatus(
    id: string,
    novoStatus: Status
  ): void {

    const topico = this.topicos.find(
      item => item.id === id
    );

    if (!topico) {
      return;
    }

    topico.status = novoStatus;
  }

  inativarTopico(id: string): void {
    this.topicos = this.topicos.map((topico) => {
      if (topico.id === id) {
        return {
          ...topico,
          inativa: !topico.inativa
        };
      }
      return topico;
    });
  }

  removerTopico(id: string): void {
    this.topicos = this.topicos.filter((topico) => topico.id !== id);
  }

  get topicosFiltrados(): Array<Topico> {
    if (this.filtroStatus === 'todos') {
      return this.topicos;
    }
    return this.topicos.filter(
      topico => topico.status === this.filtroStatus
    );
  }
}