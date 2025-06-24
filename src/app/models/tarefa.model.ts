import { Subtarefa } from './subtarefa.model';

export interface Tarefa {
  id: number;
  titulo: string;
  subtarefas: Subtarefa[];
} 