import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subtarefa } from '../models/subtarefa.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subtarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtarefa.component.html',
  styleUrl: './subtarefa.component.css'
})
export class SubtarefaComponent {
  @Input() subtarefa!: Subtarefa;
  @Output() statusChanged = new EventEmitter<{ subtarefaId: number, concluida: boolean }>();

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.statusChanged.emit({
      subtarefaId: this.subtarefa.id,
      concluida: checkbox.checked
    });
  }
} 