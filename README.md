# Gerenciador de Tarefas com Subtarefas

Aplicação Angular para gerenciamento de tarefas e subtarefas, permitindo visualizar, marcar como concluídas e acompanhar o progresso de cada tarefa. Ideal para organização pessoal ou de equipes pequenas. Objetivo desta aplicação é estudar o uso de Data Binding no Angular.

## Funcionalidades

- Visualização de uma lista de tarefas, cada uma com suas subtarefas
- Marcação de subtarefas como concluídas ou pendentes
- Progresso visual de cada tarefa e estatísticas gerais
- Interface moderna, responsiva e fácil de usar
- Comunicação eficiente entre componentes Angular (pai, filho, neto)

## Estrutura dos Componentes

- **ListaTarefasComponent**: controla a lista de tarefas e estatísticas gerais
- **TarefaComponent**: exibe uma tarefa e suas subtarefas
- **SubtarefaComponent**: permite marcar subtarefas como concluídas

## Como rodar o projeto

### 1. Clonando o repositório

```bash
git clone <url-do-repositorio>
cd subtask
```

### 2. Instalando as dependências

```bash
npm install
```

### 3. Executando a aplicação

```bash
npm start
```

Acesse em [http://localhost:4200](http://localhost:4200)

## Scripts úteis

- `npm start`: inicia o servidor de desenvolvimento
- `ng build`: gera a build de produção
- `ng test`: executa os testes unitários

## Observações

- O projeto utiliza Angular Standalone Components (Angular 17+)
- Os dados são mockados apenas para demonstração
- Sinta-se à vontade para customizar e evoluir a aplicação!
