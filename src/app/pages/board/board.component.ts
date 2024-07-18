import { Component } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, CommonModule, DialogModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  todos: ToDo[] = [
    
  ];

  doing: ToDo[] = [
    
  ];
  done: ToDo[] = [
    
  ];

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '4',
          title: 'Play videogames',
        },
        {
          id: '5',
          title: 'Chase Charly around the house',
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular path in Platzi',
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'Make dishes',
        },
        {
          id: '2',
          title: 'Buy an unicorn',
        },
      ]
    }
  ]

  constructor(
    private dialog: Dialog
  ) {}

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data, event.container.data, event.previousIndex,
        event.currentIndex
      )
    }
  }

  addTask() {
    
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    })
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
    });
  }
}
