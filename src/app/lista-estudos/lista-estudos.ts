import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-estudos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './lista-estudos.html',
  styleUrls: ['./lista-estudos.css'],
})

export class ListaEstudos {
  campoTarefa = '';
  mensagem = '';
  tarefas: Tarefa[] = [];

  criarTarefa(texto: string): Tarefa {
    return {
      id: Date.now(),
      texto: texto,
      concluida: false
    };
  }

  adicionarTarefa(): void {
    const texto = this.campoTarefa
      .trim()
      .replace(/\s+/g, ' ');

    this.mensagem = '';
    if (texto === '') {
      this.mensagem = 'Digite uma tarefa antes de adicionar.';
      return;
    }
    const tarefaExiste = this.tarefas.some(
      tarefa => tarefa.texto.toLowerCase() === texto.toLowerCase()
    );
    if (tarefaExiste) {
      this.mensagem = 'Esta tarefa já foi adicionada.';
      return;
    }
    const novaTarefa = this.criarTarefa(texto);
    this.tarefas = [...this.tarefas, novaTarefa];
    this.campoTarefa = '';
  }

  alternarConclusao(id: number): void {
    this.tarefas = this.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        };
      }
      return tarefa;
    });
  }

  removerTarefa(id: number): void {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get tarefasConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  get tarefasPendentes(): number {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}
