import { Component, signal } from '@angular/core';
import { BoasVindas } from './boas-vindas/boas-vindas';

@Component({
  selector: 'app-root',
  imports: [BoasVindas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('meu-app');
}
