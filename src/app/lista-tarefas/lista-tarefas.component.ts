import { Component } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { Subtarefa } from '../models/subtarefa.model';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, TarefaComponent],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Preparar apresentação do projeto',
      subtarefas: [
        { id: 1, descricao: 'Coletar dados de pesquisa', concluida: false },
        { id: 2, descricao: 'Criar slides principais', concluida: false },
        { id: 3, descricao: 'Revisar conteúdo', concluida: false },
        { id: 4, descricao: 'Preparar demonstração', concluida: false }
      ]
    },
    {
      id: 2,
      titulo: 'Organizar escritório',
      subtarefas: [
        { id: 5, descricao: 'Limpar mesa de trabalho', concluida: true },
        { id: 6, descricao: 'Organizar documentos', concluida: false },
        { id: 7, descricao: 'Configurar equipamentos', concluida: false }
      ]
    },
    {
      id: 3,
      titulo: 'Planejamento semanal',
      subtarefas: [
        { id: 8, descricao: 'Revisar calendário', concluida: true },
        { id: 9, descricao: 'Definir prioridades', concluida: true },
        { id: 10, descricao: 'Agendar reuniões', concluida: false },
        { id: 11, descricao: 'Preparar lista de compras', concluida: false }
      ]
    }
  ];

  onSubtarefaAtualizada(event: { tarefaId: number, subtarefaId: number, concluida: boolean }): void {
    const tarefa = this.tarefas.find(t => t.id === event.tarefaId);
    if (tarefa) {
      const subtarefa = tarefa.subtarefas.find(s => s.id === event.subtarefaId);
      if (subtarefa) {
        subtarefa.concluida = event.concluida;
        console.log(`Subtarefa "${subtarefa.descricao}" marcada como ${event.concluida ? 'concluída' : 'pendente'}`);
      }
    }
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalSubtarefas(): number {
    return this.tarefas.reduce((total, tarefa) => total + tarefa.subtarefas.length, 0);
  }

  get subtarefasConcluidas(): number {
    return this.tarefas.reduce((total, tarefa) =>
      total + tarefa.subtarefas.filter(sub => sub.concluida).length, 0);
  }
} 