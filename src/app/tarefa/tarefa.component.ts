import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { SubtarefaComponent } from '../subtarefa/subtarefa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, SubtarefaComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() subtarefaAtualizada = new EventEmitter<{ tarefaId: number, subtarefaId: number, concluida: boolean }>();

  onSubtarefaStatusChanged(event: { subtarefaId: number, concluida: boolean }): void {
    this.subtarefaAtualizada.emit({
      tarefaId: this.tarefa.id,
      subtarefaId: event.subtarefaId,
      concluida: event.concluida
    });
  }

  get subtarefasConcluidas(): number {
    return this.tarefa.subtarefas.filter(sub => sub.concluida).length;
  }

  get totalSubtarefas(): number {
    return this.tarefa.subtarefas.length;
  }
} 